export default function Footer() {
  return (
    <div className={"bg-blue text-neutral-200 z-20 relative col-span-2"}>
      <div className={"sweater h-20"}></div>
      <div className={"text-center p-10"}>
        <h2 className={"uppercase"}>Get in touch</h2>
        <ul>
          <li>fredericklancia@gmail.com</li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
        <h3 className={"uppercase"}>
          <span>Site developed by Tyler Teuber</span>
          <span>UX Design by Freddie Lancia</span>
        </h3>
      </div>
    </div>
  )
}