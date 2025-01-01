import Image from "next/image";

export default function RedbullRacing() {
  return (
    <div
      id="red-bull-racing"
      className="page max-xl:!h-[1400px]  max-md:flex-col flex justify-center"
    >
      <div className="md:w-1/2 md:h-full h-1/2 bg-[#001c45]/40 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">Red Bull Racing</h1>

        <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
          Sebastian Vettel’s move to Red Bull Racing in 2009 marked the
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
          Bull era remains a golden chapter in Formula 1 history.
        </p>
      </div>

      <Image
        width={1000}
        height={1000}
        src="/images/RedbullRacing.webp"
        className="page-half-banner"
        alt="Sebastian Vettel Redbull Racing"
      />
    </div>
  );
}
