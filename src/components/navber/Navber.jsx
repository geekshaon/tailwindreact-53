import React, { useState } from "react";
import {
  BeakerIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const navbarItems = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <XMarkIcon className="size-6 text-black" />
        ) : (
          <Bars3BottomLeftIcon className="size-6 text-black" />
        )}
      </div>
      <div
        className={`list-none md:flex md:static absolute duration-700 pl-4 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {navbarItems.map((link) => (
          <li className="p-1" key={link.id}>
            {link.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navber;
