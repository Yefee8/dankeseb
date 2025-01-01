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
