
export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  image?: string;
  coverGradient: string;
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
};

export const projects: Project[] = [

{
  slug: "rentneo",
  title: "RentNeo",
  category: "Full-Stack Equipment Rental Marketplace",

  summary:
    "A full-stack equipment rental marketplace connecting equipment owners with customers through secure bookings and online payments.",

  description:
    "RentNeo is a full-stack equipment rental marketplace that allows people to rent equipment instead of purchasing it. Equipment owners can list their construction, photography, vehicle, agricultural, electronics, and event equipment, while customers can discover available items, book rentals, and make payments online. The platform includes dedicated dashboards for customers, owners, and administrators, with listing approval, rental management, analytics, and secure payment processing.",

  image: "/projects/rentneo.png",

  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Better Auth",
    "MongoDB",
    "Express 5",
    "Stripe",
    "Zod",
    "JWT",
  ],

  features: [
    "Browse and search equipment with category, location, price, availability, and rental-type filters.",
    "Detailed equipment pages with descriptions, condition, owner information, rental terms, and reviews.",
    "Email/password and Google authentication using Better Auth.",
    "Three user roles: Customer, Owner, and Admin, each with dedicated dashboard functionality.",
    "Book equipment using pickup dates, return dates, and quantities with live price estimates.",
    "Secure online payments through Stripe Checkout.",
    "Customer dashboard with rental history, payment status, favorites, and reviews.",
    "Owner dashboard for equipment listings, rental requests, earnings, and analytics.",
    "Admin dashboard for listing approvals, user management, booking oversight, and platform analytics.",
    "Equipment listing image uploads with an admin approval workflow.",
    "Responsive interface with light and dark themes, notifications, and loading states.",
  ],

  challenges: [
    "Implementing role-based authorization for customers, owners, and administrators.",
    "Maintaining secure authentication between the Next.js client and separate Express API using JWT verification.",
    "Calculating rental prices on the server rather than trusting values submitted by the browser.",
    "Managing equipment availability across overlapping bookings and temporary unpaid reservations.",
    "Implementing reliable Stripe webhooks with signature verification and idempotency.",
    "Preventing unauthorized access to owner and administrator operations.",
  ],

  futureImprovements: [
    "Introduce real-time equipment availability updates.",
    "Add email and SMS notifications for booking confirmations and rental status changes.",
    "Improve equipment discovery with interactive map-based location search.",
    "Expand automated integration and end-to-end testing for booking and payment workflows.",
  ],

  coverGradient:
    "linear-gradient(135deg, #264A70, #172D48, #0B1220)",

  liveUrl: "https://rentneo-client.vercel.app/",

  githubUrl: "https://github.com/fahim0057/rentneo-client",
},

  {
    slug: "arc-en-ciel",
    title: "Arc-en-ciel",
    category: "Full-Stack Web Application",
    role: "Independent Developer",
    image: "/projects/arc-en-ciel.PNG",

    summary:
      "A community service platform where people discover, create, and join local social events.",

    description:
      "Arc-en-ciel is a community service platform built to bring people together through meaningful local activities. Users can discover upcoming events such as winter clothes drives, neighborhood cleanups, and tree plantations. Authenticated users can create events, manage their own events, join community activities, and update their profiles. The application uses a Next.js client and a separate Express API server.",

    technologies: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Zod",
    ],

    features: [
      "Browse upcoming community events, automatically excluding past events.",
      "Search events by title or location and filter by event type, with shareable URL-based filters.",
      "Create events with form validation, date restrictions, and live image previews.",
      "Join events with authentication and duplicate-join prevention.",
      "Email/password and Google authentication using Better Auth.",
      "Server-protected pages for creating, managing, and viewing joined events.",
      "Edit or delete personal events with server-side ownership verification.",
      "View joined events divided into upcoming and past activities.",
      "Update profile information and profile photos.",
      "Responsive layouts, light and dark themes, skeleton loaders, and toast notifications.",
    ],

    challenges: [
      "Maintaining consistent event-date validation across the date picker, client form, and Express server.",
      "Implementing secure communication between the Next.js client and Express API using short-lived JWTs and public-key verification.",
      "Enforcing event ownership and preventing users from modifying other people's events.",
      "Managing authentication redirects and protected pages without unexpected login redirects after refreshing.",
      "Keeping search and filtering state synchronized with URL parameters.",
    ],

    futureImprovements: [
      "Introduce event reminders and notification functionality.",
      "Add more advanced event discovery using location-based filtering.",
      "Provide event organizer analytics and participation statistics.",
      "Expand automated testing for authentication and event-management workflows.",
    ],

    coverGradient:
      "linear-gradient(135deg, #253D63, #101A2B, #0B1220)",

    liveUrl: "https://arc-en-ciel-swart.vercel.app",

    githubUrl: "https://github.com/fahim0057/Arc-en-ciel",
  },

  {
    slug: "bazar-dor",
    title: "BazarDor",
    category: "Full-Stack Web Application",
    role: "Independent Developer",
    image: "/projects/bazar-dor.PNG",
    summary:
      "A responsive platform displaying daily essential-goods prices across Bangladesh's markets.",

    description:
      "BazarDor (বাজার দর) helps people explore the latest available prices of everyday essentials such as rice, lentils, oil, vegetables, fish, meat, eggs, dairy products, and spices. It presents prices using Bangla numerals, highlights daily price changes, and provides market-by-market comparisons. Visitors can browse general prices publicly, while detailed market price information requires authentication.",

    technologies: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "DaisyUI 5",
      "Better Auth",
      "MongoDB Atlas",
      "REST API",
      "react-hot-toast",
      "Vercel",
    ],

    features: [
      "Infinite scrolling live price ticker displaying products, units, prices, and daily changes.",
      "Highlights the top six products with rising prices and the top six with falling prices.",
      "Browse products across eight essential-goods categories.",
      "Sort products numerically by default, lowest price, or highest price.",
      "Email/password authentication with Google and GitHub social login.",
      "Protected product details showing minimum, maximum, and average prices.",
      "Compare prices across 12 bazaars in six divisions of Bangladesh.",
      "User profile page with display-name updates.",
      "Responsive mobile, tablet, and desktop interfaces.",
      "Bangla numerals and localized date formatting, skeleton loaders, and friendly empty states.",
    ],

    challenges: [
      "Handling Bangla numerals while maintaining correct numerical sorting and price comparisons.",
      "Displaying consistent price summaries and market-by-market comparisons.",
      "Implementing authentication-based access to detailed product prices while keeping general browsing public.",
      "Building an infinitely scrolling price ticker that pauses on hover.",
      "Maintaining a polished user experience across responsive layouts and data-loading states.",
    ],

    futureImprovements: [
      "Introduce historical price charts to show changes over time.",
      "Add price alerts for products when prices rise or fall.",
      "Provide more location-specific market discovery.",
      "Allow users to save favorite products and track their prices.",
    ],

    coverGradient:
      "linear-gradient(135deg, #305447, #142C2B, #0B1220)",

    liveUrl: "https://bazar-dor-evjo.vercel.app/",

    githubUrl: "https://github.com/fahim0057/Bazar-Dor",

  },

  {
    slug: "dev-stack",
    title: "Dev Stack Builder",
    category: "Frontend Web Application",
    role: "Independent Developer",
    image: "/projects/dev-stack.PNG",
    summary:
      "An interactive application that helps developers explore technologies and build personalized development stacks.",

    description:
      "Dev Stack Builder is a responsive React application that allows users to explore web development technologies and create their own personalized development stacks. It organizes technologies across frontend, backend, databases, programming languages, styling, DevOps, and development tools, helping users explore available options and assemble a stack according to their interests.",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Toastify",
      "JSON",
    ],

    features: [
      "Explore technologies across frontend, backend, databases, languages, styling, DevOps, and tools.",
      "View technology descriptions, ratings, badges, and difficulty levels.",
      "Add individual technologies to a personalized Your Stack collection.",
      "Remove selected technologies individually.",
      "Clear the entire personalized stack.",
      "Responsive layouts for desktop, tablet, and mobile devices.",
      "Toast notifications for user feedback.",
      "Structured JSON data for technology information.",
    ],

    challenges: [
      "Organizing a wide range of technologies into clear and discoverable categories.",
      "Managing the selected technology list when users add and remove items.",
      "Keeping the stack-building interface responsive across different screen sizes.",
      "Presenting technology descriptions and ratings in a consistent interface.",
    ],

    futureImprovements: [
      "Add local storage so personalized stacks persist after page refreshes.",
      "Allow users to export and share their development stacks.",
      "Introduce technology search and advanced category filtering.",
      "Add comparison tools to help users evaluate alternative technologies.",
    ],

    coverGradient:
      "linear-gradient(135deg, #4A3A75, #252341, #0B1220)",

    liveUrl: "https://animated-raindrop-092a52.netlify.app/",

    githubUrl: "https://github.com/fahim0057/DevStack.git",
  },
];