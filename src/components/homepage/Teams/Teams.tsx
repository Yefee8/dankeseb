import Image from "next/image";

export default function Teams() {
  const teams = [
    {
      id: "bmw-sauber",
      title: "BMW Sauber",
      description: `Sebastian Vettel made his first steps into the world of Formula 1 in
          2006 as a test and reserve driver for BMW Sauber. Even in his early
          days, the young German showcased remarkable talent and an insatiable
          hunger for speed. The 2007 season marked a turning point in Vettel's
          career. After Robert Kubica's dramatic crash at the Canadian Grand
          Prix, BMW Sauber entrusted Vettel with the driver’s seat for the
          United States Grand Prix. Racing at Indianapolis, Vettel delivered an
          impressive performance, finishing 8th and scoring his first Formula 1
          point. At that time, he became the youngest driver ever to score a
          point in F1 history (a record later surpassed). His brief but
          impactful stint with BMW Sauber proved Vettel's potential to the
          motorsport world and paved the way for a full-time seat at Scuderia
          Toro Rosso later that season.`,
      image: "/images/teams/BmwSauber.jpg",
      color: `bg-slate-600/10`,
    },
    {
      id: "toro-rosso",
      title: "Toro Rosso",
      description: `In 2007, after his impressive debut with BMW Sauber, Sebastian Vettel
          joined Scuderia Toro Rosso for the second half of the season. Despite
          driving for a midfield team, Vettel quickly made his mark with
          consistent performances and flashes of brilliance. The 2008 season was
          where Vettel truly shined. At the Italian Grand Prix in Monza, amidst
          challenging wet conditions, he delivered a legendary performance.
          Starting from pole position, Vettel dominated the race and claimed his
          maiden Formula 1 victory, becoming the youngest race winner in F1
          history at the time. His victory wasn’t just a personal milestone but
          also Toro Rosso's first and only win in Formula 1.`,
      image: "/images/teams/ToroRosso.webp",
      color: `bg-indigo-600/10`,
    },
    {
      id: "red-bull-racing",
      title: "Red Bull Racing",
      description: `Sebastian Vettel’s move to Red Bull Racing in 2009 marked the
          beginning of one of the most dominant eras in Formula 1 history. In
          his debut season with the team, Vettel claimed four wins and finished
          as the championship runner-up, signaling his arrival as a title
          contender. From 2010 to 2013, Vettel established a dynasty, winning
          four consecutive World Championships. His partnership with Red Bull,
          combined with the engineering brilliance of Adrian Newey, produced an
          almost unstoppable force on the grid. Vettel’s record-breaking
          performances included 13 wins in a single season (2013) and a
          remarkable 9 consecutive victories to close out the year. In 2011,
          Vettel set another milestone by achieving 15 pole positions in a
          single season, a record that still stands today. Vettel’s time at Red
          Bull Racing cemented his legacy as one of the sport’s greatest
          drivers. With 38 wins, 44 pole positions, and 4 world titles, his Red
          Bull era remains a golden chapter in Formula 1 history.`,
      image: "/images/teams/RedbullRacing.webp",
      color: `bg-[#001c45]/40`,
    },
    {
      id: "scuderia-ferrari",
      title: "Scuderia Ferrari",
      description: `In 2015, Sebastian Vettel made a highly anticipated move to Ferrari,
          joining the iconic team with the hope of restoring their championship
          glory. His arrival was seen as a fresh start for Ferrari, and Vettel
          quickly built a strong relationship with the team. The 2015 season saw
          Vettel secure three wins, signaling that Ferrari was on the rise, and
          he finished third in the championship. In 2017, Ferrari became a
          serious title contender once again, with Vettel winning five races and
          leading the championship battle until the final rounds. Despite facing
          tough competition from Mercedes, Vettel’s performances were a
          testament to his skill and resilience. The 2018 season brought even
          closer championship fights. Vettel won five races and was in
          contention for the title until a series of mistakes and misfortunes
          prevented him from claiming Ferrari’s first championship in over a
          decade. Vettel’s time at Ferrari, while lacking a title, was marked by
          numerous podiums, memorable drives, and his commitment to returning
          the team to its former glory. He left Ferrari in 2020, having secured
          14 wins with the team, but the dream of a world championship with Ferrari
          remained unfulfilled.`,
      image: "/images/teams/Ferrari.jpg",
      color: `bg-red-700/10`,
    },
    {
      id: "aston-martin",
      title: "Aston Martin",
      description: `Sebastian Vettel, joined the
          Aston Martin Formula One Team in 2021. His move to Aston Martin marked
          a new chapter in his illustrious career. Vettel's first season with
          Aston Martin was marked by a mix of impressive performances and
          moments of misfortune. He secured a podium finish at the 2021
          Azerbaijan Grand Prix, showcasing his skill and determination.
          However, the season was not without its challenges, as he faced
          various setbacks including a disqualifaction from the 2021 Hungarian Grand
          Prix due to a fuel irregularity. Despite the ups and downs of his first year, Vettel continued to
          be a valuable asset to the Aston Martin team, both on and off the
          track. His experience and leadership were instrumental in helping the
          team develop and improve their car.`,
      image: "/images/teams/AstonMartin.jpg",
      color: `bg-[#00231f]/20`,
    },
  ];

  return (
    <div id="teams">
      {teams.map((team, i) => (
        <div
          key={team.id}
          id={team.id}
          className={`page max-md:!max-h-[1200px]  max-md:!h-auto max-md:pb-8 max-md:gap-8 flex md:justify-center justify-start items-center max-md:flex-col  ${team.color} ${
            i % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
            <Image
              width={1000}
              height={1000}
              loading="lazy"
              src={team.image}
              className="page-half-banner"
              alt={`Sebastian Vettel ${team.title}`}
            />

          <div
            className={`md:w-1/2 md:h-full h-1/2 justify-center items-center flex flex-col gap-4`}
          >
            <h2 className="text-xl md:text-3xl font-bold">{team.title}</h2>

            <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
              {team.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
