import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import Teams from "@/components/homepage/Teams/Teams";
import BestRaces from "@/components/homepage/BestRaces/BestRaces";
import Ending from "@/components/homepage/Ending";

export default function Home() {
  // TODO: make an gallery page to give credit original image owners. ~
  // TODO: add seb's best edits part ~

  return (
    <div>
      <DankeSeb />

      <ChampionshipStats />

      <GeneralStats />

      <Teams />

      <BestRaces />

      <Ending />
    </div>
  );
}
