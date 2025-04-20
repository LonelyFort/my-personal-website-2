"use client";

import SectionPlayer from "./components/SectionPlayer/SectionPlayer";
import SideContainer from "./components/SideContainer/SideContainer";
import { Progress } from "@/components/ui/progress";
import SemiCircleDisplay from "./SemiCircleDisplay";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import { LanguageDropdown } from "./components/LanguageDropdown/LanguageDropdown";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function App() {
  const [currentSection, setCurrentSection] = useState("");
  const [displayedSection, setDisplayedSection] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentSection === "") {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedSection("");
        setIsTransitioning(false);
      }, 300); // 300ms delay
      return () => clearTimeout(timer);
    } else {
      setDisplayedSection(currentSection);
      setIsTransitioning(false);
    }
  }, [currentSection]);

  useEffect(() => {
    let timer = setTimeout(() => setProgress(33), 500);
    timer = setTimeout(() => setProgress(66), 1000);
    timer = setTimeout(() => setProgress(99), 1500);
    timer = setTimeout(() => setProgress(100), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const loadingScreen = () => {
    return <Progress value={progress} className="w-[60%]"  />;
  };

  const displaySection = () => {
    return (
      <div className="h-full">
        <div className="xl:flex hidden h-full w-full relative">
          <div className="flex h-full items-center">
            <SideContainer
              currentSection={displayedSection}
              handleSectionChange={handleSectionChange}
            />
          </div>
          {displayedSection === "about" ? (
            <About />
          ) : displayedSection === "experience" ? (
            <Experience />
          ) : displayedSection === "projects" ? (
            <Projects />
          ) : displayedSection === "contacts" ? (
            <Contacts />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/*Progress bar for desktop*/}
      <div
        className={`xl:flex flex-col gap-2 hidden h-screen w-full justify-center items-center ${
          progress === 100 ? "xl:hidden" : ""
        }`}
      >
        <h2 className="text-[25px]">Loading...</h2>
        {loadingScreen()}
      </div>

      {/*Desktop*/}
      <div
        className={`xl:flex flex-col hidden h-screen w-full ${
          progress !== 100 ? "xl:hidden" : ""
        }`}
      >
        <div className="flex justify-end px-6 py-4 w-full gap-8">
          <Link href="https://www.linkedin.com/in/liu-yu-wei-b182a52ab/">
            <LinkedInLogoIcon className="transition duration-300 ease-in-out fill-white w-15 h-15 hover:scale-[120%] " />
          </Link>
          <Link href="https://github.com/LonelyFort">
            <GitHubLogoIcon className="fill-white w-15 h-15 hover:scale-[120%] transition duration-300 ease-in-out" />
          </Link>
          <LanguageDropdown />
        </div>

        {displayedSection !== "" ? (
          <div
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out mt-20 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {displaySection()}
          </div>
        ) : (
          <div
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out mt-20 ${
              displayedSection === "" && !isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <SemiCircleDisplay handleSectionChange={handleSectionChange} />
          </div>
        )}
      </div>

      {displayedSection !== "" && (
        <div
          className={`fixed bottom-10 left-0 right-0 flex justify-center transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <SectionPlayer
            currentSection={displayedSection}
            handleSectionChange={handleSectionChange}
          />
        </div>
      )}
    </div>
  );
}
