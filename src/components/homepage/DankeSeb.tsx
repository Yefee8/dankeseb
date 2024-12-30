import { SlArrowDownCircle } from "react-icons/sl";
import Image from "next/image";
export default function DankeSeb() {
  return (
    <div id="danke-seb" className="page flex justify-center items-center">
      <div className="page-content items-center flex flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Danke, Sebastian.
        </h1>
        <h2 className="text-lg md:text-2xl text-center font-medium">
          A Timeless Tribute to a Racing Legend.
        </h2>
      </div>
      <Image className="page-banner" src="/images/seb-by-yefee.png" loading="eager" priority={true} alt="Sebastian Vettel" width={1920} height={1080} />
      
      <a href="#general-stats" className="absolute bottom-10">
        <SlArrowDownCircle className="text-2xl" />
      </a>
    </div>
  );
}
