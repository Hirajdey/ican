import React, { ReactNode, useState, useEffect, useRef } from 'react'
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

    const collapseInnerRef = useRef<HTMLDivElement>(null!);
    const [activeId, setActiveId] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [collapseHeight, setCollapseHeight] = useState<number>(0);
    
    
    const onClickHandleCollapse = (elmId:number, event:any) => {
        setActiveId(elmId)
        // console.log(event.parentNode);
        
        if(elmId === id){
            setIsOpen(!isOpen)
        }
    }

    useEffect(() => {
        const maxContent = collapseInnerRef.current.offsetHeight;
        setCollapseHeight(maxContent)
        if(activeId === id){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    },[activeId])

    return (
        <div className={classnames(Styles.main, mainClass)}>
            <div className={classnames(Styles.header, headerClass)} onClick={(e) => onClickHandleCollapse(id, e.currentTarget)}>
                <h3>
                    <span>{id+1}</span> 
                    {header} 
                    <span className={Styles.plusMinus}>
                        {isOpen ?(
                            <i className={Styles.minus}>-</i>
                        ):(
                            <i className={Styles.plus}>+</i>
                        )}
                    </span>
                </h3>
            </div>
            <div 
                className={classnames(Styles.collapse, collapseClass, isOpen ? Styles.open : '')} 
                style={{height:`${isOpen ? `${collapseHeight}px`:'0px'}`}}
            >
                <div ref={collapseInnerRef} className={Styles.collapseInner}>
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
        </div>
    )
}

export default CustomAccordion


