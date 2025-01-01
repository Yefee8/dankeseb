export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full py-2 flex justify-center md:justify-between gap-4 flex-wrap items-center md:px-16 px-8 z-50 duration-250">
      <a href="/">
      <h1 className="text-2xl font-bold cursor-pointer">Danke Seb</h1>
      </a>

      <div className="flex flex-wrap justify-center gap-2 items-center font-medium">
        <a
          href="#general-stats"
          className="text-base px-2 py-1 hover:bg-indigo-500/70 rounded-lg duration-150"
        >
          Stats
        </a>
        <a
          href="#bmw-sauber"
          className="text-base px-2 py-1 hover:bg-red-500/70 rounded-lg duration-150"
        >
          Teams
        </a>
        <a
          href="#best-races"
          className="text-base px-2 py-1 hover:bg-[#001344]/70 rounded-lg duration-150"
        >
          Best Races
        </a>
        <a
          href="/edits"
          className="text-base px-2 py-1 hover:bg-[#00231f]/70 rounded-lg duration-150"
        >
          Edits
        </a>
        <a
          href="/gallery"
          className="text-base px-2 py-1 hover:bg-yellow-500/70 rounded-lg duration-150"
        >
          Gallery
        </a>
      </div>
    </div>
  );
}