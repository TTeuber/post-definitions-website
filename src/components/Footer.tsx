import {ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className={"border-t border-blue z-20 relative"}>
      {/*<div className={"sweater h-20 opacity-30"}></div>*/}
      <div className={"text-center p-10"}>
        <h2 className={"uppercase"}>Get in touch</h2>
        <ul>
          <li>fredericklancia@gmail.com</li>
          <li>
            <a href="https://www.linkedin.com/in/frederick-lancia-b99598159/">
              {"LinkedIn "}
              <ArrowTopRightOnSquareIcon className={"w-4 inline pb-1"}/>
            </a>
          </li>
          <li className={"whitespace-nowrap"}>
            <a href="https://www.instagram.com/freddielancia/">
              {"Instagram "}
              <ArrowTopRightOnSquareIcon className={"inline w-4 pb-1"}/>
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
  )
}