import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className={"relative z-20 border-t border-blue md:text-xl"}>
      {/*<div className={"sweater h-20 opacity-30"}></div>*/}
      <div className={"p-10 text-center"}>
        <h2 className={"uppercase"}>Get in touch</h2>
        <ul>
          <li>fredericklancia@gmail.com</li>
          <li>
            <a href="https://www.linkedin.com/in/frederick-lancia-b99598159/">
              {"LinkedIn "}
              <ArrowTopRightOnSquareIcon className={"inline w-4 pb-1"} />
            </a>
          </li>
          <li className={"whitespace-nowrap"}>
            <a href="https://www.instagram.com/freddielancia/">
              {"Instagram "}
              <ArrowTopRightOnSquareIcon className={"inline w-4 pb-1"} />
            </a>
          </li>
        </ul>
        <h3 className={"uppercase"}>
          {/*<span>Site developed by Tyler Teuber</span>*/}
          {/*<br/>*/}
          <span>&#169; Post Definitions</span>
        </h3>
      </div>
    </div>
  );
}
