import React, {useState} from 'react';
import "./Register.scss";

const Register = () => {
    const [userData, setUserData] = useState({
        username : "",
        password : "",
    });
    const [step,setStep] = useState(1);
    const [users, setUsers] = useState([]);
    const [nameError, setNameError] = useState(false);

    const inputHandler = e =>{
        const {name,value} = e.target

        setUserData(prevState => ({
          ...prevState,
        [name]:value
        }))
    }
    const registerHandler = e =>{
        e.preventDefault()
        setUsers(prevState => [...prevState,userData])
        setStep(1)
        if(nameError){
            setNameError(false)
        }
        setUserData({
            username : "",
            password : "",
        })
    }
    const stepHandler = () =>{

        const user = users.find(user => user.username === userData.username)

        if(user){
           return setNameError(true)
        }

        setStep(step + 1)
    }
    console.log("users",users)


    return (

            <form className="register"
                  onSubmit={registerHandler}>
                {step === 1
                    ? <input type="text"
                             name="username"
                             className={`register__input error ${nameError ? 'error' : ''}`}
                             value={userData.username}
                             onChange={inputHandler}
                             placeholder="Name..."/>
                    : <input type="password"
                             name="password"
                             className="register__input error"
                             value={userData.password}
                             onChange={inputHandler}
                             placeholder="Password..."/>}


            {step === 1 ? <div style={{
                border: "1px solid red",
                padding:"5px 20px",
                marginTop:20,
                cursor:"pointer"}}
                                    onClick={stepHandler}>Next step</div>
                :  <button type="submit">Register</button>}
            </form >
    );
};


export default Register;