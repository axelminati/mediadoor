
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-white -z-10 dark:hidden" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/40 to-transparent -z-10 dark:hidden" />
      
      {/* Dark mode background elements */}
      <div className="absolute top-0 left-0 w-full h-full dark:block hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-70"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>
      </div>
      
      {/* Horizontal glowing line in dark mode */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent top-[30%] hidden dark:block -z-10"></div>
    </>
  );
};

export default BackgroundEffects;
