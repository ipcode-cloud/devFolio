import { about2 } from "../assets/index.js";

// import about from "../assets/index.js"
const Abouts = () => {
  return (
    <div className="text-3xl font-mono text-white flex flex-shrink text-wrap flex-col px-16 min-h-[30rem] gap-[5rem]">
      <div>
        <h1>I'm a Software Developer. <span className="animation animate-pulse">|</span></h1>
        <p className="text-xl text-slate-500">Currently, I'm a Software Developer Student.</p>
      </div>
      <p className="text-base md:text-2xl text-balance">
        {about2}
      </p>
    </div>
  );
};

export default Abouts;
