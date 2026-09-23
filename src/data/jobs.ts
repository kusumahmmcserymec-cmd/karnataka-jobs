export type JobCategory = "Development" | "Design" | "Data" | "Marketing";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: JobCategory;
  posted: string;
  type: string;
}

export const CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Data",
  "Marketing",
] as const;
export type CategoryFilter = (typeof CATEGORIES)[number];

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Systems Engineer",
    company: "Infosys",
    location: "Bengaluru, Karnataka",
    salary: "₹4.5 – 6 LPA",
    category: "Development",
    posted: "2 days ago",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Java Full Stack Developer",
    company: "TCS",
    location: "Mysuru, Karnataka",
    salary: "₹5 – 7 LPA",
    category: "Development",
    posted: "1 day ago",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Wipro",
    location: "Bengaluru, Karnataka",
    salary: "₹5 – 8 LPA",
    category: "Design",
    posted: "3 days ago",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Accenture",
    location: "Bengaluru, Karnataka",
    salary: "₹6 – 9 LPA",
    category: "Data",
    posted: "4 days ago",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    company: "Tech Mahindra",
    location: "Hubballi, Karnataka",
    salary: "₹3.5 – 5 LPA",
    category: "Marketing",
    posted: "5 days ago",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Capgemini",
    location: "Mangaluru, Karnataka",
    salary: "₹4.5 – 7 LPA",
    category: "Development",
    posted: "6 days ago",
    type: "Full-time",
  },
  {
    id: 7,
    title: "Product Designer",
    company: "Flipkart",
    location: "Bengaluru, Karnataka",
    salary: "₹10 – 18 LPA",
    category: "Design",
    posted: "1 day ago",
    type: "Full-time",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Swiggy",
    location: "Bengaluru, Karnataka",
    salary: "₹12 – 20 LPA",
    category: "Data",
    posted: "2 days ago",
    type: "Full-time",
  },
  {
    id: 9,
    title: "Marketing Analyst",
    company: "Razorpay",
    location: "Bengaluru, Karnataka",
    salary: "₹5 – 8 LPA",
    category: "Marketing",
    posted: "3 days ago",
    type: "Full-time",
  },
  {
    id: 10,
    title: "Cloud Support Engineer",
    company: "Amazon",
    location: "Bengaluru, Karnataka",
    salary: "₹8 – 12 LPA",
    category: "Development",
    posted: "4 days ago",
    type: "Full-time",
  },
];
