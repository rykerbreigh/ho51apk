"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage()

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
      <ol className="flex space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">{">"}</span>}
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
