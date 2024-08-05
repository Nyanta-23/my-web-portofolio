import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="flex justify-center mt-20 mb-28">
      <div className="border-2 border-none rounded-md bg-custom-black z-10 py-10 px-5 text-custom-white w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 text-center">
        <span className="text-9xl">404</span>
        <h1 className="text-3xl font-bold">Opps, Page Not Found</h1>
        <p className="text-sm mt-5">
          The page are you looking for might have been removed had its name change
          or its temporarily unavailable{" "}
          <Link className="text-blue-500" to={"/"}>
            Return to mainpage
          </Link>{" "}
          or Contact the{" "}
          <Link className="text-blue-500" to={"/contact-me"}>
            Developer
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PageNotFound;
