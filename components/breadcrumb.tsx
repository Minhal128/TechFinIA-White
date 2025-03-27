import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
              {item.active ? (
                <span className="text-gray-600">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-gray-400 hover:text-red-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

