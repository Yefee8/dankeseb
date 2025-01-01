import Image from "next/image";

export default function BmwSauber() {
  return (
    <div id="bmw-sauber" className="page max-md:flex-col flex justify-center">
      <div className="md:w-1/2 md:h-full h-1/2 bg-slate-600/10 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">BMW Sauber</h1>

        <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
          Sebastian Vettel made his first steps into the world of Formula 1 in
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
          Toro Rosso later that season.
        </p>
      </div>

      <Image
        width={1000}
        height={1000}
        src="/images/BmwSauber.jpg"
        className="page-half-banner"
        alt="Sebastian Vettel BMW Sauber"
      />
    </div>
  );
}
