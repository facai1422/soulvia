"use client";

import { Shield, Eye, Users, MessageCircle, Lock, Globe, Zap, Server } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const soulviaTimelineData = [
  {
    id: 1,
    title: "Concept",
    date: "Q1 2024",
    content: "Soulvia concept born from the need for truly anonymous communication. Research phase focusing on digital privacy and user safety.",
    category: "Planning",
    icon: Shield,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Architecture",
    date: "Q2 2024",
    content: "Design of zero-knowledge architecture with end-to-end encryption. Planning anonymous user system without personal data collection.",
    category: "Design",
    icon: Server,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Privacy Core",
    date: "Q3 2024",
    content: "Implementation of military-grade encryption and anonymous account creation. Core privacy features development.",
    category: "Development",
    icon: Lock,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Anonymous Chat",
    date: "Q4 2024",
    content: "Anonymous messaging system with burn-after-read functionality. Group chat features with privacy protection.",
    category: "Features",
    icon: MessageCircle,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Community",
    date: "Q1 2025",
    content: "Anonymous communities and confession spaces. Topic-based rooms for safe expression without judgment.",
    category: "Social",
    icon: Users,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Global Scale",
    date: "Q2 2025",
    content: "International expansion with multi-language support. Compliance with global privacy regulations (GDPR, etc.).",
    category: "Expansion",
    icon: Globe,
    relatedIds: [5, 7],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 7,
    title: "AI Privacy",
    date: "Q3 2025",
    content: "Advanced AI-powered anonymization and smart privacy features. Automated content protection and safety measures.",
    category: "Innovation",
    icon: Zap,
    relatedIds: [6, 8],
    status: "pending" as const,
    energy: 25,
  },
  {
    id: 8,
    title: "Digital Freedom",
    date: "Q4 2025",
    content: "Complete digital freedom platform. Integration with decentralized networks and blockchain-based privacy.",
    category: "Future",
    icon: Eye,
    relatedIds: [7],
    status: "pending" as const,
    energy: 10,
  },
];

export function SoulviaTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={soulviaTimelineData} />
    </>
  );
}

export default {
  SoulviaTimelineDemo,
};