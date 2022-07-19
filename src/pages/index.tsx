import React from "react"
import Nav from "../components/nav"
import ProjectCard from "../components/ProjectCard";
import TitleSection from "../components/TitleSection"

const IndexPage = () => {

  const bday = new Date('May 10, 2006').getTime();
  const calc = () => ((new Date().getTime() - bday) / 1000 / 60 / 60 / 24 / 365).toFixed(1);

  return (
    <main>
      <title>Home | Rithul Kamesh</title>
      <Nav />
      <TitleSection bgColor="#f1f8e9">
        <div className="text-black flex items-center justify-center flex-col h-70">
          <h1 className="text-5xl font-bold pb-5">Hi, I'm Rithul.</h1>
          <p className="text-xl font-semibold max-w-5xl px-3 text-center">I'm a <a href="/ "><u>{calc()}</u></a> year old student in Bangalore, India and I love making web apps and games. I'm currently working on a game inspired by VintageStory. I'm an all-rounder but I specialize in user experience and design. I have thus made and maintain this website.</p>
        </div>
      </TitleSection>

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl pb-5 p-20 md:pl-52">Projects</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:pl-52">
        <ProjectCard  name="Hello" description="Hello Again" image="https://source.unsplash.com/random/300×300" link="/projects/project"/>
          <ProjectCard  name="Hello" description="Hello Again" image="https://source.unsplash.com/random/300×300" link="/projects/project"/>
          <ProjectCard  name="Hello" description="Hello Again" image="https://source.unsplash.com/random/300×300" link="/projects/project"/>
          </div>
      </div>
    </main>
  )
}

export default IndexPage
