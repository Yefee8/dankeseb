import Image from "next/image";

export default function ScuderiaFerrari() {
  return (
    <div id="scuderia-ferrari" className="page max-xl:!h-[1600px]  max-md:flex-col flex justify-center">
      <Image
        width={1000}
        height={1000}
        src="/images/Ferrari.jpg"
        className="page-half-banner"
        alt="Sebastian Vettel Ferrari"
      />

      <div className="md:w-1/2 md:h-full h-1/2 bg-red-600/5 justify-center items-center flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-bold">Scuderia Ferrari</h1>

        <p className="text-base md:text-lg font-medium md:px-16 px-8 text-center">
          In 2015, Sebastian Vettel made a highly anticipated move to Ferrari,
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
          remained unfulfilled.
        </p>
      </div>
    </div>
  );
}
