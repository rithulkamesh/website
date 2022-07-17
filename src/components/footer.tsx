import React from 'react';

const Footer : React.FC = () => {
    return (
        <footer className="p-10">
            <div className="flex justify-center">
                &copy; {new Date().getFullYear()} Rithul Kamesh. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;
