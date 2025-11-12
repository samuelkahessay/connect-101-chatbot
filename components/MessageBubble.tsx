"use client";

import { Message } from "@/types/chat";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { CheckCheck } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    setFormattedTime(
      message.timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [message.timestamp]);

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-lg transition-all duration-300 ${
          isUser
            ? "bg-gradient-to-br from-atb-dark to-atb-blue text-white rounded-br-none border border-atb-light/30"
            : "glass text-gray-900 dark:text-gray-100 rounded-bl-none"
        }`}
      >
        <div
          className={`text-sm leading-relaxed prose prose-sm max-w-none ${
            isUser
              ? "prose-invert [&>p]:text-white [&>strong]:text-white [&>ul]:text-white [&>li]:text-white"
              : "dark:prose-invert"
          }`}
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        <div className="flex items-center justify-end gap-1 mt-2">
          <p
            className={`text-xs ${
              isUser ? "text-cyan-100" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {formattedTime}
          </p>
          {isUser && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CheckCheck className="w-3 h-3 text-cyan-200" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
