import Image from "next/image";

export default function BestRaces() {
  // we can add scroll load to this.
  const races = [
    {
      id: "2008-monza-grand-prix",
      title: "2008 Monza Grand Prix",
      description: `The 2008 Monza Grand Prix marked Sebastian Vettel's first victory in his Formula 1 career. It was also the first win for the Toro Rosso team (formerly known as Minardi). After securing pole position in qualifying, Sebastian Vettel maintained his dominance throughout the race and clinched victory with his Toro Rosso. <br/> <br/> "Sebastian Vettel is a Grand Prix winner, for the first time! He is the youngest ever, and that's one of the greatest things I've ever seen in Grand Prix racing!"`,
      image: "/images/races/2008-Monza-Grand-Prix.jpg",
    },
    {
      id: "2009-chinese-grand-prix",
      title: "2009 Chinese Grand Prix",
      description: `The 2009 Chinese Grand Prix was Sebastian Vettel's second victory in Formula 1 and his first win with Red Bull Racing(It's also the first win for Red Bull Racing). Starting from pole position, Vettel showcased exceptional skill in challenging wet conditions. Despite the relentless rain and poor visibility, he maintained control throughout the race and crossed the finish line as the winner.`,
      image: "/images/races/2009-Chinese-Grand-Prix.jpg",
    },
    {
      id: "2010-abu-dhabi-grand-prix",
      title: "2010 Abu Dhabi Grand Prix",
      description: `The 2010 Abu Dhabi Grand Prix was the final and title-deciding race of an incredible 2010 season. Despite being considered an unlikely championship contender, Sebastian Vettel secured pole position in qualifying and went on to win the race. However, winning the race alone wasn't enough to guarantee the championship. If Fernando Alonso finished 4th, he would claim the title (if Alonso finished 5th, the points would be tied, but Vettel would still win on countback). In the end, Fernando Alonso got stuck in 6th place and couldn't improve his position. With that result, Sebastian Vettel clinched his first World Championship at the 2010 Abu Dhabi Grand Prix. <br/> <br/> "Okay Sebastian, good job. I need to wait until everybody crosses the line. I need to wait, but it's looking good. You just wait sunshine, you just wait." <br/>  <br/> "DU BIST WELTMEISTER!"`,
      image: "/images/races/2010-Abu-Dhabi-Grand-Prix.avif",
    },
    {
      id: "2011-turkish-grand-prix",
      title: "2011 Turkish Grand Prix",
      description: `The 2011 Turkish Grand Prix was yet another textbook Sebastian Vettel victory in a season he utterly dominated. Starting from pole position, Vettel controlled the race from the very beginning, showcasing both his raw speed and strategic intelligence. The RB7 performed flawlessly on the high-speed Istanbul Park circuit, allowing Vettel to build a comfortable lead over his rivals. Despite the multiple pit stops typical of the era, Sebastian Vettel remained untouchable, crossing the finish line to claim another well-deserved victory and further solidify his championship lead.`,
      image: "/images/races/2011-Turkish-Grand-Prix.jpg",
    },
    {
      id: "2011-monza-grand-prix",
      title: "2011 Monza Grand Prix",
      description: `The 2011 Monza Grand Prix was expected to be a challenging race for Red Bull Racing. While the RB7 was an incredible car, it struggled on low-downforce tracks like Monza. Despite this, Sebastian Vettel secured pole position in qualifying. Although he briefly lost his position at the start, he managed to overtake Fernando Alonso and went on to claim victory.`,
      image: "/images/races/2011-Monza-Grand-Prix.jpg",
    },
    {
      id: "2011-spanish-grand-prix",
      title: "2011 Spanish Grand Prix",
      description: `The 2011 Spanish Grand Prix was a classic Red Bull-Vettel victory. Starting from pole position, Sebastian Vettel quickly pulled out of DRS range in the opening laps, dominating the race from start to finish. Even his team couldn’t slow him down in the final laps, as he set the last two fastest laps of the race himself, sealing yet another impressive victory.`,
      image: "/images/races/2011-Spanish-Grand-Prix.jpg",
    },
    {
      id: "2012-singapore-grand-prix",
      title: "2012 Singapore Grand Prix",
      description: `The 2012 Singapore Grand Prix was a crucial turning point in Sebastian Vettel's championship campaign. Starting from 3rd on the grid, Vettel took advantage of Lewis Hamilton's retirement due to a gearbox failure and assumed the lead of the race. Under the bright lights of Marina Bay Street Circuit, Vettel showcased his precision and control, mastering the demanding street circuit and managing his tires perfectly. Despite the constant threat of a Safety Car shaking up strategies, Vettel kept his composure and crossed the finish line as the race winner. This victory marked the beginning of a four-race winning streak that would eventually propel him to his third consecutive World Championship.`,
      image: "/images/races/2012-Singapore-Grand-Prix.avif",
    },
    {
      id: "2012-abu-dhabi-grand-prix",
      title: "2012 Abu Dhabi Grand Prix",
      description: `The 2012 Abu Dhabi Grand Prix started poorly for Sebastian Vettel, as he was forced to start from the pit lane due to a parc fermé regulation violation. However, what followed was nothing short of extraordinary. Vettel delivered an incredible drive, carving his way through the field with precision and determination to secure an impressive 3rd place finish. This heroic performance ensured that Vettel entered the final race of the season, the 2012 Brazilian Grand Prix, as the championship leader—setting the stage for an epic season finale.`,
      image: "/images/races/2012-Abu-Dhabi-Grand-Prix.jpg",
    },
    {
      id: "2012-brazilian-grand-prix",
      title: "2012 Brazilian Grand Prix",
      description: `Before the 2012 Brazilian Grand Prix, everyone was expecting Sebastian Vettel to clinch the title, with high confidence in his victory—until the first lap of the race. Starting from 4th, Sebastian Vettel had a poor start, dropping down to 7th. On the 4th corner, he made unfortunate contact with Bruno Senna, sending him to the back of the pack. As if that wasn't enough, Sebastian suffered irreparable damage to his sidepod, making it seem like his championship hopes were slipping away. "It's the Red Bull of Sebastian Vettel in the middle of the track, it's the worst possible scenario for Sebastian Vettel who started on the second row!" But Sebastian was determined to prove everyone wrong. In just 8 laps, he made a stunning recovery, rising from 24th to 7th. After a dramatic race, he finished 6th. <br/> <br/> "You are the world champion! You're the triple world champion, Sebastian Vettel. You are the man, you're a triple world champion."`,
      image: "/images/races/2012-Brazilian-Grand-Prix.avif",
    },
    {
      id: "2013-indian-grand-prix",
      title: "2013 Indian Grand Prix",
      description: `The 2013 Indian Grand Prix was another dominant performance by Sebastian Vettel, continuing his incredible win streak. Starting from pole position, Vettel displayed his unrivaled pace throughout the weekend, leaving his rivals far behind. Despite the heat and challenging conditions of the Buddh International Circuit, Vettel maintained perfect control, effortlessly managing his tires and adapting to the constantly changing track surface. With an unchallenged drive, he claimed his 4th consecutive victory, securing his lead in the 2013 World Championship. This victory was a key moment in his bid for the 2013 title, showcasing both his and the Red Bull Racing team's dominance.`,
      image: "/images/races/2013-Indian-Grand-Prix.avif",
    },
    {
      id: "2015-malaysian-grand-prix",
      title: "2015 Malaysian Grand Prix",
      description: `The 2015 Malaysian Grand Prix was a defining moment in Sebastian Vettel's career with Ferrari. After years of domination by Red Bull Racing, the Malaysian GP marked the first victory for Ferrari since 2013 and was a sign of the team's resurgence under the leadership of Vettel. Starting from 2nd on the grid, Vettel made an incredible start and quickly overtook Mercedes' Lewis Hamilton to take the lead. Despite the intense heat and the challenging Sepang circuit, he showcased his strategic brilliance and tire management skills, maintaining control throughout the race. Vettel's victory at Malaysia was a historic win for Ferrari, ending Mercedes' winning streak and giving the team and their driver a huge boost in confidence for the rest of the season. <br/> <br/> "Grazie, Grazie, GRAZIE! DAI FORZA FERRARI!"`,
      image: "/images/races/2015-Malaysian-Grand-Prix.webp",
    },
    {
      id: "2017-australian-grand-prix",
      title: "2017 Australian Grand Prix",
      description: `The 2017 Australian Grand Prix marked the start of a new era for Sebastian Vettel and Ferrari, as they hoped to challenge Mercedes for the World Championship. Starting from 2nd on the grid, Vettel showed his intent early on, putting up a fierce fight against Lewis Hamilton, who started from pole. The race at Melbourne's Albert Park Circuit was filled with intense battles and strategic decisions. Vettel's Ferrari was strong, and despite the pressure from Hamilton and Red Bull's Daniel Ricciardo, Vettel managed to stay ahead throughout most of the race. With excellent tire management and a perfectly timed pit strategy, Vettel crossed the finish line in 1st place, securing his first victory of the 2017 season and sending a strong message to the competition. This win was a significant boost for Ferrari, signaling that they were serious contenders in the fight for the championship, and it marked a return to winning form for Vettel after a tough 2016 season.`,
      image: "/images/races/2017-Australian-Grand-Prix.jpg",
    },
    {
      id: "2017-malaysian-grand-prix",
      title: "2017 Malaysian Grand Prix",
      description: `The 2017 Malaysian Grand Prix was a challenging race for Sebastian Vettel in his pursuit of the 2017 World Championship. Starting from last place on the grid due to an engine issue in qualifying, Vettel faced a monumental task. However, with remarkable determination and superb racecraft, he made his way up the field and finished 4th. Despite his incredible recovery, Vettel's race was far from easy. Tire wear and balance issues were persistent challenges throughout the race, and he had to carefully manage his pace while battling both his rivals and the conditions. In the end, his 4th-place finish wasn’t enough to keep him in the championship fight, marking a disappointing result in a race where he had hoped for much more. The 2017 Malaysian GP was also the final race at the Sepang Circuit, making the outcome even more bittersweet for both Vettel and Ferrari, as they couldn't achieve a victory in what would be the last appearance at this iconic venue.`,
      image: "/images/races/2017-Malaysia-Grand-Prix.jpg",
    },
    {
      id: "2017-monaco-grand-prix",
      title: "2017 Monaco Grand Prix",
      description: `The 2017 Monaco Grand Prix was a defining moment in Sebastian Vettel's season as he extended his lead in the 2017 World Championship with a stunning victory. Starting from 1st on the grid, Vettel demonstrated his unparalleled skill in navigating the tight and demanding Monaco circuit. Despite fierce competition from Mercedes' Lewis Hamilton and Red Bull's Daniel Ricciardo, Vettel managed to maintain a commanding lead throughout the race. His flawless tire management, combined with strategic pit stops and his immaculate driving, kept him ahead as the rest of the field struggled with the challenging conditions. As the race unfolded, the Monaco streets proved to be a challenge for many, with multiple Safety Car periods and pit strategy battles shaking up the order. However, Vettel held his nerve and crossed the finish line to claim a historic victory—his first in Monaco and Ferrari's first since 2001. This victory was not only important for Vettel's championship campaign but also a significant symbolic win for Ferrari, reaffirming their strength and potential for the 2017 season.`,
      image: "/images/races/2017-Monaco-Grand-Prix.jpg",
    },
    {
      id: "2018-australian-grand-prix",
      title: "2018 Australian Grand Prix",
      description: `The 2018 Australian Grand Prix was a fantastic start to the season for Sebastian Vettel and Ferrari. Starting from pole position, Vettel showcased his skill and composure as he led the race from start to finish. Despite challenges from Mercedes' Lewis Hamilton and Red Bull's Daniel Ricciardo, Vettel maintained his lead with a flawless performance throughout the weekend. His tire management and strategic decisions allowed him to keep a steady pace, ensuring he stayed ahead of his rivals in the challenging Melbourne circuit. In the end, Vettel crossed the finish line to claim the victory, marking his first win of the 2018 season and Ferrari's first win in Australia since 2007. This victory gave Vettel and the team a huge confidence boost as they kicked off their championship campaign with a dominant performance.`,
      image: "/images/races/2018-Australian-Grand-Prix.jpg",
    },
    {
      id: "2018-belgian-grand-prix",
      title: "2018 Belgian Grand Prix",
      description: `The 2018 Belgian Grand Prix at Spa-Francorchamps was a remarkable race for Sebastian Vettel, as he claimed a dominant victory. Starting from 2nd on the grid, Vettel wasted no time in putting pressure on pole sitter Lewis Hamilton and soon took the lead. Throughout the race, Vettel showed his superior pace in the Ferrari, managing to control the race with impressive tire management and maintaining a comfortable gap from his rivals. Despite challenges from Hamilton and Red Bull, Vettel remained composed and continued to extend his lead. The victory marked Vettel’s 4th win of the 2018 season and was a crucial moment in his World Championship battle. His drive in Spa demonstrated both his racing craft and the strength of the Ferrari SF71H, as he was able to outpace Mercedes and Hamilton in one of the most demanding circuits on the calendar. This win was a significant boost for Ferrari in their bid for the championship and a huge moment for Vettel, as he showcased his ability to perform under pressure and continue his challenge for the 2018 title.`,
      image: "/images/races/2018-Belgian-Grand-Prix.webp",
    },
    {
      id: "2019-singapore-grand-prix",
      title: "2019 Singapore Grand Prix",
      description: `The 2019 Singapore Grand Prix was a historic race for Sebastian Vettel, as he secured his last Formula 1 victory to date, marking his first win of the season and his first win since 2018. Starting from 3rd on the grid, Vettel quickly showed his determination and skill, keeping his focus to challenge for the win. The race at Marina Bay Circuit was particularly challenging, with its tight corners and humid conditions, but Vettel showcased excellent tire management and racecraft throughout the evening. As the race unfolded, he made a brilliant move to leapfrog his competitors during the pit stops, keeping himself in a strong position. Despite pressure from Mercedes' Lewis Hamilton and Red Bull's Max Verstappen, Vettel held on to his lead after the final pit stops, showing great composure and control. His steady pace and flawless strategy helped him cross the finish line in 1st place, claiming a well-deserved victory. This win was significant not only because it marked a return to winning form for Vettel, but also because it became his last victory in Formula 1 to date, making the 2019 Singapore Grand Prix a bittersweet moment in his career. The victory solidified his legacy as one of the most talented drivers of his generation.`,
      image: "/images/races/2019-Singapore-Grand-Prix.jpg",
    },
    {
      id: "2019-german-grand-prix",
      title: "2019 German Grand Prix",
      description: `The 2019 German Grand Prix at Hockenheim was one of the most unforgettable races in recent F1 history, and Sebastian Vettel produced a sensational drive that will be remembered for years to come. Starting from 20th on the grid, the race was already set up to be an intense challenge, but Vettel's determination and skill turned what seemed like a near-impossible task into one of his most remarkable performances. The race was marred by extreme weather conditions, with heavy rain causing chaos throughout the weekend. As the track became increasingly treacherous, many drivers struggled with grip, but Vettel showcased his incredible ability in wet conditions, keeping calm while others faltered. He made up places steadily, with impressive overtakes, especially in the early laps, and quickly moved up the order. By the middle of the race, Vettel had climbed from 20th to 2nd, in a stunning display of racecraft and tire management. Despite the Ferrari not being the fastest car on track, Vettel’s tire choices and ability to adapt to the shifting conditions allowed him to put in some brilliant laps, keeping pressure on the leaders. In the final laps, Vettel fought fiercely but ultimately finished in 2nd place, just missing out on victory, but nonetheless, his drive was one of the highlights of the season. The 2019 German Grand Prix was a testament to Vettel's experience and resilience. Starting from the back of the grid and making his way up to 2nd place in one of the most chaotic races in recent memory showcased his ability to perform under pressure, even when the odds were stacked against him.`,
      image: "/images/races/2019-German-Grand-Prix.avif",
    },
    {
      id: "2020-turkish-grand-prix",
      title: "2020 Turkish Grand Prix",
      description: `The 2020 Turkish Grand Prix at Istanbul Park was a memorable and historic race, particularly for Sebastian Vettel, as he secured his last podium with Ferrari. Starting from 12th on the grid, Vettel faced incredibly difficult conditions, with the track drenched by heavy rain, creating a slippery surface that made it challenging for all drivers. As the race unfolded, Vettel's experience and skill in wet conditions became evident. While others struggled to find grip and control, Vettel stayed composed and showed exceptional tire management, slowly making his way through the field. His steady pace allowed him to capitalize on the mistakes of others, steadily climbing up the order despite not having the fastest car. Vettel’s race was a masterclass in consistency. With a series of clever decisions and keeping his cool in the tricky conditions, he managed to fight his way up to 3rd place by the time the race ended. This podium finish was especially emotional, as it marked Vettel's last podium with Ferrari, making it a significant moment in his career. The 2020 Turkish Grand Prix highlighted Vettel's enduring talent, proving that even in challenging circumstances, he remained one of the most skilled and resilient drivers on the grid.`,
      image: "/images/races/2020-Turkish-Grand-Prix.jpg",
    },
    {
      id: "2021-baku-grand-prix",
      title: "2021 Baku Grand Prix",
      description: `The 2021 Baku Grand Prix was a pivotal moment in Formula 1, not just for Sebastian Vettel, but for Aston Martin as well. Starting from 11th on the grid, Vettel faced a significant challenge in a race filled with chaos and uncertainty. Despite the obstacles, Vettel showed his immense experience and racecraft, working his way up through the field to finish in an impressive 2nd place. The race itself was unpredictable, with multiple retirements and drama unfolding as the race progressed. As the circuit's demanding corners and narrow streets created difficulties for many drivers, Vettel's tire management and steady pace allowed him to capitalize on the mistakes of others. He climbed up the order, showing remarkable consistency and determination. By the end of the race, Vettel finished in 2nd, securing Aston Martin's first-ever podium in their modern iteration as a team. This achievement marked a significant milestone for the team, and it was also a reminder of Vettel's exceptional driving ability. Despite not having the fastest car, his strategic approach and flawless execution on track earned him the podium and helped Aston Martin establish themselves as a competitive force. The 2021 Baku Grand Prix was a monumental moment for both Sebastian Vettel and Aston Martin, with Vettel showing that his experience and skill could overcome any challenge, even when the odds were stacked against him.`,
      image: "/images/races/2021-Baku-Grand-Prix.jpg",
    }
  ];

  return (
    <div id="best-races">
      {races.map((race, i) => (
        <div
          key={race.id}
          id={race.id}
          className={`page max-md:!h-[1600px] flex justify-center max-md:flex-col ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Image
            width={1000}
            height={1000}
            src={race.image}
            className="page-half-banner"
            alt={`Sebastian Vettel ${race.title}`}
          />
          <div className="md:w-1/2 md:h-full h-1/2 bg-[#001c45]/40 justify-center items-center flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl font-bold">{race.title}</h1>

            <p
              dangerouslySetInnerHTML={{
                __html: race.description,
              }}
              className="text-base md:text-lg font-medium md:px-16 px-8 text-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
