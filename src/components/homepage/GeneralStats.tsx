import Image from "next/image";

export default function GeneralStats() {
  const stats = [
    "15 Full Seasons",
    "53 Wins",
    "122 Podiums",
    "38 Fastest laps",
    "8 Hattricks",
    "4 Grand slams",
    "Record for the most pole positions in a season",
    "The youngest pole sitter in history",
    "The youngest world champion in history",
  ];

  const teams = [
    "BMW Sauber",
    "Toro Rosso",
    "Red Bull Racing",
    "Scuderia Ferrari",
    "Aston Martin",
  ];
  return (
    <div
      id="general-stats"
      className="page max-md:!h-[1200px] max-md:flex-col flex justify-center"
    >
      <Image
        width={1000}
        height={1000}
        src="/images/2015Maleysia.jpg"
        className="page-half-banner"
        alt="Sebastian Vettel 2015 Malaysia Grand Prix"
      />

      <div className="md:w-1/2 md:h-full h-1/2 bg-indigo-600/10 justify-center items-center flex flex-col gap-4">
        <h2 className="text-xl md:text-3xl font-bold">299 Races</h2>

        <div className="flex flex-col gap-3 items-center">
          {stats.map((stat) => (
            <p key={stat} className="md:text-lg text-center text-xl font-medium">
              {stat}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 justify-center items-center max-md:px-4">
            {teams.map((team) => (
              <a
                key={team}
                href={`#${team.replaceAll(" ", "-").toLowerCase()}`}
              >
                <div className="text-sm md:text-base font-semibold bg-indigo-600/20 px-2 py-1 rounded">
                  {team}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
