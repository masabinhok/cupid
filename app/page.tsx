

export default function Home() {
  return (
    <div className="bg-background flex items-center justify-center p-10 h-screen ">
      <div className="max-w-[768px] bg-accent rounded-xl text-text  p-5 w-full h-96 flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-4xl mb-2 ">
          Cupid : Your match is just a swipe away
        </h2>
        <p className="text-base mb-5 ">
          Find love, connect instantly, and chat with ease. Cupid is your perfect matchmaker.
        </p>
        <button className="bg-text hover:opacity-90 text-light  px-6 py-2 rounded-xl ">
          Get Started
        </button>
      </div>
    </div>
  );
}


