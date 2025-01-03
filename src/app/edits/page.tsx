import EditCard from "@/components/edits/EditCard";
import SendEditDialog from "@/components/edits/SendEditDialog";

export default async function Home() {
  const req = await fetch("https://dankeseb.vercel.app/api/edits", {
    cache: "no-cache",
  });

  const res = await req.json();

  console.log(res);
  return (
    <div className="w-full min-h-screen flex flex-col gap-16 py-24 px-8 md:px-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">
          Best edits of Sebastian Vettel
        </h1>

        <div className="flex gap-4 flex-wrap">
          {res.data.map(
            (edit: { id: string; name: string; editLink: string }) => (
              <EditCard
                key={edit.id}
                name={edit.name}
                editLink={edit.editLink}
              />
            )
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold">Wanna send an edit?</h1>

        <SendEditDialog />
      </div>
    </div>
  );
}
