import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchJoke = () => {
      fetch(`${process.env.REACT_APP_API_URL}`)
        .then((response) => response.json())
        .then((data) => setJokes(data))
        .catch((error) => console.error('Error fetching jokes:', error));
    }
    fetchJoke();
    const interval = setInterval(fetchJoke, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '89.86vh' }}>

      <Card.Text className='text-center heading text-primary' style={{ fontSize: '5rem', width: '48rem',marginTop:'-100px', paddingBottom: '3rem', borderRadius: '8rem' }}>
        Laugh Out Loud!!!
      </Card.Text>
      <Card.Text className='bg-primary text-center text-white' style={{ 
        // backgroundColor: 'rgba(0,0,0,0.3)', 
        fontSize: '1rem', width: '48rem', padding: '3rem', borderRadius: '8rem', boxShadow: '0 0 5px rgba(0,0,0,1)' }}>
        {jokes.joke}
      </Card.Text>

    </div>
  )
}

export default Jokes