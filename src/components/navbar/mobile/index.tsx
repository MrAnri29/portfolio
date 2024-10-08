"use client";

import { AnimatePresence } from "framer-motion";
import NavbarMobileButton from "./button";
import { NavbarMobileDialog } from "./dialog";
export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobileMenu({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <div data-lenis-prevent className="md:hidden">
      <NavbarMobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>
        {isOpen && <NavbarMobileDialog key="dialog" />}
      </AnimatePresence>
    </div>
  );
}
