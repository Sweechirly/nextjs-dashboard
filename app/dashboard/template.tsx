// app/template.js
"use client"; // 需要使用客户端特性

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
