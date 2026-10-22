/* Edit this file to change site content. No other file needs touching for normal updates. */
window.SITE = {
  email: "soumyajitfx@gmail.com",
  whatsapp: "919593188894",                          // digits only with country code, e.g. "919876543210". Empty hides the link.
  formEndpoint: "",                      // Web3Forms / Formspree URL. Empty = form opens the visitor's email app instead.
  socials: [{ label: "GitHub", url: "https://github.com/soumyajit2928" }],

  services: [
    ["Business websites", "Clear, credible sites that explain what you do and make it easy to get in touch."],
    ["Landing pages", "Focused single pages built around one goal: sign-ups, enquiries or sales."],
    ["E-commerce websites", "Online stores with product catalogues, carts and a smooth checkout path."],
    ["Dynamic websites and web apps", "Interactive tools, dashboards and data-driven sites that go beyond static pages."],
    ["Website redesign", "A fresh look and faster, cleaner code for a site that has outgrown its design."],
    ["Website maintenance", "Updates, fixes and performance checks to keep your site healthy."]
  ],

  /* [name, description, tools you actually use]. Leave tools empty to hide chips. */
  skills: [
    ["Frontend development", "Semantic, accessible interfaces.", ["HTML", "CSS", "JavaScript", "React"]],
    ["Backend development", "Server logic only where a project needs it.", []],
    ["Database integration", "Storing and retrieving the data your site depends on.", ["Firebase"]],
    ["API integrations", "Connecting forms, payments and third-party services securely.", []],
    ["Responsive design", "Layouts that work on phones, tablets and desktops.", []],
    ["UI/UX design", "Clear hierarchy, readable type and simple user flows.", []],
    ["Deployment and optimisation", "Fast loading, optimised images and reliable hosting.", ["GitHub Pages"]]
  ],

  process: [
    ["Understand requirements", "We talk through your goals, audience, content and timeline."],
    ["Plan and design", "I outline the structure and design the look before building."],
    ["Develop", "I build the site with clean, reusable code."],
    ["Test and optimise", "I check every device size, link, form and load time."],
    ["Deploy and hand over", "I launch the site and walk you through managing it."]
  ],

  /* Add projects here. Fields: title, description, image, tech[], live, github (leave "" to hide a button).
     Example:
     { title: "Project name", description: "What it does.", image: "assets/projects/name.webp",
       tech: ["HTML", "CSS"], live: "https://...", github: "https://github.com/..." } */
  projects: [
    {
      title: "ASUFX Discord Community",
      description: "Website for the ASUFX trading community on Discord, with pages for giveaways, prop firms, tournaments and news, and clear calls to join the server.",
      image: "assets/projects/asufx.webp",
      tech: ["HTML", "CSS", "Vercel"],
      live: "https://asufx.vercel.app",
      github: ""
    },
    {
      title: "Ghost Room",
      description: "A private, anonymous chat app. Share a room by link, chat with temporary identities, and let the host end the session to delete all of its data. Rooms are unlisted, not end-to-end encrypted.",
      image: "assets/projects/ghost.webp",
      tech: ["HTML", "CSS", "JavaScript", "Firebase", "GitHub Pages"],
      live: "https://soumyajit2928.github.io/GhostRoom/",
      github: "https://github.com/soumyajit2928/GhostRoom"
    },
    {
      title: "Maison Noor Salon (concept)",
      description: "A concept website for a fictional salon: tabbed service price list, live open or closed status, and a validated booking form. Sample prices and placeholder details, not a real business.",
      image: "assets/projects/salon.webp",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://soumyajit2928.github.io/Salon/",
      github: "https://github.com/soumyajit2928/Salon"
    },
    {
      title: "Invoice Generator",
      description: "A responsive, no-backend invoice generator built with HTML, CSS and vanilla JavaScript.",
      image: "assets/projects/invoice.webp",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://soumyajit2928.github.io/invoice-generator/",
      github: "https://github.com/soumyajit2928/invoice-generator"
    }
  ]
};
