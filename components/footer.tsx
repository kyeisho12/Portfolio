export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="text-center">
            <p className="text-muted-foreground">© 2025 Guian Carlo Francisco. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
