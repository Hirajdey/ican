import React from 'react';
import './App.css';
import { faqs } from './components/constant'; 

import CustomAccordion from './components/utils/custom-accordion/CustomAccordion';


function App() {
  return (
    <div className="">

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
      />
    ) )}
    
    </div>
  );
}

export default App;
