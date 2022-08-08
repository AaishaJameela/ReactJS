import React, {useState} from 'react';
import Contact from'./Contact.js';
import pic from'./assets/welcome.jpg';

const Home = () => {
 const [click, setClick] = useState(0)
  return (
        <div>
        <div>Hi, welcome to this page!</div>
        <div><img src={pic} /></div>
        <p>You have clicked {click} times.</p>
        <button onClick = {() => setClick(click + 1)}>Increment</button>
        <button onClick = {() => setClick(click - 1)}>Decrement</button>
        </div>
    );
    }
    export default Home;