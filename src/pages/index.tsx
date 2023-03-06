"use client";
import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return (
    <div className={"mx-auto text-2xl"}>
      <div className={"py-10 text-center h-screen min-h-[400px] flex flex-col relative justify-between gap-3"}>
        <h1 className={"uppercase text-6xl font-black [text-shadow:1px_1px_2px_black]"}>The Post Definitions Podcast</h1>
        <div className={"h-3/4 object-center"}>
          <Image src={"/podcast_cover.jpg"} alt={"podcast cover"} height={400} width={400} className={"mx-auto shadow-md dark:shadow-xl shadow-gray-500 dark:shadow-gray-900 rounded-md h-full w-auto"}/>
        </div>
        <h2 className={"uppercase text-4xl font-bold z-10"}>The Podcast for humans and identity</h2>
      </div>
      <div className={"bg-gold text-neutral-200 dark:text-blue-900 p-6 h-screen min-h-fit flex flex-col justify-between"}>
        <h2 className={"uppercase text-4xl font-bold"}>Post Definitions</h2>
        <div className={"italic my-6 flex flex-col justify-between grow"}>
          <p>Has someone ever made a premature assumption about you?</p>
          <p>Did you ever internalize it?</p>
          <p>Where does your identity come from?</p>
          <p>How about you sense of self?</p>
          <p>Your worth?</p>
          <p>Your Actions?</p>
          <p>When we put ourselves and others in boxes, the results range from
            innocent misunderstandings and jokes to racism, sexism, classism,
            genocide, and more.</p>
        </div>
        <Link href="/podcasts" className={"uppercase underline underline-offset-2"}>Learn More</Link>
      </div>
      <div className={"p-6 h-screen min-h-fit flex flex-col justify-between"}>
        <h2 className={"uppercase text-4xl font-bold"}>The Post Definitions Podcast</h2>
        <p>I travel the world and talk to new and old friends. We explore
          how the conceptual boxes we put ourselves and others into affect our
          lives.</p>
        <h3 className={"uppercase"}>Subscribe and listen now</h3>
        <p>links</p>
        <p>image</p>
        <h3 className={"uppercase"}>It&apos;s time we step into a post definitions world</h3>
      </div>
      <div className={"bg-yellow p-6 text-neutral-200 dark:text-blue-900 flex justify-between items-center flex-col h-screen min-h-fit"}>
        <h2 className={"uppercase font-bold text-6xl"}>Who am I?</h2>
        <div className={"overflow-hidden relative h-3/4 aspect-square shadow-md"}>
          <Image src={"/fred.jpg"} alt={"fred"} width={500} height={500} className={""}/>
        </div>
        <p>That&apos;s a big question. The best way to find out is by listening to
          me speak on the podcast or by reaching out for a chat. <Link href="/about" className={"underline underline-offset-4"}>But for Now...</Link></p>
      </div>
    </div>
  )
}
