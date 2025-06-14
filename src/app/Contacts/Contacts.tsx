import { Mail, Phone } from "lucide-react";
import Telegram from "../../../resources/images/svg/telegram-icon.svg";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      {/*Desktop*/}
      <div className="xl:flex hidden w-full flex-grow place-content-center mr-40 mt-20">
        <div className="flex flex-col gap-20">
          <h1 className="font-ibm font-bold text-[50px]">Contact Me</h1>
          <div className="flex gap-4">
            <Mail className="size-15" />
            <h4 className="font-ibm text-[30px]">jeffliu5925b@gmail.com</h4>
          </div>
          <div className="flex gap-4">
            <Image src={Telegram} className="size-15" alt="" />
            <h4 className="font-ibm text-[30px]">@mynameisjeff_</h4>
          </div>
          <div className="flex gap-4">
            <Phone className="size-15 stroke-[2px]" />
            <h4 className="font-ibm text-[30px]">+65 9231 9801</h4>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="xl:hidden w-full">
        <h1 className="font-crimson text-center text-[40px] py-4">
          Contact Me
        </h1>
        <div className="mt-20 flex-grow place-items-center">
          <div className="flex flex-col gap-20">
            <div className="flex gap-4">
              <Mail className="size-10" />
              <h4 className="font-ibm text-[20px]">jeffliu5925b@gmail.com</h4>
            </div>
            <div className="flex gap-4">
              <Image src={Telegram} className="size-10" alt="" />
              <h4 className="font-ibm text-[20px]">@mynameisjeff_</h4>
            </div>
            <div className="flex gap-4">
              <Phone className="size-10 stroke-[2px]" />
              <h4 className="font-ibm text-[20px]">+65 9231 9801</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
