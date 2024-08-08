import React, { useState } from "react";
import { Envelope, Linkedin, Instagram } from "react-bootstrap-icons";

function ContactMe() {
  const [size, setSize] = useState(25);

  return (
    <section className="py-12 flex justify-center">
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

        <p className="text-center text-xl px-5 lg:px-1">
          Dont be shy to call me, i love to meet someone.
        </p>
      </article>
    </section>
  );
}

export default ContactMe;
