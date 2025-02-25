"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { id: "home", name: "Home", href: "/" },
  { id: "lookbooks", name: "Lookbooks", href: "/lookbook" },
  { id: "shop", name: "Shop", href: "https://shop.labeljuilakhani.com" },
  { id: "customs", name: "Customs", href: "/customs" },
  { id: "blogs", name: "Blogs", href: "/blogs" },
  { id: "about", name: "About Us", href: "/about" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="md:hidden ml-auto">
          <div className="grid w-5 gap-1">
            <div className="flex justify-between">
              <div className="h-[2px] w-[27%] bg-quaternary/80 rounded-xl"></div>
              <div className="h-[2px] w-[57%] bg-quaternary/80 rounded-xl"></div>
            </div>
            <div className="h-[2px] w-5 bg-quaternary/80 rounded-xl"></div>
            <div className="flex w-5 justify-between">
              <div className="h-[2px] w-[57%] bg-quaternary/80 rounded-xl"></div>
              <div className="h-[2px] w-[27%] bg-quaternary/80 rounded-xl"></div>
            </div>
          </div>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/30 backdrop-blur-md z-[1000]"
            />

            <Dialog.Content asChild>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-primary border-l border-quaternary p-6 shadow-2xl z-[1000] flex flex-col justify-between"
              >
                {/* Close Button */}
                <div className="flex justify-between items-center">
                  <Dialog.Title className="sr-only">
                    Navigation Menu
                  </Dialog.Title>
                  <Dialog.Close className="text-quaternary">
                    <X className="h-8 w-8" />
                  </Dialog.Close>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6 mt-8 text-lg uppercase font-montserrat text-quaternary">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      className="text-quaternary"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA Button */}
                <Link href="/customs">
                  <button className="mt-10 w-full bg-quaternary text-primary font-montserrat font-bold px-6 py-3 uppercase tracking-wide shadow-md">
                    Book a Call
                  </button>
                </Link>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
