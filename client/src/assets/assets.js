import logo from "./logo.svg";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

import {
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";

/* ---------- STATIC ASSETS ---------- */
export const assets = {
  logo,
  gradientBackground,
  user_group,
  star_icon,
  star_dull_icon,
  profile_img_1,
  arrow_icon,
};

/* ---------- AI TOOLS DATA ---------- */
export const AiToolsData = [
  {
    title: "AI Article Writer",
    description: "Generate high-quality, engaging articles using AI.",
    icon: SquarePen,
    bg: { from: "#3588F2", to: "#0BB0D7" },
    path: "/ai/write-article",
  },
  {
    title: "Blog Title Generator",
    description: "Generate catchy blog titles instantly.",
    icon: Hash,
    bg: { from: "#B153EA", to: "#E549A3" },
    path: "/ai/blog-titles",
  },
  {
    title: "AI Image Generation",
    description: "Create stunning AI-generated images.",
    icon: Image,
    bg: { from: "#20C363", to: "#11B97E" },
    path: "/ai/generate-images",
  },
  {
    title: "Background Removal",
    description: "Remove image backgrounds automatically.",
    icon: Eraser,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/ai/remove-background",
  },
  {
    title: "Object Removal",
    description: "Remove unwanted objects from images.",
    icon: Scissors,
    bg: { from: "#5C6AF1", to: "#427DF5" },
    path: "/ai/remove-object",
  },
  {
    title: "Resume Reviewer",
    description: "AI-powered resume review tool.",
    icon: FileText,
    bg: { from: "#12B7AC", to: "#08B6CE" },
    path: "/ai/review-resume",
  },
];

/* ---------- DASHBOARD DUMMY DATA ---------- */
export const dummyCreationData = [
  {
    id: 1,
    user_id: "demo_user",
    title: "AI Generated Blog Title",
    type: "blog-title",
    content: "10 AI Trends You Should Know in 2025",
    created_at: "2025-01-01",
  },
  {
    id: 2,
    user_id: "demo_user",
    title: "AI Article",
    type: "article",
    content: "Artificial Intelligence is transforming the world...",
    created_at: "2025-01-02",
  },
  {
    id: 3,
    user_id: "demo_user",
    title: "AI Image",
    type: "image",
    content: ai_gen_img_1,
    created_at: "2025-01-03",
  },
  {
    id: 4,
    user_id: "demo_user",
    title: "Background Removed Image",
    type: "image",
    content: ai_gen_img_2,
    created_at: "2025-01-04",
  },
  {
    id: 5,
    user_id: "demo_user",
    title: "Object Removed Image",
    type: "image",
    content: ai_gen_img_3,
    created_at: "2025-01-05",
  },
];

/* ---------- COMMUNITY DUMMY DATA (✅ FIX) ---------- */
export const dummyPublishedCreationData = [
  {
    id: 1,
    content: ai_gen_img_1,
    prompt: "AI generated futuristic city",
    likes: ["user1", "user2"],
  },
  {
    id: 2,
    content: ai_gen_img_2,
    prompt: "Background removed portrait",
    likes: [],
  },
  {
    id: 3,
    content: ai_gen_img_3,
    prompt: "Object removed from image",
    likes: ["user1"],
  },
];
