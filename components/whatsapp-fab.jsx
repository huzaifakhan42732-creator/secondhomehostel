"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { site } from "@/lib/site-config"

export function WhatsappFab() {
  return (
    <motion.a
      href={site.whatsappLinkWithMessage}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-xl shadow-[#25D366]/30"
      aria-label="Book on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="h-6 w-6 relative z-10" />
    </motion.a>
  )
}
