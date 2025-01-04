import Image from "next/image";

export default function ChampionshipStats() {
  return (
    <div
      id="championship-stats"
      className="page max-md:flex-col pt-16 max-md:gap-8 flex items-center"
    >
      <div className="md:w-1/2 md:h-full h-1/2 justify-center items-center flex flex-col gap-4">
        <h2 className="text-xl md:text-3xl font-bold">4 Time World Champion</h2>

        <div className="flex flex-col gap-3 items-center">
          <div className="md:text-lg text-xl font-medium">Champion Of</div>
          <div className="flex flex-wrap gap-2 justify-center items-center max-md:px-4">
            {["2010", "2011", "2012", "2013"].map((year) => (
              <a
                key={year}
                target="_blank"
                href={`https://www.formula1.com/en/results/${year}/drivers`}
              >
                <div className="text-sm md:text-base font-semibold bg-indigo-600/20 px-2 py-1 rounded">
                  {year}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="page-half-banner-container">
        <Image
          width={1000}
          height={1000}
          src="/images/four-time-world-champion.avif"
          className="page-half-banner"
          alt="Sebastian Vettel 4 Time World Champion"
        />
      </div>
    </div>
  );
}
