import Image from "next/image";

export default function BestRaces() {
  const races = [
    {
      id: "2008-monza-grand-prix",
      title: "2008 Monza Grand Prix",
      description: `The 2008 Monza Grand Prix marked Sebastian Vettel's first victory in his Formula 1 career. It was also the first win for the Toro Rosso team (formerly known as Minardi). After securing pole position in qualifying, Sebastian Vettel maintained his dominance throughout the race and clinched victory with his Toro Rosso. <br/> "Sebastian Vettel is a Grand Prix winner, for the first time! He is the youngest ever, and that's one of the greatest things I've ever seen in Grand Prix racing!"`,
      image: "/images/races/2008-Monza-Grand-Prix.jpg",
    },
    {
      id: "2009-chinese-grand-prix",
      title: "2009 Chinese Grand Prix",
      description: `The 2009 Chinese Grand Prix was Sebastian Vettel's second victory in Formula 1 and his first win with Red Bull Racing(It's also the first win for Red Bull Racing). Starting from pole position, Vettel showcased exceptional skill in challenging wet conditions. Despite the relentless rain and poor visibility, he maintained control throughout the race and crossed the finish line as the winner.`,
      image: "/images/races/2009-Chinese-Grand-Prix.jpg",
    },
    {
      id: "2010-abu-dhabi-grand-prix",
      title: "2010 Abu Dhabi Grand Prix",
      description: `The 2010 Abu Dhabi Grand Prix was the final and title-deciding race of an incredible 2010 season. Despite being considered an unlikely championship contender, Sebastian Vettel secured pole position in qualifying and went on to win the race. However, winning the race alone wasn't enough to guarantee the championship. If Fernando Alonso finished 4th, he would claim the title (if Alonso finished 5th, the points would be tied, but Vettel would still win on countback). In the end, Fernando Alonso got stuck in 6th place and couldn't improve his position. With that result, Sebastian Vettel clinched his first World Championship at the 2010 Abu Dhabi Grand Prix. <br/> "Okay Sebastian, good job. I need to wait until everybody crosses the line. I need to wait, but it's looking good. You just wait sunshine, you just wait." <br/> "DU BIST WELTMEISTER!"`,
      image: "/images/races/2010-Abu-Dhabi-Grand-Prix.avif",
    },
    {
      id: "2011-monza-grand-prix",
      title: "2011 Monza Grand Prix",
      description: `The 2011 Monza Grand Prix was expected to be a challenging race for Red Bull Racing. While the RB7 was an incredible car, it struggled on low-downforce tracks like Monza. Despite this, Sebastian Vettel secured pole position in qualifying. Although he briefly lost his position at the start, he managed to overtake Fernando Alonso and went on to claim victory.`,
      image: "/images/races/2011-Monza-Grand-Prix.jpg",
    },
    {
      id: "2011-spanish-grand-prix",
      title: "2011 Spanish Grand Prix",
      description: `The 2011 Spanish Grand Prix was a classic Red Bull-Vettel victory. Starting from pole position, Sebastian Vettel quickly pulled out of DRS range in the opening laps, dominating the race from start to finish. Even his team couldn’t slow him down in the final laps, as he set the last two fastest laps of the race himself, sealing yet another impressive victory.`,
      image: "/images/races/2011-Spanish-Grand-Prix.jpg",
    },
  ];

  return (
    <div id="best-races">
      {races.map((race, i) => (
        <div
          key={race.id}
          id={race.id}
          className={`page max-md:!h-[1600px] flex justify-center max-md:flex-col ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Image
            width={1000}
            height={1000}
            src={race.image}
            className="page-half-banner"
            alt={`Sebastian Vettel ${race.title}`}
          />
          <div className="md:w-1/2 md:h-full h-1/2 bg-[#001c45]/40 justify-center items-center flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl font-bold">{race.title}</h1>

            <p
              dangerouslySetInnerHTML={{
                __html: race.description,
              }}
              className="text-base md:text-lg font-medium md:px-16 px-8 text-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
