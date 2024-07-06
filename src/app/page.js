import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full p-10">
      <h1 className="text-3xl ">Welcome to Recipe App</h1>
      <Link href={'/recipe-list'} className="p-2 rounded-lg bg-emerald-600 inline-block hover:bg-emerald-700 text-white font-bold">Explore Recipes</Link>
    </div>
  );
}
