import SemiCircleDisplay from "./SemiCircleDisplay";
import About from "./About/About";

import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function App() {
  return (
    <div>
      {/*Desktop*/}
      <div className="xl:flex flex-col hidden h-screen w-full">
        <div className="flex justify-end px-6 py-4 w-full gap-8">
          <LinkedInLogoIcon className="fill-white w-15 h-15" />
          <GitHubLogoIcon className="fill-white w-15 h-15" />
          Dropdown
        </div>

        {/* <SemiCircleDisplay /> */}
        <div className="flex-grow overflow-auto align-middle">
          <About />
        </div>


        
      </div>

      {/*Mobile */}
      <div className="xl:hidden">test3</div>
    </div>
  );
}
