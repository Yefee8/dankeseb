import Image from "next/image";

export default function ToroRosso() {
  return (
    <div id="toro-rosso" className="page max-md:!h-[1200px] max-md:flex-col flex justify-center">
      <Image
        width={1000}
        height={1000}
        src="/images/ToroRosso.webp"
        className="page-half-banner"
        alt="Sebastian Vettel Toro Rosso"
      />

      <div className="md:w-1/2 md:h-full h-1/2 bg-indigo-600/10 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">Toro Rosso</h1>

        <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
          In 2007, after his impressive debut with BMW Sauber, Sebastian Vettel
          joined Scuderia Toro Rosso for the second half of the season. Despite
          driving for a midfield team, Vettel quickly made his mark with
          consistent performances and flashes of brilliance. The 2008 season was
          where Vettel truly shined. At the Italian Grand Prix in Monza, amidst
          challenging wet conditions, he delivered a legendary performance.
          Starting from pole position, Vettel dominated the race and claimed his
          maiden Formula 1 victory, becoming the youngest race winner in F1
          history at the time. His victory wasn’t just a personal milestone but
          also Toro Rosso's first and only win in Formula 1.
        </p>
      </div>
    </div>
  );
}
