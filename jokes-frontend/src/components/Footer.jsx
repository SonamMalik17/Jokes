import React from 'react'
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
    return (
        <div className="shadow fixed-bottom">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="p-4 flex-wrap"
                style={{ width: '100%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-primary text-decoration-none">
                        <img
                            src="img/jokes_logo.png"
                            width="50" height="50"
                            alt="Logo"
                        />
                        <span className="ms-2 h5 mb-0 font-weight-bold">Jokes</span>
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ms-2 text-primary">&copy; Jokes, 2024. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="primary" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="primary" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="primary" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </div>
    )
}

export default Footer