import React from "react";
import AboutMe from "../components/Section/AboutMe";
import SkillSet from "../components/Section/SkillSet";

function About() {
  return (
    <section className="mt-10 mx-auto *:w-11/12 flex flex-col items-center place-content-center flex-wrap">
      <AboutMe />
      <SkillSet />
    </section>
  );
}

export default About;
