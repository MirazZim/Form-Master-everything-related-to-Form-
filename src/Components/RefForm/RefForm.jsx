
//Uncontrolled element: useRef to create a reference to the element and access value by using like : nameRef.current.value

import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect( () => {
            nameRef.current.focus();
        }
        ,[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={nameRef} type="name" name="name" />
                <br />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <br />
                <input ref={passwordRef} type="password" name="password"/>
                <br />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;