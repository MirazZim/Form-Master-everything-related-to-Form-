import useInputState from "../../hooks/useInputState";


const HookForm = () => {

// const [name , handleNameChange] = useInputState('Rojoni')

const emailState = useInputState('lollaKOlla@lol.go')
const passwordState = useInputState('')

const handleSubmit = e => {
    console.log('Form data :', emailState.value)
    console.log('Form password :', passwordState.value)
    e.preventDefault();
}

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={handleNameChange} type="name" name="name" /> */}
                <br />
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <br />
                <input {...passwordState} type="password" name="password"/>
                <br />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;