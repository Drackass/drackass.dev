"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="Sauzet Lény portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* <span className="font-bold">Hello, I'm Lény.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>. */}

        Self-taught{" "}<span className="font-bold">full-stack</span> web, windows & mobile{" "}<span className="font-bold">application designer</span> / developer.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Lény-SAUZET-CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/l%C3%A9ny-sauzet-931172264/?originalSubdomain=fr"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Drackass"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
