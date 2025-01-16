const Hero = () => {
  return (
    <div className="text-white flex justify-around items-center min-h-screen gap-10">
      <div className="bg-custom-radial h-[28rem] w-[28rem] shadow-lg rounded-full border border-slate-900 flex items-center justify-center relative">
        <img
          src="./Arrow.png"
          alt="arrow"
          className="absolute -top-7 right-[5rem]"
        />
        <img src="./Me.png" alt="profile" width={250} className="aspect-auto" />
      </div>
      <div className="md:basis-1/2 flex flex-col h-[28rem] justify-start relative">
        <h1 className="text-3xl font-mono absolute -left-[14rem]">
          Hello! I Am <span className="text-[#7127BA]">Irankunda</span>
        </h1>
        <h2 className="absolute -left-[12rem] top-[7rem] text-4xl">
          <span className="font-mono text-3xl">A Programmer Who</span> <br />{" "}
          Writes Code Like a <span className="text-[#7127BA] relative">
          <img src="./Ellipse 5.png"width={400} className="absolute right-0 -top-10 h-[9rem] w-[6rem] rotate-45" alt="ellipse" />
            Story</span> —{" "}
          <br />{" "}
          <span className="text-xl text-slate-500">
            {" "}
            Because If It's Not Readable, How Will It Run?
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
