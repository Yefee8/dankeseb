import DankeSeb from "@/components/homepage/DankeSeb";
import ChampionshipStats from "@/components/homepage/ChampionshipStats";
import GeneralStats from "@/components/homepage/GeneralStats";

export default function Home() {
  return (
    <div>
      <DankeSeb />

      <ChampionshipStats />

      <GeneralStats />
    </div>
  );
}
