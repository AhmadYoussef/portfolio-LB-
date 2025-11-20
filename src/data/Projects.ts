import {Category} from "./Variables/Categories.ts";
import {Tool} from "./Variables/Tools.ts";
import {Material} from "./Variables/Material.ts";

export interface Project {
  slug: string;
  title: string;
  category: Category[];
  summary: string;
  location: string;
  year: number;
  size?: string;
  materials?: Material[];
  tools?: Tool[];
  images?: string[];
}

export const projects = [
  {
    slug: "lake-house-renovation",
    title: "Lake House Renovation",
    category: [Category.Residential],
    summary:
      "Transformation of a 1970s lake house into a modern open-space residence with improved energy efficiency.",
    location: "Tegernsee, Germany",
    year: 2023,
    size: "180 m²",
    materials: [
      Material.OakWood,
      Material.GlassFacade,
      Material.NaturalStone,
    ],
    tools: [Tool.ArchiCAD, Tool.Twinmotion, Tool.Photoshop],
  },

  {
    slug: "minimalist-attic",
    title: "Minimalist Attic Apartment",
    category: [Category.Residential, Category.Interior],
    summary:
      "Redesign of a compact attic apartment focused on functional built-ins and natural light.",
    location: "Munich, Germany",
    year: 2022,
    size: "60 m²",
    materials: [
      Material.WhiteOak,
      Material.BlackSteel,
      Material.AcousticPanel,
    ],
    tools: [Tool.SketchUp, Tool.VRay, Tool.InDesign],
  },

  {
    slug: "nova-office-space",
    title: "NOVA Office Space",
    category: [Category.Residential, Category.Commercial],
    summary:
      "Flexible modular office space with acoustic zoning and natural light strategy.",
    location: "Berlin, Germany",
    year: 2021,
    size: "420 m²",
    materials: [
      Material.Concrete,
      Material.AcousticFabric,
      Material.GlassPartition,
    ],
    tools: [Tool.Revit, Tool.Enscape, Tool.Illustrator],
  },

  {
    slug: "cultural-center-concept",
    title: "Community Cultural Center",
    category: [Category.Residential, Category.Competition],
    summary:
      "Competition concept focused on sustainability, public accessibility, and social spaces.",
    location: "Hamburg, Germany",
    year: 2024,
    materials: [Material.RecycledBrick, Material.Timber, Material.GreenRoof],
    tools: [Tool.ArchiCAD, Tool.Twinmotion, Tool.Photoshop],
  },

  {
    slug: "sketchbook-vol-1",
    title: "Sketchbook Studies — Vol 01",
    category: [Category.Residential, Category.Drawing],
    summary:
      "Hand-drawn studies exploring light, composition, and expressive line work.",
    location: "Personal Work",
    year: 2023,
    tools: [Tool.Pencil, Tool.Fineliner, Tool.Procreate],
  },

  {
    slug: "architecture-freehand-01",
    title: "Architectural Drawings — Freehand",
    category: [Category.Drawing],
    summary:
      "Freehand façade and perspective sketches inspired by traditional European architecture.",
    location: "Studio Work",
    year: 2022,
    tools: [Tool.InkPen, Tool.Graphite, Tool.Procreate],
  },
];
