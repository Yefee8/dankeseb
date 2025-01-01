import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import BmwSauber from "@/components/homepage/Teams/BmwSauber";
import ToroRosso from "@/components/homepage/Teams/ToroRosso";
import ScuderiaFerrari from "@/components/homepage/Teams/ScuderiaFerrari";
import AstonMartin from "@/components/homepage/Teams/AstonMartin";
import RedBullRacing from "@/components/homepage/Teams/RedBullRacing";

export default function Home() {
  // TODO: Add Header & Footer ~
  // TODO: add greatest races of seb ~
  // TODO: make an gallery page, select images from start by query params. ~ 
  // TODO: add seb's best edits part ~
  
  return (
    <div>
      <DankeSeb />

      <ChampionshipStats />

      <GeneralStats />

      <BmwSauber />

      <ToroRosso />

      <RedBullRacing />

      <ScuderiaFerrari />

      <AstonMartin />
    </div>
  );
}
