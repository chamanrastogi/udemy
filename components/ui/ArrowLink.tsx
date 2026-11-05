import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: ArrowLinkProps) {
  const classes = className ? `arrow-link ${className}` : "arrow-link";
  const arrow = (
    <span className="arrow" aria-hidden="true">
      {external ? "↗" : "→"}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
