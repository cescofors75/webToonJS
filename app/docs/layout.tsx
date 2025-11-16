import Link from 'next/link'

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation & Quick Start', href: '/docs/getting-started' },
    ]
  },
  {
    title: 'Documentation',
    items: [
      { title: 'API Reference', href: '/docs/api-reference' },
      { title: 'Methods Guide', href: '/docs/methods' },
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
                <h4 className="font-semibold text-sm text-gray-900 mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-emerald-600 block py-1"
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
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
