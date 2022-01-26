import React from 'react'

import { faqs } from '../../components/constant'; 
import CustomAccordion from '../../components/utils/custom-accordion/CustomAccordion';
import LinkIntExt from '../../components/utils/link-int-ext/LinkIntExt';
import FormikComponents from '../formik-forms/FormikComponents';
import YoutubeForm from '../formik-forms/YoutubeForm';
import YoutubeFormUpdated from '../formik-forms/YoutubeFormUpdated';
import FormikAdvance from '../formik-forms/FormikAdvance';


const Home = () => {
    return (
        <div style={{padding:"20px"}}>
            <h5>
                Custom Reusable Accordion
            </h5>
            {faqs.map((faq,index) => (
                <CustomAccordion 
                    id={index}
                    header={faq.title}
                    description={faq.description}
                    lists={faq.list}
                    body={<p>Hiraj</p>}
                    mainClass={''}
                    headerClass={''}
                    collapseClass={''}
                    listsClass={''}
                    bodyClass={''}
                    key={index}
                />
            ) )}

            <h5>
                Reusable Internal/External Link 
            </h5>
            <LinkIntExt 
                routeto="/about"
            > 
                Know More
            </LinkIntExt>

            
            <h5>
                User input form using formik
            </h5>
            <YoutubeForm/>
            
            <YoutubeFormUpdated/>
            
            <h5>Formik Components</h5>
            <FormikComponents/>
            
            <h5>Formik Advance</h5>
            <FormikAdvance/>
            
        </div>
    )
}

export default Home
