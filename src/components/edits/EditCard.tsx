export default function EditCard({
  name,
  editLink,
}: {
  name: string;
  editLink: string;
}) {
  return (
    <a href={editLink} target="_blank">
      <div className="p-4 hover:shadow-md flex flex-col gap-2 rounded-2xl w-72 border-2 border-red-500/50 hover:border-red-500 duration-150">
        <p className="underline text-base font-medium">{editLink}</p>

        <h2 className="text-base font-bold">Sent by: {name}</h2>
      </div>
    </a>
  );
}
