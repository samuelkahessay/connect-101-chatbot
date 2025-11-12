"use client";

import ChatInterface from "@/components/ChatInterface";
import { motion } from "framer-motion";
import { Users, Coffee, Target } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20" />


      {/* Floating orbs for depth */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-atb-light/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-atb-cyan/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-5xl z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-atb-dark via-atb-blue to-atb-light bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Connect 101
          </motion.h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Employee Matching & Mentorship Platform for ATB Financial
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20"
            >
              <Users className="w-4 h-4 text-atb-blue" />
              Smart Matching
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20"
            >
              <Coffee className="w-4 h-4 text-atb-light" />
              Coffee Chats
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20"
            >
              <Target className="w-4 h-4 text-atb-teal" />
              Career Growth
            </motion.div>
          </div>
        </motion.div>

        {/* Chat Interface */}
        <ChatInterface />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 space-y-2"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Powered by AI • Built with Next.js & Framer Motion
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Portfolio recreation of the original Connect 101 built with Google Workspace (Chat, Calendar) at ATB Financial (2019)
            <br />
            This demonstration has no affiliation with ATB Financial
          </p>
        </motion.div>
      </div>
    </main>
  );
}
