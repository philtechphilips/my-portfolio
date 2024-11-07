import Image from "next/image";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import "remixicon/fonts/remixicon.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = ({ changeCursor }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-16 mb-24 h-screen mt-20 py-10 md:px-20 px-5">
        <div className="md:w-3/5">
          <div className="flex justify-end  mb-4">
            <div className="md:px-5 w-fit my-4 2xl:mr-24 ">
              <p className="px-5 text-sm font-semibold border rounded-full text-[#656464] py-1">
                Security Inclined
              </p>
            </div>
          </div>
          <h1
            className="uppercase text-5xl text-[#232121] md:text-7xl md:px-5 font-[Monument-R] font-bold translate-y-4 mb-5"
            style={{ letterSpacing: "4px", transform: "scaleY(1.4)" }}
          >
            Software Engineer
          </h1>

          <div className="flex items-center py-2 gap-1 text-2xl md:px-5 mt-4">
            <i className="ri-map-pin-line text-[#232121] text-sm"></i>
            <p className="text-[#232121] text-sm font-semibold">
              Lagos, Nigeria.
            </p>
          </div>

          <div className=" md:px-5 py-6 flex md:flex-row flex-col gap-5">
            <p className="text-sm text-[#656464]">
              I’m a security-focused software engineer with over 4 years of
              hands-on experience, specializing in PHP, Laravel, JavaScript,
              TypeScript, React.js, and Node.js. I thrive on turning ideas into
              reality by seamlessly integrating front-end and back-end
              solutions.
            </p>

            <p className="text-sm text-[#656464]">
              My portfolio includes exciting projects that have enhanced React,
              Node.js, and Express applications. Committed to continuous
              learning and collaboration, I’m passionate about exploring
              emerging technologies to create impactful solutions.
            </p>
          </div>
        </div>
        <div className="md:w-2/5">
          <Image
            alt="pelumi"
            src="/images/picture.png"
            width={400}
            height={500}
            className="brightness-75 rounded-xl"
          />
        </div>
      </div>

      <div className="md:px-20">
        <div className="px-5">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            SKILLS
          </h1>
        </div>

        <div className="flex flex-wrap px-5 gap-5 mt-6">
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            HTML/CSS/Javascript
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            React JS/Next Js
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Tailwind Css/Scss
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Styled Component
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Figma
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            CI/CD
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            App Security
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Git/Github
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            PHP/Laravel
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            NodeJs/Express
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Nest Js/Typescript
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            MSSQL/MySQL/MongoDB
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Redis
          </div>
          <div className="border rounded-full px-10 py-5 md:text-xl border-gray-800">
            Azure SB
          </div>
        </div>
      </div>

      {/* <div className="md:px-20 mt-24 w-full">
        <div className="px-5">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            CERTIFICATIONS
          </h1>
        </div>

        <div className="px-5 mt-8 text-xl">
          <table className="min-w-full border-gray-200 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-7 px-4 border-b text-left text-gray-700">
                  Institute
                </th>
                <th className="py-7 px-4 border-b text-left text-gray-700">
                  Certification
                </th>
                <th className="py-7 px-4 border-b text-left text-gray-700">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-7 px-4 border-b text-gray-600">
                  Yaba College of Technology (Yabatech)
                </td>
                <td className="py-7 px-4 border-b text-gray-600">
                  National Diploma
                </td>
                <td className="py-7 px-4 border-b text-gray-600">2020</td>
              </tr>
              <tr>
                <td className="py-7 px-4 border-b text-gray-600">
                  Yaba College of Technology (Yabatech)
                </td>
                <td className="py-7 px-4 border-b text-gray-600">
                  Higher National Diploma
                </td>
                <td className="py-7 px-4 border-b text-gray-600">In-View</td>
              </tr>
              <tr>
                <td className="py-7 px-4 border-b text-gray-600">AQSkills</td>
                <td className="py-7 px-4 border-b text-gray-600">
                  UI/UX Design
                </td>
                <td className="py-7 px-4 border-b text-gray-600">2023</td>
              </tr>
              <tr>
                <td className="py-7 px-4 border-b text-gray-600">Snyk</td>
                <td className="py-7 px-4 border-b text-gray-600">
                  Snyk Security for Developers
                </td>
                <td className="py-7 px-4 border-b text-gray-600">2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default AboutMe;
