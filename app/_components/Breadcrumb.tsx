import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {i > 0 && <span className="breadcrumb__sep" aria-hidden="true">›</span>}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page" style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
