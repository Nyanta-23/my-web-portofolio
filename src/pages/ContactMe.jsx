import React, { useState } from "react";
import { Envelope, Linkedin, Instagram } from "react-bootstrap-icons";

function ContactMe() {
  const [size, setSize] = useState(25);

  return (
    <section className="pt-10 flex justify-center">
      <article className="border-2 border-none rounded-md bg-custom-black z-10 py-11 px-5 text-custom-white w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 backdrop-blur-md">
        <h2 className="text-3xl text-center">Interest With Me?</h2>

        <ul className="mx-10 my-10 *:my-2">
          <li>
            <a
              href="mailto:muhamadilhan02404@gmail.com"
              className="flex place-items-center gap-5"
            >
              <Envelope size={size} />
              <p>Muhamadilhan02404@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ihaannn/" className="flex place-items-center gap-5" target="_blank">
              <Linkedin size={size} />
              <p>Muhamad Ilhan Revaliana Firmansyah</p>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ihaannn_" className="flex place-items-center gap-5" target="_blank">
              <Instagram size={size} />
              <p>@ihaannn_</p>
            </a>
          </li>
        </ul>

        <p className="text-center text-xl lg:mx-1">
          Dont be shy to call me, i love to meet someone.
        </p>
      </article>
    </section>
  );
}

export default ContactMe;
