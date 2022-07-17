import React from "react"
import Nav from "../components/nav"
import TitleSection from "../components/TitleSection"

const IndexPage = () => {

  const bday = new Date('May 10, 2006').getTime();
  const calc = () => {
    const diff = new Date().getTime() - bday;
    return (diff / 1000 / 60 / 60 / 24 / 365).toFixed(1);
  };

  return (
    <main>
      <title>Home | Rithul Kamesh</title>
      <Nav />
      <TitleSection bgColor="#f1f8e9">
        <div className="text-black flex items-center justify-center flex-col h-80">
          <h1 className="text-5xl font-bold pb-5">Hi, my name is Rithul.</h1>
          <p className="text-xl font-semibold max-w-5xl px-3 text-center">I'm a {calc()} year old student in Bangalore, India and Love making Web apps and Games. Currently making a game like Hytale and VintageStory. I'm an all-rounder but specialise in making what the user sees and helps make it pleasing and have thus made, and maintained this website.</p>
        </div>
      </TitleSection>
    </main>
  )
}

export default IndexPage
