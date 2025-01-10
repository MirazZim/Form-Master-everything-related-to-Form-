

const ReusableForm = ({FormTitle ,handleSubmit ,submitBtnText = 'Submit'}) => {
    //Ager code you can find it in component/simpleForm
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    //anything new will be start from here

    return (
        <div>
            <h2>{FormTitle}</h2>
            <form onSubmit={handleLocalSubmit} >
                <input  type="name" name="name" />
                <br />
                <br />
                <input  type="email" name="email" />
                <br />
                <br />
                <input  type="password" name="password"/>
                <br />
                <br />
                <input type="Submit" value={submitBtnText}  />
            </form>
        </div>
    );
};

export default ReusableForm;