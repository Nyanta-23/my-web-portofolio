import React, { useState } from "react";
import { Envelope, Linkedin, Instagram } from "react-bootstrap-icons";

function ContactMe() {
  const [size, setSize] = useState(25);

  return (
    <section className="pt-10 flex justify-center">
      <article className="border-2 border-none rounded-md bg-custom-black z-10 py-11 text-custom-white w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 backdrop-blur-md">
        <h2 className="text-3xl text-center">Interest With Me?</h2>

        <div className="my-10 text-wrap mx-5 sm:mx-auto sm:max-w-96 text-sm *:my-2">
          <a href="#" className="flex place-items-center gap-5">
            <Envelope className="text-2xl sm:text-3xl" /> muhamadilhan02404@gmail.com
          </a>
          <a href="#" className="flex place-items-center gap-5">
            <Linkedin className="text-2xl sm:text-3xl" />
            Muhamad Ilhan Revaliana Firmansyah
          </a>
          <a href="#" className="flex place-items-center gap-5">
            <Instagram className="text-2xl sm:text-3xl" />
            @ihaannn_
          </a>
        </div>

        {/* <ul className="mx-10 my-10 *:my-2 w-full *:text-wrap">
          <li>
            <a
              href="mailto:muhamadilhan02404@gmail.com"
              className="flex place-items-center"
            >
              <Envelope className="w-60"/>
              <p className="">muhamadilhan02404@gmail.com</p>
            </a>
          </li>
          <li className="grid-rows-1">
            <a href="https://www.linkedin.com/in/ihaannn/" className="" target="_blank">
              <Linkedin />
              <p>Muhamad Ilhan Revaliana Firmansyah</p>
            </a>
          </li>
          <li className="grid-rows-1">
            <a href="https://www.instagram.com/ihaannn_" className="" target="_blank">
              <Instagram />
              <p>@ihaannn_</p>
            </a>
          </li>
        </ul> */}

        <p className="text-center text-xl lg:mx-1">
          Dont be shy to call me, i love to meet someone.
        </p>
      </article>
    </section>
  );
}

export default ContactMe;
