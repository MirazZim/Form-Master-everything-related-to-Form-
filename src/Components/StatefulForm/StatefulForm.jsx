//2. Use individual field State

import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email,password,name)
        
    }
    
    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleNameChange}
                type="name" name="name" />
                <br />
                <br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <br />
                <input
                    onChange={handlePasswordChange}
                type="password" name="password"/>
                <br />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;