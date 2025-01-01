import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import BmwSauber from "@/components/homepage/Teams/BmwSauber";
import ToroRosso from "@/components/homepage/Teams/ToroRosso";
import RedbullRacing from "@/components/homepage/Teams/RedbullRacing";
import Ferrari from "@/components/homepage/Teams/Ferrari";
import AstonMartin from "@/components/homepage/Teams/AstonMartin";

export default function Home() {
  return (
    <div>
      <DankeSeb />

      <ChampionshipStats />

      <GeneralStats />

      <BmwSauber />

      <ToroRosso />

      <RedbullRacing />

      <Ferrari />

      <AstonMartin />
    </div>
  );
}
