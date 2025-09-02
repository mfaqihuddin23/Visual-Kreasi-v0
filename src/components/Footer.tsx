import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About us" },
    { href: "#works", label: "Works" },
    { href: "#story", label: "Story" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = ["Instagram", "Behance", "Dribbble", "Canva", "X", "LinkedIn", "WhatsApp"]

  return (
    <footer id="contact" className="relative py-16 border-t border-white/10">
      {/* Background Watermark */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <span className="text-[12vw] font-extrabold text-white/5 select-none">Visual Kreasi</span>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {quickLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 rounded px-2 py-1"
              >
                {link.label}
              </Link>
              {index < quickLinks.length - 1 && <span className="text-white/30 mx-2">·</span>}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {socialLinks.map((social, index) => (
            <span key={social} className="flex items-center">
              <Link
                href="#"
                className="text-white/50 hover:text-white/70 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 rounded px-2 py-1"
              >
                {social}
              </Link>
              {index < socialLinks.length - 1 && <span className="text-white/20 mx-1">·</span>}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-sm">© 2024 Visual Kreasi. All rights reserved.</div>
      </div>
    </footer>
  )
}
