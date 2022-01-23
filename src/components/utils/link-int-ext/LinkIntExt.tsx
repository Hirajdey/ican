import { ReactNode } from "react";
import {Link}  from "react-router-dom";

export interface BaseProps {
    title?: string;
    className?: string;
    itemProp?: string;
    children: ReactNode;
}

interface ExternalRouteProps extends BaseProps{
    openInNewTab: boolean;
    href: string;
}

interface InternalRouteProps extends BaseProps{
    routeto: string;
}

type LinkIntExtProps = InternalRouteProps | ExternalRouteProps;


const LinkIntExt = ({title, className, itemProp, children, ...props}:LinkIntExtProps) => {
    
    const { openInNewTab, href } = props as ExternalRouteProps;
    const { routeto } = props as InternalRouteProps;
    
    return (
        <>
            {openInNewTab ? (
                <a      
                    href={href}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    title={title}
                    className={className}
                    {...props}
                >
                    {children}
                </a>    
            ):(
                <Link 
                    to={routeto}
                    title={title}
                    className={className}
                    {...props}
                >
                    {children}
                </Link>    
            )}
        </>
    )
}

export default LinkIntExt
