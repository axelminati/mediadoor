
import React from 'react';
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const EcomIntroBar = () => {
  return (
    <div className="bg-gradient-to-r from-black/70 to-black/90 border-b border-purple-500/20 pt-20">
      <div className="container-custom py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="bg-red-500/20 p-1.5 rounded-full">
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </span>
            <p className="text-sm text-gray-300">
              <span className="font-medium text-white">Tired of Facebook ad account bans?</span> You're not alone.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcomIntroBar;
