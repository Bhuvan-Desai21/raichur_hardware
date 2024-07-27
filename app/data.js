import icons from "@/app/icons";
import { HeroTestimonials } from "@/components/component/hero-testimonials";
import { FaPhoneSlash } from "react-icons/fa6";

const data = {
  adminEmails: [
    "kudlu2004@gmail.com",
    "raichurhardware2024@gmail.com",
    "ddhara36@gmail.com",
    "bhuvandesai2006@gmail.com",
  ],

  // gst number
  gstNumber: "29AAHFR1020A1Z0",

  // logo
  logoUrl: "/raichur_hardware_logo_nobg.png",

  // name
  companyName: "Raichur Hardware",

  // phone numbers
  phones: ["+91 94490 30030"],

  // emails
  emails: ["raichurhardware2024@gmail.com"],

  // address
  address:
    "Old 12-10-49 , New 12-10-87 Near Chandramouleshwar circle, Lingasugur Road, Raichur Karnataka – 584101, India",

  // footer desc
  footerDescription:
    " Raichur hardware Store is your one-stop shop for high-quality products at affordable prices. Discover the best deals and enjoy a seamless shopping experience.",

  // terms
  termsOfService: "/terms",

  // privacy
  privacy: "/privacy",

  // hero section
  heroTitleFunc: () => (
    <h1
      className="text-4xl xl:text-5xl font-bold"
      style={{ lineHeight: "3.1rem" }}
    >
      Most <span className="text-amber-950"> Trusted Hardware </span> Wholesale
      Store in <span className="text-amber-950">Raichur </span>
    </h1>
  ),
  heroDescription:
    "Offering complete solutions for agricultural, irrigational, and water supply (plumbing) needs since 1970.",
  heroDescriptionSecondLineFunc: () => (
    <p className="text-lg my-6">
      {/* Building trust, faith and having delivered services to{" "}
      <span className="underline underline-offset-4">more than 2 Lakh</span>{" "}
      customers and counting in Raichur and near{" "}
      <span className="underline underline-offset-4">since 1970</span>. */}
    </p>
  ),
  heroButtonText: "Shop Now",

  heroImages: [
    "/store_entrance_1.png",
    "/store/insider_8.jpg",
    "/store/insider_6.jpg",
    "/store/insider_5.jpg",
    "/store/insider_4.jpg",
    "/store/insider_3.jpg",
    "/store/insider_2.jpg",
    "/store/insider_1.jpg",
    "/store/people_in_store_2.jpg",
    "/people/team_pic_1.jpg",
    "/people/finolex_winning_2.jpg",
    "/certificates/jaquar_certificate.jpg",
  ],

  // about page
  aboutPageSections: [
    {
      aboutSectionBadgeText: "Raichur Hardware",
      aboutSectionTitle: "Your One-Stop Shop for Home Improvement",
      aboutSectionDescriptions: [
        "Raichur Hardware has been serving the local community for over 50 years, providing high-quality tools, supplies, and expert advice to help you tackle any home improvement project.",
      ],
      aboutSectionImageUrl: "/image_of_seth_jeevraj.jpg",
    },
    {
      aboutSectionBadgeText: "Our Products",
      aboutSectionTitle:
        "Everything You Need for Your Home Improvement Projects",
      aboutSectionDescriptions: [
        "At Raichur Hardware, we offer a comprehensive selection of high-quality tools, hardware, and home improvement supplies to meet all your needs. From power tools and hand tools to gardening equipment, plumbing supplies, and electrical components, we have everything you need to tackle any project, big or small.",
        "Our knowledgeable staff is always on hand to provide expert advice and help you find the right products for your specific needs. Whether you're a seasoned DIYer or a first-time homeowner, we're here to support you every step of the way.",
      ],
      aboutSectionImageUrl: "/people/family_1.jpg",
    },
    {
      aboutSectionBadgeText: "Our Services",
      aboutSectionTitle: "Expert Advice and Personalized Support",
      aboutSectionDescriptions: [
        "In addition to our extensive product selection, Raichur Hardware also offers a range of services to support our customers. Our experienced staff can provide expert advice and guidance on everything from tool selection and project planning to troubleshooting and repair.",
        "We also offer a variety of hands-on workshops and DIY classes to help our customers learn new skills and tackle their home improvement projects with confidence. Whether you're a seasoned DIYer or a first-time homeowner, we're here to support you every step of the way.",
      ],
      aboutSectionImageUrl: "/people/crowd_1.jpg",
    },
    {
      aboutSectionBadgeText: "Our Services",
      aboutSectionTitle: "Expert Advice and Personalized Support",
      aboutSectionDescriptions: [
        "In addition to our extensive product selection, Raichur Hardware also offers a range of services to support our customers. Our experienced staff can provide expert advice and guidance on everything from tool selection and project planning to troubleshooting and repair.",
        "We also offer a variety of hands-on workshops and DIY classes to help our customers learn new skills and tackle their home improvement projects with confidence. Whether you're a seasoned DIYer or a first-time homeowner, we're here to support you every step of the way.",
      ],
      aboutSectionImageUrl: "/people/finolex_winning.jpg",
    },
    {
      aboutSectionBadgeText: "Contact Us",
      aboutSectionTitle: "Visit Us at Raichur Hardware",
      aboutSectionDescriptions: [
        "Old 12-10-49 , New 12-10-87 Near Chandramouleshwar circle, Lingasugur Road, Raichur Karnataka – 584101, India",
        "Phone: +91 94490 30030",
      ],
      aboutSectionImageUrl: "/store_entrance_1.png",
    },
  ],

  // faqs

  faqs: [
    {
      icon: icons?.money,
      question: "How long does it take to set up your product?",
      answer:
        "The setup process is designed to be quick and easy. Most customers can get up and running in just a few minutes. We provide detailed onboarding guides and our support team is available to help you every step of the way.",
    },
    {
      icon: icons?.time,
      question: "How long does it take to set up your product?",
      answer:
        "The setup process is designed to be quick and easy. Most customers can get up and running in just a few minutes. We provide detailed onboarding guides and our support team is available to help you every step of the way.",
    },
    {
      icon: icons?.questionmark,
      question: "How long does it take to set up your product?",
      answer:
        "The setup process is designed to be quick and easy. Most customers can get up and running in just a few minutes. We provide detailed onboarding guides and our support team is available to help you every step of the way.",
    },
    {
      icon: icons?.lock,
      question: "How long does it take to set up your product?",
      answer:
        "The setup process is designed to be quick and easy. Most customers can get up and running in just a few minutes. We provide detailed onboarding guides and our support team is available to help you every step of the way.",
    },
    {
      icon: icons?.plug,
      question: "How long does it take to set up your product?",
      answer:
        "The setup process is designed to be quick and easy. Most customers can get up and running in just a few minutes. We provide detailed onboarding guides and our support team is available to help you every step of the way.",
    },
  ],

  // contact page
  contactTitle: "Get in Touch",
  contactDescription:
    "Have a question or need assistance? Our team is here to help. Fill out the form or use the contact information below to reach out.",
  contactImageUrl: "/placeholder.svg",

  // what our customers say testimonials
  heroTestimonials: [
    {
      name: "Sarah Smith",
      message:
        "I absolutely love this product! It has transformed my daily routine and made my life so much easier.",
      image: "",
    },
    {
      name: "Alex Smith",
      message:
        "I was hesitant at first, but this product has exceeded all my expectations. It's a game-changer!",
      image: "",
    },
  ],

  // global dropdowns
  globalDropdowns: [
    {
      name: "Pipes and Fittings",
      dropdowns: [
        "Agricultural",
        "Plumbing and Sanitation",
        "GI Pipes",
        "HDPE Pipes and Fittings",
        "Solvents and Tapes",
      ],
    },
    {
      name: "Irrigation and Fittings",
      dropdowns: [
        "Drip Irrigation",
        "Sprinkle Irrigation",
        "Subsurface Drip",
        "PVC Ball Valves",
      ],
    },
    {
      name: "Bath Fittings",
      dropdowns: [
        "Faucets",
        "Shower",
        "Thermostatic Mixers",
        "Shower panel",
        "Water heaters",
        "Sanitary ware",
        "Wellness",
        "Shower enclosures",
        "Flushing systems",
        "Drains",
        "Bath Accessories",
      ],
    },
    {
      name: "Locks and Fittings",
      dropdowns: [
        "DIGITAL LOCKS",
        "MORTISE LOCKS",
        "RIM LOCKS",
        "CYLINDRICAL LOCKS",
        "PADLOCKS",
        "FURNITURE LOCKS",
        "HOME DÉCOR HANDLES",
        "DOOR CONTROLS",
        "DOOR FITTINGS",
        "WARDROBE FITTINGS",
        "BED FITTINGS",
        "FURNITURE FITTINGS",
        "KITCHEN FITTINGS",
      ],
    },
    {
      name: "Kitchenware",
      dropdowns: [
        "Luxury Kitchen Sinks",
        "Quartz Kitchen Sinks",
        "Stainless steel sinks",
      ],
    },
    {
      name: "Pumpsets",
      dropdowns: [
        "Open Well Pumps",
        "Submersible Pumps",
        "Monoblock Pumps",
        "Jet Pumps",
        "Sewage Pumps",
        "Electric Induction Motors",
      ],
    },
    {
      name: "Booster Sets and water tanks",
      dropdowns: [
        "CMBE And CMBE Twin",
        "CM Single Booster",
        "SCALA1 and SCALA2 booster",
        "Shower and other Boosters",
        "Overhead Water Tanks",
      ],
    },
    {
      name: "Valves",
      dropdowns: [
        "Ball Valve",
        "Gate Valve",
        "Sluice Valve",
        "Horizontal Check Valve",
        "Vertical Check Valve",
      ],
    },
    {
      name: "Manhole Covers",
      dropdowns: ["Cast Iron Manhole covers"],
    },
  ],

  // dropdowns
  dropdowns: [
    "Brands",
    "Pipes & Fittings", //    "Garden Pipes",
    "Valves",
    "Solvent & Clamps",
    "Chamber Covers",
    "Water Tanks",
    "Bath Fittings", // "Plastic Bath Fittings",
    "Sanitary Ware",
    "Kitchen Sinks",
    "Agricultural",
    "Plastic Bath Fittings",
    "Garden Pipes",
    "Agricultural Pipes",
  ],

  // featured logos
  //   https://www.finolexpipes.com/
  // 2. https://www.taropumps.com/
  // 3. https://www.jaquar.com/
  // 4. https://www.godrej.com/godrej-locking-solutions-and-systems
  // 5. https://watertecindia.com/
  // 6. https://carysil.com/
  // 7. https://www.se.com/in/en/ - SCHNEIDER
  // 8. https://www.vikingindia.com/
  // 9. https://www.esscobathware.com/
  // 10. https://www.aquatech.com/
  // 11. https://www.bergerpaints.com/
  // 12. https://www.finolexdrip.com/
  // 13. https://www.skf.com/in
  // 14. https://www.matrixvalves.in/
  // 15. https://www.grundfos.com/in
  // 16. https://deepakvalves.com/
  // 17. https://www.sonetindia.com/
  featuredLogos: [
    {
      logo: "/company_logos/Finolex Pipes.png",
      link: "https://www.finolexpipes.com/",
    },
    {
      logo: "/company_logos/Taro.png",
      link: "https://www.taropumps.com/",
    },
    {
      logo: "/company_logos/jaquar.png",
      link: "https://www.jaquar.com/",
    },
    {
      logo: "/company_logos/godrej Locks.png",
      link: "https://www.godrej.com/godrej-locking-solutions-and-systems",
    },
    {
      logo: "/company_logos/Watertec.png",
      link: "https://watertecindia.com/",
    },
    {
      logo: "/company_logos/Carysil.png",
      link: "https://carysil.com/",
    },
    {
      logo: "/company_logos/schneider.png",
      link: "https://www.se.com/in/en/",
    },
    {
      logo: "/company_logos/viking.png",
      link: "https://www.vikingindia.com/",
    },
    {
      logo: "/company_logos/essco.jpg",
      link: "https://www.esscobathware.com/",
    },
    {
      logo: "/company_logos/Aqua-tech.png",
      link: "https://www.aquatech.com/",
    },
    {
      logo: "/company_logos/Berger_Paints.png",
      link: "https://www.bergerpaints.com/",
    },
    {
      logo: "/company_logos/finolex plassion.png",
      link: "https://www.finolexdrip.com/",
    },
    {
      logo: "/company_logos/SKF BEARINGS.png",
      link: "https://www.skf.com/in",
    },
    {
      logo: "/company_logos/matrix ball valve.png",
      link: "https://www.matrixvalves.in/",
    },
    {
      logo: "/company_logos/grundfos.png",
      link: "https://www.grundfos.com/in",
    },
    {
      logo: "/company_logos/deepak.png",
      link: "https://deepakvalves.com/",
    },
    {
      logo: "/company_logos/sonet.png",
      link: "https://www.sonetindia.com/",
    },
  ],

  // brands
  brands: [
    "Finolex Pipes",
    "Taro Pumps",
    "Jaquar",
    "Godrej",
    "WaterTecIndia",
    "Carysil",
    "Schneider",
    "Viking",
    "Essco Bathware",
    "Aquatech",
    "Berger Paints",
    "Finolex Drip",
    "SKF",
    "Matrix Valves",
    "Grundfos",
    "Deepak Valves",
    "Sonet India",
    "Others",
  ],
};

export default data;
