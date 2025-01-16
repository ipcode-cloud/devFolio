import Abouts from "../components/Abouts";
import Hero from "../components/Hero";
import Xperience from "./Xperience";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <main className="md:mx-[8rem]">
        <Abouts />
        <Xperience />
      </main>
    </div>
  );
};

export default Home;
