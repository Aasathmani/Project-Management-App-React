export default function Button({children,...probs}){
    return (
        <button className="px-6 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-400" {...probs}>
        {children}
      </button>
    );
}