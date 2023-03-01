import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const data = api.example.hello.useQuery({text: "hello"})
  return (
    <>
      <p>{data.data?.greeting}</p>
      <div>
        <h2 className={"uppercase"}>The Podcast for humans and identity</h2>
        <p>image of faceless person</p>
        <h1 className={"uppercase"}>Freddie Lancia The Post Definitions Podcast</h1>
      </div>
      <div>
        <h2 className={"uppercase"}>Post Definitions</h2>
        <p>Has someone ever made a premature assumption about you?</p>
        <p>Did you ever internalize it?</p>
        <p>Where does your identity come from?</p>
        <p>How about you sense of self?</p>
        <p>Your worth?</p>
        <p>Your Actions?</p>
        <p>When we put ourselves and others in boxes, the results range from
          innocent misunderstandings and jokes to racism, sexism, classism,
          genocide, and more.</p>
        <h3 className={"uppercase"}>Learn More</h3>
      </div>
      <div>
        <h2 className={"uppercase"}>The Post Definitions Podcast</h2>
        <p>I travel the world and talk to new and old friends. We explore
          how the conceptual boxes we put ourselves and others into affect our
          lives.</p>
        <h3 className={"uppercase"}>Subscribe and listen now</h3>
        <p>links</p>
        <p>image</p>
        <h3 className={"uppercase"}>It&apos;s time we step into a post definitions world</h3>
      </div>
      <div>
        <h2 className={"uppercase"}>Who am I?</h2>
        <p>That&apos;s a big question. The best way to find out is by listening to
          me speak on the podcast or by reaching out for a chat. <Link href="/about">But for Now...</Link></p>
      </div>
    </>
  )
}
