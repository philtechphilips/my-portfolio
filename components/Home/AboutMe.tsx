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
      <div className="w-full md:h-[700px] h-screen py-10 mt-5 md:px-20 px-5">
        <div className="absolute top-0 left-0 w-full md:h-[700px] h-screen -z-10">
          <Image
            alt="pelumi"
            src="/images/picture.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-75"
          />
        </div>
        <h1
          className="uppercase text-6xl text-white md:text-8xl md:px-5 font-[Monument] font-bold translate-y-4 mb-5"
          style={{ letterSpacing: "4px", transform: "scaleY(1.3)" }}
        >
          Isola
        </h1>
        <h1
          className="uppercase text-6xl text-white md:text-8xl md:px-5 font-[Monument] font-bold mb-3"
          style={{ letterSpacing: "4px", transform: "scaleY(1.3)" }}
        >
          Pelumi
        </h1>
        <div className="md:px-5 w-fit my-4">
          <p className="px-5 border rounded-full text-white py-1">
            Security Inclined Software Engineer
          </p>
        </div>

        <div className="flex items-center py-2 gap-1 text-2xl md:px-5 mt-4">
          <i className="ri-map-pin-line text-white"></i>
          <p className="font-[100] text-white">Lagos, Nigeria.</p>
        </div>

        <div className="md:px-5 py-6 text-white">
          <p className="text-xl" style={{ fontWeight: "100" }}>
            I’m a security-focused software engineer with over 4 years of
            hands-on experience, specializing in PHP, Laravel, JavaScript,
            TypeScript, React.js, and Node.js. I thrive on turning ideas into
            reality by seamlessly integrating front-end and back-end solutions.
            My portfolio includes exciting projects that have enhanced React,
            Node.js, and Express applications. Committed to continuous learning
            and collaboration, I’m passionate about exploring emerging
            technologies to create impactful solutions.
          </p>
          <p></p>
        </div>
        <div className="absolute top-0 left-0 min-w-full md:h-[700px] h-screen -z-10 bg-black opacity-80"></div>
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

      <div className="md:px-20 mt-24 w-full">
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
                    <th className="py-7 px-4 border-b text-left text-gray-700">Institute</th>
                    <th className="py-7 px-4 border-b text-left text-gray-700">Certification</th>
                    <th className="py-7 px-4 border-b text-left text-gray-700">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-7 px-4 border-b text-gray-600">Yaba College of Technology (Yabatech)</td>
                    <td className="py-7 px-4 border-b text-gray-600">National Diploma</td>
                    <td className="py-7 px-4 border-b text-gray-600">2020</td>
                </tr>
                <tr>
                <td className="py-7 px-4 border-b text-gray-600">Yaba College of Technology (Yabatech)</td>
                    <td className="py-7 px-4 border-b text-gray-600">Higher National Diploma</td>
                    <td className="py-7 px-4 border-b text-gray-600">In-View</td>
                </tr>
                <tr>
                <td className="py-7 px-4 border-b text-gray-600">AQSkills</td>
                    <td className="py-7 px-4 border-b text-gray-600">UI/UX Design</td>
                    <td className="py-7 px-4 border-b text-gray-600">2023</td>
                </tr>
                <tr>
                <td className="py-7 px-4 border-b text-gray-600">Snyk</td>
                    <td className="py-7 px-4 border-b text-gray-600">Snyk Security for Developers</td>
                    <td className="py-7 px-4 border-b text-gray-600">2024</td>
                </tr>
            </tbody>
        </table>
    </div>
      </div>
    </>
  );
};

export default AboutMe;
