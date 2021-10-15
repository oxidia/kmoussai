import {
  RiMenuFill,
  RiCloseFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiHeartFill,
} from "react-icons/ri";
import Card from "./Card";

export default function About({ title }) {
  return (
    <Card>
      <div
        className="flex flex-col-reverse md:grid md:grid-cols-2 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(bg-min.png)" }}
      >
        <div className="flex xl:grid xl:grid-cols-2  p-5 md:p-16">
          <div className="hidden xl:block"></div>
          <div className="flex flex-col md:h-full  justify-evenly">
            <div className="text-lg font-bold font-mono ">
              <span className="border-b-2 border-dashed pb-2">
                Hello, I'm moussaid khalid
              </span>
            </div>
            <div className="text-lg font-bold font-mono py-4">
              <span className="  ">
                Full-Stack developer who builds applications with high quality
                especially maintainable code based on structure not only working
                applications.
              </span>
            </div>
            <div className="w-max p-3 rounded-md bg-gray-300 hover:shadow-lg">
              <button>
                <a
                  href="https://docs.google.com/document/d/1yToXsHoTW1waz9hR2yXlRPtg5A_diw5E/edit?usp=sharing&ouid=116562508892190857698&rtpof=true&sd=true"
                  target="_blank"
                  className="font-semibold"
                >
                  View Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="h-96 w-72 bg-cover"
            style={{ backgroundImage: "url(./profile-min.png)" }}
          ></div>
        </div>
      </div>
      <div className="sm:w-2/3 px-3 flex flex-row flex-wrap"></div>
    </Card>
  );
}
