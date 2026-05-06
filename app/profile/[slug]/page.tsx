'use client'
//без этого useParams() не будет работать
import {useParams} from "next/navigation";


export default function Home() {
    const params=useParams()
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        USER {params.slug}
      </main>
    </div>
  );
}
//{params.slug} (в зависимости от того как мы назвали динамическую папку)
