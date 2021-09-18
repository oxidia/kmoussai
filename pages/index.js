import {
  RiMenuFill,
  RiCloseFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiHeartFill,
} from "react-icons/ri";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Toggle from "../components/Toggle";
import About from "../components/About";
import Project from "../components/Project";
import Technologies from "../components/Technologie";
import WorkExperinece from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="p-2 min-h-full bg-gray-50 dark:bg-gray-900 sm:border-red-600 border md:border-green-600 lg:border-blue-600 relative">
      <style global jsx>{`
        #__next {
          height: 100%;
        }
      `}</style>
      <Head>
        <title>Khalid MOUSSAID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          <div className="m-2 p-0 border border-gray-600 bg-gray-600" />

          <div className="md:flex items-center justify-center m-1 cursor-pointer">
            <Toggle />
          </div>
        </div>
      </header>
      <div className="mt-2 mb-2 h-1 bg-gray-600 dark:bg-gray-800" />
      <div>
        <div className=" transform bg-blue-500 w-full flex justify-center text-5xl -left-1/4 uppercase">
          work in progress
        </div>
      </div>
      <div className="">
        <About title="About me" />
        <Project title="ProjectS" />
        <WorkExperinece title={"Work experience"} />
        <Technologies title="Technologies" />
      </div>

      <div className="flex items-center justify-center p-2">
        <p>
          Made with NextJS (!
          <RiHeartFill color="red" className="inline" />) by MOUSSAID Khalid
        </p>
      </div>
    </div>
  );
}
