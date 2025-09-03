// Dummy data for the landing page

export async function getStats() {
  return [
    { number: "200+", label: "Projects" },
    { number: "346+", label: "Clients" },
    { number: "15", label: "Sectors" },
    { number: "30", label: "Creators" },
  ]
}

export async function getCaseStudies() {
  return [
    {
      title: "Develop a Mobile Application for Health Monitoring",
      category: "CASE STUDY",
      image: "/mobile-health-app-interface.jpg",
      href: "/case-study/health-monitoring",
    },
    {
      title: "Revamp Bridal Event Landing Page",
      category: "WEB DESIGN",
      image: "/elegant-bridal-website.jpg",
      href: "/case-study/bridal-event",
    },
    {
      title: "Revamp Bridal Event Landing Page",
      category: "WEB DESIGN",
      image: "/luxury-wedding-website.jpg",
      href: "/case-study/bridal-event-2",
    },
    {
      title: "Revamp Bridal Event Landing Page",
      category: "WEB DESIGN",
      image: "/modern-wedding-landing-page.jpg",
      href: "/case-study/bridal-event-3",
    },
    {
      title: "Corporate Identity Design",
      category: "BRANDING",
      image: "/corporate-branding-design.jpg",
      href: "/case-study/corporate-identity",
    },
    {
      title: "E-commerce Platform Redesign",
      category: "UX/UI DESIGN",
      image: "/ecommerce-website-design.jpg",
      href: "/case-study/ecommerce-redesign",
    },
  ]
}

export async function getClients() {
  return [
    { name: "ACME" },
    { name: "BRAND" },
    { name: "CORP" },
    { name: "DESIGN" },
    { name: "ELITE" },
    { name: "FUTURE" },
    { name: "GLOBAL" },
    { name: "IMPACT" },
    { name: "LUXURY" },
    { name: "MODERN" },
  ]
}

export async function getTestimonials() {
  return [
    {
      quote:
        "Visual Kreasi transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      location: "New York",
    },
    {
      quote:
        "Working with this team was an absolute pleasure. They understood our vision and brought it to life beautifully.",
      name: "Michael Chen",
      role: "CEO",
      location: "San Francisco",
    },
    {
      quote: "The results speak for themselves. Our conversion rates increased by 300% after the website redesign.",
      name: "Emma Rodriguez",
      role: "Founder",
      location: "Miami",
    },
  ]
}
