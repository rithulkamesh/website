import React from "react";
import { FaGithub } from 'react-icons/fa';


const pagesData = [
    {
        name: "projects",
        href: "/"
    },
    {
        name: "blog",
        href: "/blog"
    },
    {
        name: "about",
        href: "/about"
    }
];

const Nav : React.FC = () => {
    return (
        <div className="flex p-14 px-24 pb-10">
            <h1 className={"font-bold text-2xl mr-14"}><a href="/">RITHUL KAMESH</a></h1>
            <ul className="flex">
                {pagesData.map(page => {
                    return (
                        <li key={page.name} className="hidden md:block text-2xl mr-14">
                            <a href={page.href}>{page.name}</a>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
        )
}

export default Nav;