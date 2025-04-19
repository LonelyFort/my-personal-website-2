import SideContainer from "../components/SideContainer/SideContainer";
import SectionPlayer from "../components/SectionPlayer/SectionPlayer";
import SpotLight from "../../../resources/images/svg/spotlight.svg";
import Selfie from "../../../resources/images/png/self-photo.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-full">
      {/*Desktop*/}
      <div className="xl:flex hidden h-full w-full relative">
        <div className="flex h-full items-center">
          <SideContainer currentSection="about" />
        </div>
        <div className="w-full place-items-center">
          <div className="relative w-[1393px]">
            <Image
              src={SpotLight}
              className="absolute left-[20px] opacity-90"
              alt=""
            />
            <Image
              src={SpotLight}
              className="absolute left-[400px] opacity-90"
              alt=""
            />
            <p className="text-black absolute top-40 left-[200px] text-[25px] w-[450px] font-sans">
              Hi! I'm Jeff!
              <br />
              <br />
              I am a frontend developer who incorporates UI/UX designs with
              frontend expertise to provide smooth experience for users.
              <br />
              <br />I am fluent in three languages: English, Chinese and
              Japanese
            </p>
            <Image src={Selfie} className="absolute right-105 top-50 h-60 w-60" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[40px] w-full place-items-center">
        <SectionPlayer currentSection="about" />
      </div>

      {/*Mobile*/}
      <div className="xl:hidden">Test</div>
    </div>
  );
}
