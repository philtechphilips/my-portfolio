"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center md:px-48 px-5 py-12">
        <h1 className="text-center">CONTACTS</h1>
        <div className=" w-full flex justify-between py-10">
          <Link
            href="mailto:pelumiisola87@gmail.com"
            className="text-xl font-[Gt]"
          >
            E-mail
          </Link>
          <Link
            href="https://www.linkedin.com/in/pelumi-isola-84661821a"
            className="text-xl font-[Gt]"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/philtechphilips"
            className="text-xl font-[Gt]"
          >
            Github
          </Link>
          <Link href="tel:07063623539" className="text-xl font-[Gt]">
            Phone
          </Link>
        </div>

        <div
      onClick={handleScrollToTop}
      className="w-8 animate-up-down h-8 text-[#656464] border flex rounded-full items-center justify-center border-[#656464] cursor-pointer"
    >
      <i className="ri-arrow-up-line text-lg"></i>
    </div>
      </div>

      <div className="pt-10 pb-4 px-5 md:px-10 flex justify-between md:items-center">
        <div className="flex gap-10">
          <p className="text-xs text-[#656464]">
            © Pelumi Isola {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-10">
          <p className="text-xs text-[#656464]">pelumiisola87@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
