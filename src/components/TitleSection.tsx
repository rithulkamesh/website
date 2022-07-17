import React from 'react';

const TitleSection : React.FC<TitleSectionProps> = ({children, bgColor, className} : TitleSectionProps) => {
    return (
        <div style={{
            backgroundColor: bgColor,
            height: "80vh"
        }} className={className}>
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