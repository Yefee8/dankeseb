export default function Footer() {
    return (
      <div className="border-t border-t-red-500/10 w-full py-4 flex justify-center md:justify-between gap-4 flex-wrap items-center md:px-16 px-8 z-50 duration-250">
        <a href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Danke Seb</h1>
        </a>

        <a href="https://github.com/Yefee8">
          <div className="text-base font-bold cursor-pointer hover:bg-indigo-500/30 duration-150 rounded-lg px-2 py-1">made by Yefee.</div>
        </a>
      </div>
    );
}