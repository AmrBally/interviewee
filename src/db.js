import site from "./public/site reliability engineer.jpeg";
import backEnd from "./public/backend.jpg";
import frontEnd from "./public/frontend.png";
import softwareEng from "./public/software-engineer.jpg";
import senior from "./public/senior product manager.jpeg";
import machine from "./public/machine learning engineer.jpeg";
import real from "./public/real estate manager.jpeg";
import contentStrategist from "./public/content strategist.jpeg";

export const landingjobs = [
  {
    id: 1,
    title: "Front-End Devoloper",
    img: frontEnd,
    desc: "They are responsible for creating user-friendly web pages using markup languages like HTML.",
  },
  {
    id: 2,
    title: "Back-End Devoloper",
    img: backEnd,
    desc: "They are responsible for testing, and debugging the entire back end of an application or system.",
  },
  {
    id: 3,
    title: "Software Engineering",
    img: softwareEng,
    desc: "Software engineers use their knowledge of computer science.",
  },
  {
    id: 4,
    title: "senior product manager",
    img: senior,
    desc: "They work closely with cross-functional teams, including engineering, design, marketing",
  },
];
export const jobsCategoties = [
  {
    id: 1,
    title: "Front-End Devoloper",
    category: "Programming",
    img: frontEnd,
    desc: "They are responsible for creating user-friendly web pages using markup languages like HTML.",
  },
  {
    id: 2,
    title: "Back-End Devoloper",
    category: "Programming",
    img: backEnd,
    desc: "They are responsible for testing, and debugging the entire back end of an application or system.",
  },
  {
    id: 3,
    title: "Software Engineering",
    category: "Programming",
    img: softwareEng,
    desc: "Software engineers use their knowledge of computer science.",
  },
  {
    id: 4,
    title: "senior product manager",
    category: "Sales",
    img: senior,
    desc: "They work closely with cross-functional teams, including engineering, design, marketing",
  },
  {
    id: 5,
    title: "site reliability engineer",
    category: "Engineering",
    img: site,
    desc: "They are responsible for improving the reliability, and availability of software systems1.",
  },
  {
    id: 6,
    title: "machine learning engineer",
    category: "Engineering",
    img: machine,
    desc: "professional who specializes in designing and developing machine learning systems1.",
  },
  {
    id: 7,
    title: "real estate manager",
    category: "Sales",
    img: real,
    desc: " They are responsible for preparing financial statements, supervising maintenance workers",
  },
  {
    id: 8,
    title: "content strategist",
    category: "Marketing",
    img: contentStrategist,
    desc: "They conduct market research to learn about current content trends and target audiences.",
  },
];

export const pricingList = [
  {
    id: 1,
    plan: "STARTER",
    price: "$5/mo",
    populer: "",
    service: [
      "Automated Reporting",
      "10 Interview",
      "Faster Processing",
      "cutomizations",
    ],
    info: "Literally you probably haven't heard of them jean shorts",
    button: "Current plan",
    color: "#449344",
    btnColor: "success",
  },
  {
    id: 2,
    plan: "BASIC",
    price: "$15/mo",
    populer: "POPULAR",
    service: [
      "Everything in Starter",
      "100 Interview",
      "Progress Reports",
      "Premium Support",
    ],
    info: "Literally you probably haven't heard of them jean shorts",
    button: "Switch to Basic",
    color: "#c99d4d",
    btnColor: "warning",
  },
  {
    id: 3,
    plan: "PRO",
    price: "$25/mo",
    populer: "",
    service: [
      "Everyting in Basic",
      "Unlimited Interview",
      "Advanced Analytics",
      "Company Evalutions",
    ],
    info: "Literally you probably haven't heard of them jean shorts",
    button: "Switch to Pro",
    color: "white",
    backGroundColor: "#3c1f1f",
    btnColor: "danger",
  },
];
