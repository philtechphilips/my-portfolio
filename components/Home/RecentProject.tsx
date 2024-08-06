"use client";
import { projects } from "@/app/data";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const RecentProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full md:px-20 mt-24">
      <div className="px-5">
        <h1
          className="font-[Monument-R] md:text-6xl text-3xl"
          style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
        >
          Recent Projects
        </h1>
      </div>

      <div className="flex px-5 md:mt-20 mt-0 w-full items-center gap-20">
        <div className="bg-[#C0DCB6] hidden  md:flex rounded-xl p-5">
          <div className="p-3 bg-white rounded-xl mb-4">
            <Image
              src="/images/agape-h.png"
              width={250}
              height={250}
              alt="agape"
            ></Image>
          </div>
        </div>

        <div className="md:px-5 md:w-2/3">
          <div className="border-b py-5 mt-10">
            <h2 className="mb-4 text-4xl font-bold">Agape Baptist College</h2>
            <p className="text-xl text-gray-600 pb-[6px]">
              HTML | CSS | REEACT JS | LARAVEL | MYSQL
            </p>
            <p className="text-xl text-gray-600 pb-[6px]">
              Sept 2021 - Present
            </p>
          </div>

          <div className="mt-10 px-5">
            <ul className="list-disc flex flex-col gap-5">
              <li className="text-xl text-gray-600 pb-[6px]">
                I have developed both the initial version (v1) and an upgraded
                version (v2) of the school portal.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Built student, parent, teacher and administrator dashboard.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Streamlined the school exam report sheet into an online format,
                alleviating the burden on teachers by automating calculations
                and simplifying the process.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Implemented features such as attendance tracking, exam report
                generation, homework management, and school fees payment for
                comprehensive functionality in the system.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Test, Debug and Deployed the web app.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Trained the staff on how to use the web application to improve
                their productivity and ease their work
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex px-5 md:mt-20 mt-0 w-full items-center gap-20">
        <div className="bg-[#C0DCB6] hidden  md:flex rounded-xl p-5">
          <div className="p-3 bg-white rounded-xl mb-4">
            <Image
              src="/images/agape-h.png"
              width={250}
              height={250}
              alt="agape"
            ></Image>
          </div>
        </div>

        <div className="md:px-5 md:w-2/3">
          <div className="border-b py-5 mt-10">
            <h2 className="mb-4 text-4xl font-bold">Reyts Fintech</h2>
            <p className="text-xl text-gray-600 pb-[6px]">
              REACT JS | Node JS/Express | Redis | Mongo DB | Postman
            </p>
            <p className="text-xl text-gray-600 pb-[6px]">2023</p>
          </div>

          <div className="mt-10 px-5">
            <ul className="list-disc flex flex-col gap-5">
              <li className="text-xl text-gray-600 pb-[6px]">
                Built the v2 of the Reyts Application.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Utilized Postman for documentation and testing of API endpoints.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Utilized: ReactJs, NodeJs, Express, Mongoose/MongoDB, Redis,
                Postman.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Conducted debugging and code refactoring to address issues
                associated with Redis integration.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Implemented API endpoints for user authentication, integrated
                KYC verification functionality, and facilitated the updating of
                user data through the KYC process.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Conducted testing procedures to validate the functionality and
                seamless interaction between the backend and frontend components
                of the application.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Implemented a currency swap feature using a scheduled Cron Job,
                automating the matching of corresponding exchanges in the
                system. Additionally, automated the currency swap process to
                transfer funds directly to the respective user bank.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex px-5 md:mt-20 mt-0 w-full items-center gap-20">
        <div className="bg-[#C0DCB6] hidden  md:flex rounded-xl p-5">
          <div className="p-3 bg-white rounded-xl mb-4">
            <Image
              src="/images/agape-h.png"
              width={250}
              height={250}
              alt="agape"
            ></Image>
          </div>
        </div>

        <div className="md:px-5 md:w-2/3">
          <div className="border-b py-5 mt-10">
            <h2 className="mb-4 text-4xl font-bold">Firacard</h2>
            <p className="text-xl text-gray-600 pb-[6px]">
              Node JS/Express | Mongo DB | Postman | API
            </p>
            <p className="text-xl text-gray-600 pb-[6px]">2020 - Present</p>
          </div>

          <div className="mt-10 px-5">
            <ul className="list-disc flex flex-col gap-5">
              <li className="text-xl text-gray-600 pb-[6px]">
                I built new API endpoints to introduces new features into the
                application.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                I utilized Postman as a comprehensive tool to document and test
                APIs. Leveraging its intuitive interface, I meticulously
                documented API endpoints, parameters, and response structures,
                creating thorough and easily accessible documentation.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Utilized: NodeJs, Express, Mongoose/MongoDB, Postman..
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex px-5 md:mt-20 mt-0 w-full items-center gap-20">
        <div className="bg-[#C0DCB6] hidden  md:flex rounded-xl p-5">
          <div className="p-3 bg-white rounded-xl mb-4">
            <Image
              src="/images/agape-h.png"
              width={250}
              height={250}
              alt="agape"
            ></Image>
          </div>
        </div>

        <div className="md:px-5 md:w-2/3">
          <div className="border-b py-5 mt-10">
            <h2 className="mb-4 text-4xl font-bold">Rita Data</h2>
            <p className="text-xl text-gray-600 pb-[6px]">
              HTML | CSS | JavaScript | React Js | Figma
            </p>
            <p className="text-xl text-gray-600 pb-[6px]">2023</p>
          </div>

          <div className="mt-10 px-5">
            <ul className="list-disc flex flex-col gap-5">
              <li className="text-xl text-gray-600 pb-[6px]">
                Built the company website's v2, featuring upgraded
                functionalities and an enhanced user interface for an improved
                online presence
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Translated a meticulously designed UI into a fully functional
                website, seamlessly integrating visual elements and interactive
                features. This involved optimizing user experience and ensuring
                alignment with design specifications. The result is a dynamic,
                responsive website that captures the intended aesthetics while
                providing a smooth and engaging browsing experience.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex px-5 md:mt-20 mt-0 w-full items-center gap-20">
        <div className="bg-[#C0DCB6] hidden  md:flex rounded-xl p-5">
          <div className="p-3 bg-white rounded-xl mb-4">
            <Image
              src="/images/agape-h.png"
              width={250}
              height={250}
              alt="agape"
            ></Image>
          </div>
        </div>

        <div className="md:px-5 md:w-2/3">
          <div className="border-b py-5 mt-10">
            <h2 className="mb-4 text-4xl font-bold">Notary Public Oshawa</h2>
            <p className="text-xl text-gray-600 pb-[6px]">
              HTML | CSS | JavaScript | Laravel | Figma
            </p>
            <p className="text-xl text-gray-600 pb-[6px]">2023</p>
          </div>

          <div className="mt-10 px-5">
            <ul className="list-disc flex flex-col gap-5">
              <li className="text-xl text-gray-600 pb-[6px]">
                Built the company website's, featuring upgraded
                functionalities and an enhanced user interface for an improved
                online presence
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Translated a meticulously designed UI into a fully functional
                website, seamlessly integrating visual elements and interactive
                features. This involved optimizing user experience and ensuring
                alignment with design specifications. The result is a dynamic,
                responsive website that captures the intended aesthetics while
                providing a smooth and engaging browsing experience.
              </li>
              <li className="text-xl text-gray-600 pb-[6px]">
                Added an upload feature for client to upload their files for notary services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
