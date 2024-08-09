import React, { useEffect, useState } from "react";
import portfolio from "../data/project.json";
import { Github, Link } from "react-bootstrap-icons";

function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(portfolio);
  }, []);

  const active = (e) => {
    const elementTarget = e.target;

    if (elementTarget.innerText.toLowerCase() == "open source") {
      setProject(filterPrivate(portfolio));
    } else if (elementTarget.innerText.toLowerCase() == "closed source") {
      setProject(filterPublic(portfolio));
    } else {
      setProject(portfolio);
    }

    document
      .querySelectorAll(".isActive")
      .forEach((e) => e.classList.add("border-transparent"));
    document
      .querySelectorAll(".isActive")
      .forEach((e) => e.classList.remove("border-custom-white"));

    elementTarget.classList.remove("border-transparent");
    elementTarget.classList.add("border-custom-white");
  };

  const filterPrivate = (project) =>
    project.filter((e) => e.visibility != "private");

  const filterPublic = (project) =>
    project.filter((e) => e.visibility != "public");

  console.log(project);

  return (
    <section className="flex flex-wrap flex-col place-items-center">
      <div className="border-2 border-none rounded-md bg-custom-black z-10 py-11 px-5 text-custom-white w-11/12 sm:w-9/12 lg:w-7/12">
        <h2 className="text-3xl text-center font-bold">Portfolio</h2>
        <nav className="flex justify-center gap-5 mt-10 text-center *:w-32 ">
          <button
            onClick={active}
            className="active isActive border-b-2 border-custom-white hover:border-custom-white transition-all"
          >
            All
          </button>
          <button
            onClick={active}
            className="isActive border-b-2 border-transparent hover:border-custom-white transition-all"
          >
            Open Source
          </button>
          <button
            onClick={active}
            className="isActive border-b-2 border-transparent hover:border-custom-white transition-all"
          >
            Closed Source
          </button>
        </nav>
      </div>

      <div className="grid grid-rows-1 mt-5 z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 justify-items-center">
          {project.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ project }) {
  const path = `/image/portfolio`;

  return (
    <div className="flex sm:block justify-center">
      <article className="w-11/12 sm:w-80 h-auto bg-custom-black rounded-md backdrop-blur-0 text-white">
        <img
          className="rounded-t-md w-full h-48 object-cover object-[80%_20%] sm:object-[80%_50%]"
          src={`${path}/${project.image}`}
          alt=""
        />

        <div className="mx-3 py-5">
          <div className="flex *:text-3xl gap-3">
            {project.source != null ? (
              <a href={project.source} target="_blank">
                <Github className="w-5" />
              </a>
            ) : (
              ""
            )}

            {project.link != null ? (
              <a href={project.link} target="_blank">
                <Link className="w-5" />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="my-3">
            <h6 className="text-2xl my-2">{project.name}</h6>
            <p>{project.description}</p>
          </div>
          <div className="overflow-x-auto">
            <ul className="flex gap-3 pb-5">
              {project.tools.map((tech) => (
                <li key={tech} className="bg-blue-500 rounded-xl px-5">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Portfolio;
