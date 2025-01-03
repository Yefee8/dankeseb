export default function Input(props: any) {
    return(
        <input {...props} className="w-full invalid:border-red-500 text-white bg-slate-900/30 focus:bg-slate-900/50 px-2 py-1.5 rounded border border-slate-900 focus:outline-indigo-500" type="text" />
    )
}