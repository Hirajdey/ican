import Styles from './YoutubeForm.module.scss'

// hooks
import { Formik, Form, Field, ErrorMessage } from 'formik'
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

function FormikComponents() {

    return (
        <div className={Styles.main}>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className={Styles.formcontrol}>
                        <label htmlFor='name'>Name</label>
                        <Field 
                            type="text" 
                            id='name' 
                            name='name' 
                        />
                        <ErrorMessage name='name'/>
                    </div>
                    
                    <div className={Styles.formcontrol}>
                        <label htmlFor='email'>E-mail</label>
                        <Field 
                            type="email" 
                            id='email' 
                            name='email' 
                        />
                        <ErrorMessage name='email'/>
                    </div>
                    
                    <div className={Styles.formcontrol}>
                        <label htmlFor='channel'>Channel</label>
                        <Field 
                            type="text" 
                            id='channel' 
                            name='channel' 
                        />
                        <ErrorMessage name='channel'/>
                    </div>
                    
                    <div>
                        <button type="submit">Submit</button>    
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikComponents
