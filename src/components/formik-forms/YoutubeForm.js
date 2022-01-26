import Styles from './YoutubeForm.module.scss'

// hooks
import { useFormik, FormikValues } from 'formik'

// interface InitialValuesProps{
//     name: string;
//     email: string;
//     channel: string;
// }

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(
        'Form Data:', values
    );
}

const validate = values => {
    //values.name values.email, values.channel
    //errors.name, errors.email, errors.channel
    //errors.name = 'this field is required'

    let errors = {}

    if(!values.name){
        errors.name = 'Name Required'
    }

    if(!values.email){
        errors.email = 'Email Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'   
    }

    if(!values.channel){
        errors.channel = 'Channel Required'
    }
    
    return errors;
}

function YoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Form Errors', formik.errors)

    return (
        <div className={Styles.main}>
            <form onSubmit={formik.handleSubmit}>
                <div className={Styles.formcontrol}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
                    {formik.errors.name && <span className={Styles.error}>{formik.errors.name}</span>}
                </div>
                
                <div className={Styles.formcontrol}>
                    <label htmlFor='email'>E-mail</label>
                    <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                    {formik.errors.email && <span className={Styles.error}>{formik.errors.email}</span>}
                </div>
                
                <div className={Styles.formcontrol}>
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
                    {formik.errors.channel && <span className={Styles.error}>{formik.errors.channel}</span>}
                </div>
                
                <div>
                    <button type="submit">Submit</button>    
                </div>
            </form>
        </div>
    )
}

export default YoutubeForm
