"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-lg border bg-card">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
          >
            <span className="font-semibold text-pretty pr-4">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform",
                openIndex === index && "rotate-180",
              )}
            />
          </button>
          {openIndex === index && (
            <div className="border-t px-6 py-4">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
