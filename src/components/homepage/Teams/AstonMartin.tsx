import Image from "next/image";

export default function RedbullRacing() {
  return (
    <div id="aston-martin" className="page max-md:flex-col flex justify-center">
      <div className="md:w-1/2 md:h-full h-1/2 bg-[#00231f]/20 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">Aston Martin</h1>

        <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
          Sebastian Vettel, joined the
          Aston Martin Formula One Team in 2021. His move to Aston Martin marked
          a new chapter in his illustrious career. Vettel's first season with
          Aston Martin was marked by a mix of impressive performances and
          moments of misfortune. He secured a podium finish at the 2021
          Azerbaijan Grand Prix, showcasing his skill and determination.
          However, the season was not without its challenges, as he faced
          various setbacks including a retirement from the 2021 Hungarian Grand
          Prix. Despite the ups and downs of his first year, Vettel continued to
          be a valuable asset to the Aston Martin team, both on and off the
          track. His experience and leadership were instrumental in helping the
          team develop and improve their car.
        </p>
      </div>

      <Image
        width={1000}
        height={1000}
        src="/images/AstonMartin.jpg"
        className="page-half-banner"
        alt="Sebastian Vettel Aston Martin"
      />
    </div>
  );
}
