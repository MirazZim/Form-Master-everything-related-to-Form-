

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.name.value);
        console.log('Form Submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" />
                <br />
                <br />
                <input type="text" name="name"/>
                <br />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;