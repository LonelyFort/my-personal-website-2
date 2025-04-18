import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function App() {
  return (
    <div>
      {/*Desktop*/}
      <div className="xl:flex hidden h-full w-full">
        <div className="flex justify-end px-6 py-4 w-full gap-8">
          <LinkedInLogoIcon className="fill-white w-15 h-15"/>
          <GitHubLogoIcon className="fill-white w-15 h-15"/>
          Dropdown
        </div>

        <div className="absolute"></div>
      </div>

      {/*Mobile */}
      <div className="xl:hidden">test3</div>
    </div>
  );
}
