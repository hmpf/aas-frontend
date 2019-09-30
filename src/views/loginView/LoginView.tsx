import React, {useState} from 'react';
import "./LoginView.css";
import Axios from "axios";
import Header from '../../components/header/Header';
import {Redirect} from "react-router-dom";

const LoginView: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);


    const onSubmit = () =>{
        console.log("lmao");
        setRedirect(true);
    };

    const getMoney = async () => {
        //get feideshit
        await Axios({
            url: "få opp farta Anders",
            method: "GET",
        })
        return <Redirect to="/"/>;
    };

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUsername(e.target.value);
        console.log(username);

    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
        console.log(password);

    };

    if (redirect) {
        return <Redirect to="/"/>
    }
    return (
        <div>
             <header>
        <Header></Header>
      </header>
      <div className='container'>
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                <input name={"username"} value={username} placeholder={"Email"} onChange={handleUsername}/>
                </div>
                <div>
                <input name={"password"} value={password} placeholder={"Password"} onChange={handlePassword}/>
                </div>
                <button type="submit"> Log in</button>
            </form>
            <a href={"feide"}>login with feide</a>
        </div>
        </div>
      </div>


    );
};

export default LoginView;