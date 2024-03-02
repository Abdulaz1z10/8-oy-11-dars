import Image from "next/image";
import  Link  from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Home page </h1>
      <Link href="/auth/signUp">
        <div className="text-white text-center text-2xl no-underline bg-slate-700 p-[20px] bg- border-white border-8 border-inherit w-[200px] mb-[10px]">
          Sign Up
        </div>
      </Link>
    </main>
  );
}
