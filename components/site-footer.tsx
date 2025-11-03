export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container text-sm text-muted-foreground">
        © {new Date().getFullYear()} NetMark. All rights reserved.
      </div>
    </footer>
  )
}
