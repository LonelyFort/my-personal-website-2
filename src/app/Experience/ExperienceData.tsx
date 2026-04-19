import React from "../../../resources/images/svg/react-icon.svg";
import Tailwind from "../../../resources/images/svg/tailwind-icon.svg";
import NodeJS from "../../../resources/images/svg/nodejs-icon.svg";
import Vite from "../../../resources/images/svg/vite-icon.svg";
import Axios from "../../../resources/images/svg/axios-icon.svg";
import TypeScript from "../../../resources/images/svg/typescript-icon.svg";
import HorizonLabs from "../../../resources/images/png/horizon-labs.png";
import BrahmCentre from "../../../resources/images/png/brahm-centre.jpg";
import Heroku from "../../../resources/images/svg/heroku-icon.svg";
import Salesforce from "../../../resources/images/svg/salesforce-icon.svg";
import DSTA from "../../../resources/images/png/dsta.png";
import Python from "../../../resources/images/svg/python-icon.svg";
import Strongswan from "../../../resources/images/svg/strongswan-icon.svg";
import TelegramColour from "../../../resources/images/svg/telegram-coloured-icon.svg";
import AWSLambda from "../../../resources/images/svg/aws-lambda-icon.svg";

export const ExperienceData = [
  {
    logo: HorizonLabs,
    title: "Horizon Labs",
    job_title: "Frontend Software Engineer Intern",
    description: "Designed and optimized the user interface, webpage and mobile application for a startup company based in Australia, which specializes in simplifying user’s health data using AI.",
    duration: "Dec 2024-Feb 2025",
    tech_stack: [
      React,
      TypeScript,
      Tailwind,
      NodeJS,
      Vite,
      Axios
    ],
  },
  {
    logo: BrahmCentre,
    title: "Brahm Centre",
    job_title: "Systems Engineer",
    description: "Designed and created an in-house Purchase Request web application to automate the approval process while allowing more than one item per request.",
    duration: "June 2025 - Dec 2025",
    tech_stack: [
      React,
      TypeScript,
      NodeJS,
      Heroku,
      Salesforce
    ],
  },
  {
    logo: DSTA,
    title: "DSTA",
    job_title: "CyberSecurity Developer Intern",
    description: "Developed a status checker that inspects the status of DSTA’s in-house VPN remotely in the form of a simple and intuitive Telegram Bot.",
    duration: "Feb 2026 - Apr 2026",
    tech_stack: [
      Python,
      AWSLambda,
      Strongswan,
      TelegramColour
    ],
  },
];
