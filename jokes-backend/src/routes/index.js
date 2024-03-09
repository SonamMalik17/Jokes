const express = require('express');
const user = require("../models/index");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "MYFAVORITEPLAYERISABDEVILLIERS";

router.post("/signup",
    body('name', 'Invalid username').isString(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isString()
        .isLength({ min: 8 })
        .not()
        .isLowercase()
        .not()
        .isUppercase()
        .not()
        .isNumeric()
        .not()
        .isAlpha(),
    body('location', "Location doesn't exist").isLength({ min: 3 })
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);
        try {
            await user.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

router.post("/login",
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isString().isLength({ min: 8 }).not().isLowercase().not().isUppercase().not().isNumeric().not().isAlpha(), async (req, res) => {
        let email = req.body.email;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let userData = await user.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }
            const data = {
                user: {
                    id: userData._id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken })
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;