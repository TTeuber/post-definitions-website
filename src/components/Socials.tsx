import Image from "next/image";

type Socials = {
  name: string,
  link: string
}

export default function Socials() {
  const socials: Socials[] = [
    {name: "tiktok", link: "https://www.tiktok.com/@postdefinitionspodcast?is_from_webapp=1&sender_device=pc"},
    {name: "apple", link: "https://podcasts.apple.com/us/podcast/the-post-definitions-podcast/id1663944828"},
    {name: "youtube", link: "https://www.youtube.com/@thepostdefinitionspodcast"},
    {name: "linkedin", link: "https://www.linkedin.com/in/frederick-lancia-b99598159/"},
    {name: "instagram", link: "https://www.instagram.com/freddielancia/"},
    {name: "spotify", link: "https://open.spotify.com/show/68WEUMeMaWpVNolO8zuJeZ"},
  ]


  return (
    <div className={"flex"}>
      {socials.map((item, idx) => {
        return (<SocialButton name={item.name} link={item.link} key={idx}/>)
      })}
    </div>
  )
}

function SocialButton({name, link}: Socials) {
  return (
    <a href={link}>
      <Image src={`/icons/${name}.png`} alt={name} height={50} width={50} className={"w-6 lg:w-8 invert dark:invert-0 hover:[--tw-invert:invert(80%)] dark:hover:[--tw-invert:invert(20%)]"}/>
    </a>
  )
}

