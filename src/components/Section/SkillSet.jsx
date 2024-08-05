import React from "react";

import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import tw from "../../assets/icons/tailwind.svg";
import react from "../../assets/icons/react.svg";
import js from "../../assets/icons/javascript.svg";

import nd from "../../assets/icons/node.svg";
import php from "../../assets/icons/php.svg";
import ex from "../../assets/icons/express.svg";
import hapi from "../../assets/icons/hapi.svg";

import mysql from "../../assets/icons/mysql.svg";
import mongo from "../../assets/icons/mongo.svg";

function SkillSet() {
  return (
    <article className="block my-12 border-2 border-none rounded-md bg-custom-black z-10 py-10 px-2 text-custom-white sm:w-11/12 md:w-7/12">
      <h2 className="text-3xl text-center mb-5 font-bold">Skill Set</h2>
      <ul className="px-10 sm:px-20 md:px-20 lg:px-5 *:py-10 first:pt-0 last:pb-0">
        <li>
          <h3 className="text-2xl mb-3">Front End</h3>
          <ul className="*:text-7xl flex justify-evenly lg:justify-center lg:gap-7 flex-wrap *:w-20 gap-5 *:grayscale *:transition-all">
            <li className="hover:grayscale-0">
              <img src={html} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={css} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={bootstrap} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={tw} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={react} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={js} alt="" />
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl mb-3">Back End</h3>
          <ul className="*:text-7xl flex justify-evenly lg:justify-center lg:gap-7 flex-wrap *:w-20 gap-5 *:grayscale *:transition-all">
            <li className="hover:grayscale-0">
              <img src={nd} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={php} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={ex} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={hapi} alt="" />
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl mb-3">Database</h3>
          <ul className="*:text-7xl flex justify-evenly lg:justify-center lg:gap-7 flex-wrap *:w-20 gap-5 *:grayscale *:transition-all">
            <li className="hover:grayscale-0">
              <img src={mysql} alt="" />
            </li>
            <li className="hover:grayscale-0">
              <img src={mongo} alt="" />
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}

export default SkillSet;
