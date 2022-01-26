import React from 'react'
import Styles from './YoutubeForm.module.scss'

// hooks
import { useFormik, FormikValues } from 'formik'

// interface InitialValuesProps{
//     name: string;
//     email: string;
//     channel: string;
// }

function YoutubeForm() {

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log(
                'Form Data:', values
            );
        }
    })

    // console.log('Form values', formik.values)

    return (
        <div className={Styles.main}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor='email'>E-mail</label>
                <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor='channel'>Channel</label>
                <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
