import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPw] = useState("");
    const [newAccount, setNewA] = useState(true);

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPw(value);
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
        let data;
        const auth = getAuth();
        if(newAccount){
            data = await createUserWithEmailAndPassword(auth, email, password);
        }else{
            data = await signInWithEmailAndPassword(auth, email, password)
        }
        console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    return(<>
    <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" value={email} onChange={onChange} required/>
        
        <input name="password" type="password" playcehoder="Password" value={password} onChange={onChange} required/>
        <input type="submit" value={newAccount? "Create Account!":"Log In"}/>
    </form>
    
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>
    </>)
};

export default Auth;