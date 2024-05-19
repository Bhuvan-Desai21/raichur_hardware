import icons from "@/app/icons";

const data = {
  adminEmails: ["kudlu2004@gmail.com", "raichurhardware2024@gmail.com"],

  // logo
  logoUrl: "/logo.png",

  // name
  companyName: "Raichur Hardware",

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
      Most <span className="text-amber-950"> Trusted Hardware ✨ </span>{" "}
      Wholesale Store in <span className="text-amber-950">Raichur </span>
    </h1>
  ),
  heroDescription:
    " We have most of the products in the market. Check them out!",
  heroDescriptionSecondLineFunc: () => (
    <p className="text-lg my-6">
      Building trust, faith and having delivered services to{" "}
      <span className="underline underline-offset-4">more than 2 Lakh</span>{" "}
      customers and counting in Raichur and near{" "}
      <span className="underline underline-offset-4">since 1990</span>.
    </p>
  ),
  heroButtonText: "Shop Now",

  // about page
  aboutPageSections: [
    {
      aboutSectionBadgeText: "Raichur Hardware",
      aboutSectionTitle: "Your One-Stop Shop for Home Improvement",
      aboutSectionDescriptions: [
        "Raichur Hardware has been serving the local community for over 50 years, providing high-quality tools, supplies, and expert advice to help you tackle any home improvement project.",
      ],
      aboutSectionImageUrl: "/placeholder.svg",
    },
    {
      aboutSectionBadgeText: "Our Products",
      aboutSectionTitle:
        "Everything You Need for Your Home Improvement Projects",
      aboutSectionDescriptions: [
        "At Raichur Hardware, we offer a comprehensive selection of high-quality tools, hardware, and home improvement supplies to meet all your needs. From power tools and hand tools to gardening equipment, plumbing supplies, and electrical components, we have everything you need to tackle any project, big or small.",
        "Our knowledgeable staff is always on hand to provide expert advice and help you find the right products for your specific needs. Whether you're a seasoned DIYer or a first-time homeowner, we're here to support you every step of the way.",
      ],
      aboutSectionImageUrl: "/placeholder.svg",
    },
    {
      aboutSectionBadgeText: "Our Services",
      aboutSectionTitle: "Expert Advice and Personalized Support",
      aboutSectionDescriptions: [
        "In addition to our extensive product selection, Raichur Hardware also offers a range of services to support our customers. Our experienced staff can provide expert advice and guidance on everything from tool selection and project planning to troubleshooting and repair.",
        "We also offer a variety of hands-on workshops and DIY classes to help our customers learn new skills and tackle their home improvement projects with confidence. Whether you're a seasoned DIYer or a first-time homeowner, we're here to support you every step of the way.",
      ],
      aboutSectionImageUrl: "/placeholder.svg",
    },
    {
      aboutSectionBadgeText: "Contact Us",
      aboutSectionTitle: "Visit Us at Raichur Hardware",
      aboutSectionDescriptions: [
        "123 Main Street, Anytown USA",
        "Phone: (555) 555-5555",
        "Hours: Monday - Saturday, 8am - 8pm",
      ],
      aboutSectionImageUrl: "/placeholder.svg",
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
};

export default data;
