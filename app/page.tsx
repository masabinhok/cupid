import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-background flex items-center justify-center p-10 h-screen ">
      <div className="max-w-[768px] bg-accent rounded-xl text-text  p-5 w-full h-96 flex flex-col items-center justify-center relative">
        <Image className="inline absolute top-5 left-5 " src="/logo-xl.png" alt="logo" width={32} height={32} />
        <h2 className="font-semibold text-center text-4xl mb-2  ">
          Cupid <span className="font-light text-2xl italic">findLoveYourWay</span>
        </h2>
        <p className="text-base  mb-5 ">
          Find love, connect instantly, and chat with ease. Cupid is your perfect matchmaker.
        </p>
        <span className="  px-6 py-2 rounded-xl ">
          <span className="font-semibold ">Under Development </span>| 24 Nov 2024   {"  "}

          <Link className="italic hover:underline" href="https://www.github.com/masabinhok">
            @masabinhok
          </Link>
        </span>
      </div>
    </div>
  );
}


