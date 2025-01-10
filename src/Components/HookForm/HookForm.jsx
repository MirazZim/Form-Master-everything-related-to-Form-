import useInputState from "../../hooks/useInputState";


const HookForm = () => {

const [name , handleNameChange] = useInputState('Rojoni')

const handleSubmit = e => {
    console.log('Form data', name)
    e.preventDefault();
}

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input value={name} onChange={handleNameChange} type="name" name="name" />
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="password" name="password"/>
                <br />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;