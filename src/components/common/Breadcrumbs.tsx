// src/components/common/Breadcrumbs.tsx
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={`bg-gray-50 border-b border-gray-200 ${className}`}
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center flex-wrap text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-amber-600 transition-colors flex items-center"
              aria-label="Accueil"
            >
              <Home size={16} className="mr-1" />
              <span>Accueil</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.url} className="flex items-center">
                <ChevronRight size={16} className="text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
