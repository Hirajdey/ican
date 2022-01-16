import React, { ReactNode, useState, useEffect } from 'react'
import classnames from 'classnames';
import Styles from './CustomAccordion.module.scss';


interface CustomAccordionProps{
    id: number;
    header: string;
    description?: string;
    lists?: string[];
    body?: ReactNode;
    mainClass?: string;
    headerClass?: string;
    collapseClass?: string;
    listsClass?: string;
    bodyClass?: string;
}

const CustomAccordion = ({id, header, description, lists, body, mainClass, headerClass, collapseClass, listsClass, bodyClass}:CustomAccordionProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <div className={classnames(Styles.main, mainClass)}>
            <div className={classnames(Styles.header, headerClass)} onClick={() => setIsOpen(!isOpen)}>
                <h3><span>{id+1}</span> {header} <span>+</span></h3>
            </div>
            <div className={classnames(Styles.collapse, collapseClass, isOpen ? Styles.open :"")}>
                {description && (
                    <p>{description}</p>
                )}
                {lists && (
                    <ul className={classnames(Styles.lists, listsClass)}>
                        {lists.map((list, index) => (
                            <li key={index}>
                                {list}
                            </li>
                        ))}
                    </ul>
                )}
                {body && (
                    <div className={classnames(Styles.body, bodyClass)}>
                        {body}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomAccordion


