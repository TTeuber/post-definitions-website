import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

export default function About() {
  const musicLinks = ["ReY4yVkoDc4", "RRRgK9TOes0", "g9NuX3NJ52o"];
  const filmLinks = ["b87B7zyucgI", "uMZa5_xK2ek"];
  const otherLinks = ["wVh6BQyd9DY"];
  return (
    <div className={"lg:w-3/4 mx-auto overflow-hidden"}>
      <h1 className={"text-center max-lg:m-10 my-10 text-4xl sm:text-6xl uppercase font-black"}>Who am I?</h1>
      <div className={"uppercase text-xl flex justify-between max-lg:m-10 my-10 hidden sm:flex px-6"}>
        <h3>Philosopher</h3>
        <h3 className={"hidden sm:inline"}>Life Nerd</h3>
        <h3>World Traveler</h3>
        <h3 className={"hidden 2xl:inline"}>Host of the Post Definitions Podcast</h3>
      </div>
      <div className={"bg-blue-300/10 dark:bg-blue-700/10 sm:max-lg:m-10 mx-auto shadow-xl sm:mb-10"}>
        <div className={"p-6 [&>p]:my-6"}>
          <h2 className={"uppercase text-2xl font-bold mb-6 text-center"}>I&apos;m Freddie</h2>
          <p className={"indent-8"}>
            In 2021 I graduated with from my Bachelor’s Degree from the University of Washington with a double major in
            Mathematics and Philosophy. I took 6 courses on probability theory, 5 on computer science, 3 on Italian
            language, and a lot on film studies.
          </p>
          <p className={"indent-8"}>
            I like applying my background in math, logic, and software dev to solving problems I deem important. For me,
            that means helping start ups in conservation. I now work as Lead Data Scientist at Xylo Systems, an Australian
            start up taking on the giant task of utilising data for understanding biodiversity.
          </p>
          {/*<p>*/}
          {/*  Since 2019, I have been living in and traveling through different countries in Europe. I constantly start ‘new*/}
          {/*  lives’, but I don’t forget the friends I make along the way. I sporadically take photos and journal, but I*/}
          {/*  find . but the initial inspiration for this podcast remedy 3 personal difficulties.1. Staying in touch*/}
          {/*  2. Better recor*/}
          {/*  was to find a more consistent way to document and share my experiences with some of the incredible people I*/}
          {/*  meet*/}
          {/*</p>*/}
          <p className={"line indent-8"}>
            My favorite podcast is &quot;Philosophize This!&quot; by Steven West.
            My favorite philosopher is Søren Kierkegaard.
            My favorite authors are Milan Kundera and Herman Hesse.
            Some of my favorite books are The Unbearable Lightness of Being by Milan Kundera, The Picture of Dorian Grey
            by Oskar Wilde, and At The Existentialist Cafe by Sarah Bakewell.
            Some of my favorite film directors are Miyazaki, Wes Anderson, Federico Fellini, Spike Lee... Some of my
            favorite musicians/bands are The Minds of 99, The Movement, Elliot Smith, Phoebe Bridgers, Tom Misch, Georgio
            Poi, Feu! Chatterton, Glass Animals...
          </p>
          <p className={"indent-8"}>
            For sport, these days I surf and practice yoga. At other times I rock climb and take any opportunities that
            come my way.
          </p>
        </div>
        <h2 className={"text-xl text-center"}>Some Random bits on YouTube I like:</h2>
        <div className={"my-6 bg-blue-300 dark:bg-blue-800 py-10"}>
          <h3 className={"text-4xl text-center uppercase mb-8 font-bold"}>Music</h3>
          <div className={"flex relative group"}>
            <ChevronLeftIcon className={"opacity-0 group-hover:opacity-100 lg:opacity-100 w-1/4 hidden sm:inline top-1/2 -translate-y-1/2 lg:translate-y-0 left-0 cursor-pointer absolute lg:static fill-white/80"} onClick={() => {
              const musicSlider = document.getElementById("music-slider");
              musicSlider?.scrollBy(-musicSlider.scrollWidth / musicLinks.length, 0);
            }}/>
            <div id="music-slider" className={"flex aspect-video lg:aspect-auto lg:h-[33vw] whitespace-nowrap overflow-x-scroll snap-mandatory snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
              {musicLinks.map((link, idx) => {
                return (
                  <VideoContainer src={link} key={idx}/>
                )
              })}
            </div>
            <ChevronRightIcon className={"opacity-0 group-hover:opacity-100 lg:opacity-100 w-1/4 hidden sm:inline top-1/2 -translate-y-1/2 lg:translate-y-0 right-0 cursor-pointer absolute lg:static fill-white/80"} onClick={() => {
              const musicSlider = document.getElementById("music-slider");
              musicSlider?.scrollBy(musicSlider.scrollWidth / musicLinks.length, 0)
            }}/>
          </div>
        </div>
        <h3>Short Films</h3>
        {/*{filmLinks.map((link, idx) => {*/}
        {/*  return (*/}
        {/*    <div key={idx}>*/}
        {/*      <VideoContainer src={link}/>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
        <h3>Somewhere in between</h3>
        {/*{otherLinks.map((link, idx) => {*/}
        {/*  return (*/}
        {/*    <div key={idx}>*/}
        {/*      <VideoContainer src={link}/>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    </div>
  )
}

function VideoContainer({...props}) {
  return (
    <div className={"aspect-video snap-center mx-10"}>
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <iframe width="640" height="390" src={`https://www.youtube.com/embed/${props.src}`}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={"w-full h-full"}>
      </iframe>
    </div>
  )
}
