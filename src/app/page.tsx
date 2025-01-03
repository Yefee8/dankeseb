import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import Teams from "@/components/homepage/Teams/Teams";
import BestRaces from "@/components/homepage/BestRaces/BestRaces";
import Ending from "@/components/homepage/Ending";
import ScrollFixer from "@/components/homepage/ScrollFixer";

export default function Home() {
  // TODO: add seb's best edits part ~

  return (
    <div id="homepage">
      <DankeSeb />

      <ChampionshipStats />

      <GeneralStats />

      <Teams />

      <BestRaces />

      <Ending />

      <ScrollFixer />
    </div>
  );
}
