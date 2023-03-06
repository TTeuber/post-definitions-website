export default function About() {
  const musicLinks = ["ReY4yVkoDc4", "RRRgK9TOes0", "g9NuX3NJ52o"];
  const filmLinks = ["b87B7zyucgI", "uMZa5_xK2ek"];
  const otherLinks = ["wVh6BQyd9DY"];
  return (
    <div>
      <h1>Who am I?</h1>
      <div className={"uppercase"}>
        <h3>Philosopher</h3>
        <h3>Life Nerd</h3>
        <h3>World Traveler</h3>
        <h3>Host of the Post Definitions Podcast</h3>
      </div>
      <div>
        <h2 className={"uppercase"}>I&apos;m Freddie</h2>
        <p>
          In 2021 I graduated with from my Bachelor’s Degree from the University of Washington with a double major in
          Mathematics and Philosophy. I took 6 courses on probability theory, 5 on computer science, 3 on Italian
          language, and a lot on film studies.
        </p>
        <p>
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
        <p>
          My favorite podcast is Philosophize This! by Steven West.<br/>
          My favorite philosopher is Søren Kierkegaard.<br/>
          My favorite authors are Milan Kundera and Herman Hesse.<br/>
          Some of my favorite books are The Unbearable Lightness of Being by Milan Kundera, The Picture of Dorian Grey
          by Oskar Wilde, and At The Existentialist Cafe by Sarah Bakewell<br/>
          Some of my favorite film directors are Miyazaki, Wes Anderson, Federico Fellini, Spike Lee...Some of my
          favorite musicians/bands are The Minds of 99, The Movement, Elliot Smith, Phoebe Bridgers, Tom Misch, Georgio
          Poi, Feu! Chatterton, Glass Animals...<br/>
          For sport, these days I surf and practice yoga. At other times I rock climb and take any opportunities that
          come my way.
        </p>
        <h2>Some Random bits on YouTube I like:</h2>
        <h3>Music:</h3>
        {musicLinks.map((link, idx) => {
          return (
            <div key={idx}>
              <iframe width="640" height="390" src={`https://www.youtube.com/embed/${link}`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
            </div>
          )
        })}
        <h3>Short Films</h3>
        {filmLinks.map((link, idx) => {
          return (
            <div key={idx}>
              <iframe width="640" height="390" src={`https://www.youtube.com/embed/${link}`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
            </div>
          )
        })}
        <h3>Somewhere in between</h3>
        {otherLinks.map((link, idx) => {
          return (
            <div key={idx}>
              <iframe width="640" height="390" src={`https://www.youtube.com/embed/${link}`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
            </div>
          )
        })}
      </div>
    </div>
  )
}
