import Link from "next/link";

export default function Menu() {
  return (
    <div className="fixed bg-slate-900 ">
      <div className="w-[250px] h-[100vh] pt-[50px] flex flex-col pl-[25px]  ">
        <Link href="/dashboard">
          <div className="text-white text-2xl no-underline bg-slate-700 p-[20px] bg- border-white border-8 border-inherit w-[200px] mb-[10px]">
            Books
          </div>
        </Link>
        <Link href="/authors">
          <div className="text-white text-2xl no-underline bg-slate-700 p-[20px] border-white border-8 border-inherit w-[200px] mb-[10px]">
            Authors
          </div>
        </Link>
        <Link href="/categories">
          <div className="text-white text-2xl no-underline bg-slate-700 p-[20px] border-white border-8 border-inherit w-[200px]">
            Categories
          </div>
        </Link>
      </div>
    </div>
  );
}
