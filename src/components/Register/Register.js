import React, {useState} from 'react';

const Register = () => {
    const [userData, setUserData] = useState({
        username : "",
        password : "",
    });
    const [step,setStep] = useState()

    const inputHandler = e =>{
        const {name,value} = e.target
        setUserData(prevState => ({
          ...prevState,
        [name]:value
        }))
    }
    const registerHandler = e =>{
        e.preventDefault()
        console.log("userData", userData)
    }


    return (
        <form className="register" onSubmit={registerHandler}>
            <input type="text"
                   name="username"
                   value={userData.username}
                   onChange={inputHandler}
                   placeholder="Name..."/>
            <input type="password"
                   name="password"
                   value={userData.password}
                   onChange={inputHandler}
                   placeholder="Password..."/>
            <button type="submit">Register</button>
        </form >
    );
};


export default Register;