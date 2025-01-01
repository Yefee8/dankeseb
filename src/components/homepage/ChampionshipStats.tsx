export default function ChampionshipStats() {
  return (
    <div
      id="championship-stats"
      className="page max-md:flex-col flex justify-center"
    >
      <div className="md:w-1/2 md:h-full h-1/2 bg-indigo-600/10 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">4 Time World Champion</h1>

        <div className="flex flex-col gap-3 items-center">
          <div className="md:text-lg text-xl font-medium">Champion Of</div>
          <div className="flex gap-2 items-center">
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

      <div
        className="page-half-banner"
        style={{
          backgroundImage: `url("/images/four-time-world-champion.avif")`,
        }}
      ></div>
    </div>
  );
}
