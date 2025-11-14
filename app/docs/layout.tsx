import Link from 'next/link'

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/getting-started' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'TOON Format', href: '/docs/toon-format' },
      { title: 'API Overview', href: '/docs/api-overview' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Data Access', href: '/docs/api/data-access' },
      { title: 'Filtering', href: '/docs/api/filtering' },
      { title: 'Transformation', href: '/docs/api/transformation' },
      { title: 'Aggregation', href: '/docs/api/aggregation' },
      { title: 'Statistics', href: '/docs/api/statistics' },
    ]
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <nav className="sticky top-24 space-y-6">
            {sidebarItems.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 block py-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
