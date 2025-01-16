const Xperience = () => {
  return (
    <div className="flex flex-col relative">
      <h1 className="text-white text-3xl z-10">Work Xperience</h1>
      <div className="self-center bg-custom-radial h-[20rem] md:h-[28rem] md:w-[28rem] shadow-lg rounded-full overflow-auto relative"></div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 absolute top-[5rem]">
        {[1,2,3,4].map((i)=>(

        <div className="md:w-[30rem] bg-[#2C1250] shadow-xl transparent p-5 rounded-lg border-t-2 border-t-[#693B93]" key={i}>
          <img src="" alt="" />
          <div className="text-white">
            <h1>CIB onthe Mobile</h1>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Xperience;
