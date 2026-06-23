import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";
import style from "../components/Navbar.module.css"

const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const servicesDropdown = [
    { name: "Maintenance", path: "/services/maintenance" },
    { name: "LED", path: "/services/led" },
    { name: "Quick Help", path: "/services/quick-help" },
  ];

  return (


    <nav className="bg-slate-900/40 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
{/*         
       {الراجل الطيب القاعد لوحده}  */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* تعديل لون الـ SVG إلى أبيض ناصع مع تأثير التوهج الأزرق عند الـ Hover */}
          <svg
            className="w-10 h-10 text-white group-hover:text-blue-500 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M 2.4 34.5 C 13.5 37.5 35 44 47.5 14.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 2 43 C 25 43 45 49 53 45 C 55 44 57 47 55 52 C 53 58 53 66 57 71 C 57 74 43 76 38 76 C 30 76 29 71 25 71 C 21 71 20 76 10 76 C 2 76 2 60 2 43 Z" />
            <circle cx="33" cy="71" r="11" fill="#0f172a" /> {/* الجانط*/}
            <circle cx="33" cy="71" r="7" fill="currentColor" />
            <rect x="2" y="82" width="96" height="4" rx="2" />
            <circle cx="71" cy="29" r="6" />
            <path d="M 64.5 31.5 C 64.5 30 67 29 69 29 C 69 27 67 26 65 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 59 36.5 L 57 41 L 53 47 C 55 49 57 46 60 43 L 64 38 Z" />
            <path d="M 60 36 C 58 35 56.5 37 57.5 39 C 59 40 61 38.5 60 36 Z" />
            <path d="M 74 34 C 67 38 59 43 57 47 C 62 49 68 44 75 42 C 78 45 84 52 87 59 C 89 64 87 75 87 81 C 83 81 81 81 81 81 C 81 74 80 69 77 66 C 74 63 71 63 69 66 C 67 69 67 74 67 81 C 63 81 62 81 62 81 C 62 73 63 65 67 59 C 71 52 75 46 74 34 Z" />
          </svg>

          {/*لوجو */}
          <span className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
            Auto<span className="text-blue-500 group-hover:text-blue-400 transition-colors">Mate</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          
       
          <Link
            to="/">
            Home
          </Link>

<Dropdown className={`${style.dropdown1}`}  label="Services" dismissOnClick={false}>

<div className={`${style.dropdown}`}>

      <DropdownItem className={`${style.dropdown4}`}> <Link to={"/services/maintenance"}>Maintenance</Link></DropdownItem>   
      <DropdownItem className={`${style.dropdown2} mt-1`}><Link to={"/services/led"}>LED</Link> </DropdownItem>
      <DropdownItem className={`${style.dropdown3} mt-1`}><Link to={"/services/quick-help"}>Quick Help</Link> </DropdownItem>
   
</div>
    
    </Dropdown>

          <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]">
            Contact
          </button>
        </div>

      </div>
    </nav>
  );

};

export default Navbar;