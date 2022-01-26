import Styles from './YoutubeForm.module.scss'

// hooks
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form Data:', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email format').required('Email required'),
    channel: Yup.string().required('Channel required')
})

function YoutubeFormUpdated() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div className={Styles.main}>
            <form onSubmit={formik.handleSubmit}>
                <div className={Styles.formcontrol}>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        // value={formik.values.name}
                        {...formik.getFieldProps('name')}
                    />
                    {(formik.touched.name && formik.errors.name) && <span className={Styles.error}>{formik.errors.name}</span>}
                </div>
                
                <div className={Styles.formcontrol}>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur} 
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                    {(formik.touched.email && formik.errors.email) && <span className={Styles.error}>{formik.errors.email}</span>}
                </div>
                
                <div className={Styles.formcontrol}>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type="text" 
                        id='channel' 
                        name='channel' 
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        // value={formik.values.channel} 
                        {...formik.getFieldProps('channel')}
                    />
                    {(formik.touched.channel && formik.errors.channel) && <span className={Styles.error}>{formik.errors.channel}</span>}
                </div>
                
                <div>
                    <button type="submit">Submit</button>    
                </div>
            </form>
        </div>
    )
}

export default YoutubeFormUpdated
