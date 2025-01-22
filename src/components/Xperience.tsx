import { icons } from "../assets";

const Xperience = () => {
  return (
    <div className="flex flex-col relative min-h-screen">
      <h1 className="text-white text-3xl z-10 ml-12">Work Xperience</h1>
      <div className="self-center bg-custom-radial1 h-[20rem] md:h-[38rem] md:w-[50rem] shadow-lg rounded-full overflow-auto relative"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 absolute top-[5rem] w-full ">
        {icons.map((icon, i)=>(

        <div className="bg-[#2C1250] bg-transparent shadow-xl p-2 rounded-lg border-t-[5px] border-t-[#693b93] flex relative" key={i}>
          <img src={icon} alt="image" width={200} className="aspect-auto"/>
          <div className="text-white flex flex-col gap-4 lg:w-full">
            <h1 className="font-bold">CIB onthe Mobile</h1>
            <p className="font-sans">
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <button className="border bg-[#2C1250] border-[#693b93] w-1/2 hover:bg-[#6508e744] rounded-full p-2">LEARN MORE</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Xperience;
