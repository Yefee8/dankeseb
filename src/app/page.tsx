import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import BmwSauber from "@/components/homepage/Teams/BmwSauber";
import ToroRosso from "@/components/homepage/Teams/ToroRosso";
import RedBullRacing from "@/components/homepage/Teams/RedBullRacing";
import ScuderiaFerrari from "@/components/homepage/Teams/ScuderiaFerrari";
import AstonMartin from "@/components/homepage/Teams/AstonMartin";

export default function Home() {
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
