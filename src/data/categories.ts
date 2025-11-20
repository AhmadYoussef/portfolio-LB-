import {Category} from "./Variables/Categories.ts";
import ResidentialImg from "../assets/images/category/residential.png"
import InteriorImg from "../assets/images/category/interior.png"
import CompetitionImg from "../assets/images/category/competition.png"
import CommercialImg from "../assets/images/category/commercial.png"
import DrawingImg from "../assets/images/category/drawing.png"
import AllCatImg from "../assets/images/category/all.png"
export interface CategoryDefinition {
  slug: Category;       // URL part, e.g. "frontend"
  image: any;       // URL part, e.g. "frontend"
  label: string;      // Display name, e.g. "Frontend"
  description?: string;
}

export const categories: CategoryDefinition[] = [
  {
    slug: Category.Residential,
    label: "Residential Architecture",
    description: "Private homes, renovations, and housing concepts.",
    image: ResidentialImg,
  },
  {
    slug: Category.Interior,
    label: "Interior Design",
    description: "Interior layouts, material concepts, and space planning.",
    image: InteriorImg,
  },
  {
    slug: Category.Commercial,
    label: "Commercial Projects",
    description: "Office spaces, retail stores, and public interiors.",
    image: CommercialImg

  },
  {
    slug: Category.Competition,
    label: "Competition Entries",
    description: "Concept proposals for national and international competitions.",
    image: CompetitionImg
  },
  {
    slug: Category.Drawing,
    label: "Drawing & Sketches",
    description: "Hand sketches, visual studies, character drawings, and artistic works.",
    image: DrawingImg
  },
  {
    slug: Category.All,
    label: "All",
    description: "Hand sketches, visual studies, character drawings, and artistic works.",
    image: AllCatImg
  },
];
