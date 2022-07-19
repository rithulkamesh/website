import React from 'react';

const TitleSection : React.FC<TitleSectionProps> = ({children, bgColor, className} : TitleSectionProps) => {
    return (
        <div style={{
            backgroundColor: bgColor,
        }} className={className + "h-70"}>
            {children}
        </div>
    )
}

export default TitleSection;

type TitleSectionProps = {
    // React Children
    children: React.ReactNode,
    bgColor: string,
    className?: string
}