import { useState } from "react";
import { FaBurger, FaX } from "react-icons/fa6";
import { Link, useLocation} from "react-router-dom";

const links=[
  {
    name:"Home",
    to:"/"
  },
  {
    name:"About",
    to:"/about"
  },
  {
    name:"Contact",
    to:"/contact"
  }
]
const  Nav = () => {
  const loc=useLocation()
  const path = loc.pathname
  const [menu, setMenu] = useState(true)
  console.log(menu);
  
  
  return (
    <header className="relative flex justify-between md:justify-around p-5 gap-5 items-center bg-[#1A0B2E] h-[113px] w-full">
        <h1 className="max-sm:text-xl leading-tight text-3xl text-white font-extrabold">i.</h1>
      <nav className="hidden md:flex basis-1/2 justify-around text-xl text-white">
      {links.map((link)=>(
        <Link to={link.to} key={link.name} className={`${path==link.to?"max-sm:text-sm border-b-2 p-1 transition-all text-slate-300":""}`}>{link.name}</Link>
      ))}
      </nav>
      <button className="text-white font-bold text-2xl md:hidden" onClick={()=>setMenu(!menu)}>{menu?<FaX/> :<FaBurger/>}</button>
      {/*  moibile*/}
      <nav className={`absolute ${menu?"flex" :"hidden"} md:hidden transition duration-75 flex-col top-[10rem] right-0 bottom-5 p-10 gap-5 bg-[#200d3a] shadow-xl min-h-[12rem] text-xl text-white z-10`}>
        
      {links.map((link)=>(
        <Link to={link.to} key={link.name} className={`${path==link.to?"max-sm:text-sm border-b rounded-sm p-1 transition-all text-slate-300":""}`}>{link.name}</Link>
      ))}
      </nav>
    </header>
  );
};

export default Nav;
