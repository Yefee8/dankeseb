import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";
import Teams from "@/components/homepage/Teams/Teams";

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

      <Teams/>
    </div>
  );
}
