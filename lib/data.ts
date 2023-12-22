import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import DBAdministrationSoftware from "@/public/DB-Administration-Software.png";
import Fanrum from "@/public/Fanrum.png";
import Portfolio from "@/public/Portfolio.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Epitech, European Institute of Technology",
    location: "Montpellier",
    description:
      "Pré-Msc - Msc-Pro",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Lycée d'enseignement général et technologique publics Marc Bloch",
    location: "Sérignan",
    description:
      "Formation BTS (Brevet de Technicien Supérieur) SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logiciels et Applications Métiers) BAC+2",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "My Personal Portfolio",
    description:
      "My Personal Portfolio made with Next.js, Tailwind & Framer Motion.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion","react hot toast", "react-icons","react vertical timeline","React Email & resend"],
    imageUrl: Portfolio,
  },
  {
    title: "Fanrum Profile Shop",
    description:
      "online store for the sale of profile images for use in a future international integrated forum with a modern and professional design.",
    tags: ["PHP", "CSS", "HTML", "JS", "SQL", "Sweetalert","ColorThief"],
    imageUrl: Fanrum,
  },
  {
    title: "DB Administration Software",
    description:
      "Database administration software coded in C# with a modern and professional design.",
    tags: ["C#", "WAMP", "HeidiSQL", "Visual Studio", ".Net Framework","SQL"],
    imageUrl: DBAdministrationSoftware,
  },


] as const;

export const skillsData = [
  "C#",
  "C++",
  "SCSS",
  "VisualBasic",
  "JQuery",
  "HTML",
  "CSS",
  "PHP",
  "JS",
  "TypeScript",
  "Python",
  "MySQL",
  "MariaDB",
  "SQLite",
  "SQL Server",
  "AJAX",
  "Supabase",
  "Oracle",
  "PhpMyAdmin",
  "HeidiSQL",
  "Github Pages",
  "Visual Studio",
  "VS Code",
  "NetBeans",
  "Wamp",
  "UWAMP",
  "Node.js",
  "ChatGPT",
  "Bootstrap",
  "Tailwind",
  ".NET Framwork",
  "Wordpress",
  "React",
  "Next.js",
  "Arduino",
  "Linux",
  "Windows",
  "Bash",
  "Powershell",
  "VM VirtualBox",
  "Docker",
  "Trello",
  "Notion",
  "Obsidian",
  "Discord",
  "Git",
  "Github",
  "Framer Motion",
] as const;
