"use client";

import { EmployeeProfile } from "@/types/employee";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MessageCircle, Sparkles } from "lucide-react";

interface EmployeeCardProps {
  employee: EmployeeProfile;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-strong rounded-2xl p-6 mb-4 border border-white/20 shadow-xl"
    >
      <div className="flex items-start gap-4">
        {/* Avatar with gradient border */}
        <div className="flex-shrink-0 relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-atb-dark via-atb-blue to-atb-light blur-sm"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-atb-dark to-atb-blue flex items-center justify-center text-white text-2xl font-bold shadow-lg border-2 border-white/30">
            {employee.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>

        {/* Employee info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {employee.name}
            </h3>
            <Badge
              variant={employee.role === "senior" ? "default" : "secondary"}
              className={`${
                employee.role === "senior"
                  ? "bg-gradient-to-r from-atb-navy to-atb-dark text-white border-atb-navy/30"
                  : "bg-gradient-to-r from-atb-teal to-atb-cyan text-white border-atb-teal/30"
              }`}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {employee.role === "senior" ? "Senior" : "Junior"}
            </Badge>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {employee.department}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {employee.yearsAtCompany} years at ATB
            </div>
          </div>

          {/* Interests tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {employee.interests.slice(0, 3).map((interest, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1 glass text-atb-dark dark:text-atb-light text-xs rounded-full font-medium border border-atb-blue/30"
              >
                {interest}
              </motion.span>
            ))}
            {employee.interests.length > 3 && (
              <span className="px-3 py-1 glass text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                +{employee.interests.length - 3} more
              </span>
            )}
          </div>

          {/* Fun fact */}
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/10">
            <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600 dark:text-gray-300 italic">
              {employee.funFact}
            </p>
          </div>
        </div>
      </div>

      {/* Communication style footer */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Communication style:</span>{" "}
            <span className="capitalize text-gray-900 dark:text-gray-200">
              {employee.communicationStyle}
            </span>
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-atb-dark to-atb-blue text-white text-xs font-medium shadow-md cursor-pointer"
          >
            Connect
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
