"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

// --- MOCK DATA ---
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Midnight Sessions",
    artist: "The Velvet Underground",
    image: "/images/impression-01.jpeg",
    tags: ["Black", "Gatefold", "12 Inch"],
  },
  {
    id: 2,
    title: "Sonic Waves",
    artist: "Future Islands",
    image: "/images/impression-02.jpeg",
    tags: ["Clear", "Single Sleeve", "12 Inch"],
  },
  {
    id: 3,
    title: "Analog Dreams",
    artist: "Synth City",
    image: "/images/impression-03.jpeg",
    tags: ["Splatter", "Gatefold", "12 Inch"],
  },
  {
    id: 4,
    title: "Urban Echoes",
    artist: "Metro Boomin",
    image: "/images/impression-04.jpeg",
    tags: ["Black", "Single Sleeve", "10 Inch"],
  },
  {
    id: 5,
    title: "Classic Hits",
    artist: "Various Artists",
    image: "/images/impression-05.jpeg",
    tags: ["Marbled", "Box Set", "12 Inch"],
  },
  {
    id: 6,
    title: "Acoustic Live",
    artist: "John Mayer",
    image: "/images/impression-06.jpeg",
    tags: ["Black", "Gatefold", "12 Inch"],
  },
  {
    id: 7,
    title: "Deep House Grooves",
    artist: "DJ Snake",
    image: "/images/process-01 L2.jpeg",
    tags: ["Splatter", "Single Sleeve", "12 Inch"],
  },
  {
    id: 8,
    title: "Indie Rock Anthems",
    artist: "Arctic Monkeys",
    image: "/images/process-02 L.jpeg",
    tags: ["Clear", "Gatefold", "7 Inch"],
  },
];

const ALL_TAGS = Array.from(
  new Set(MOCK_PROJECTS.flatMap((project) => project.tags))
).sort();

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { language } = useLanguage();

  const dict = {
    en: {
      allBtn: "All",
      clearBtn: "Clear Filters",
      noProjects: "No projects match the selected filters."
    },
    ko: {
      allBtn: "전체",
      clearBtn: "필터 초기화",
      noProjects: "선택하신 필터 조건에 일치하는 프로젝트가 없습니다."
    }
  };
  const t = dict[language];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProjects = MOCK_PROJECTS.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag))
  );

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] flex flex-col">
      <div className="px-7 md:px-10 pt-8 pb-4">
        <Header />
      </div>

      <div className="flex-1 px-7 md:px-10 py-12 md:py-20 max-w-[1600px] w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] uppercase mb-12">
          Projects
        </h1>

        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar">
            <button
              onClick={() => setSelectedTags([])}
              className={`whitespace-nowrap px-5 py-2 text-[11px] md:text-xs uppercase tracking-[0.2em] transition-all border rounded-full
                ${
                  selectedTags.length === 0
                    ? "bg-black text-[#f5f3ee] border-black"
                    : "bg-transparent text-black border-black/20 hover:border-black"
                }
              `}
            >
              {t.allBtn}
            </button>
            {ALL_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`whitespace-nowrap px-5 py-2 text-[11px] md:text-xs uppercase tracking-[0.2em] transition-all border rounded-full
                    ${
                      isSelected
                        ? "bg-black text-[#f5f3ee] border-black"
                        : "bg-transparent text-black border-black/20 hover:border-black"
                    }
                  `}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="overflow-hidden bg-black/5 aspect-square mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/60 mb-3">{project.artist}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] text-black/40 border border-black/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm md:text-base text-black/50 break-keep">
              {t.noProjects}
            </p>
            <button
              onClick={() => setSelectedTags([])}
              className="mt-6 border border-black/20 px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.22em] hover:bg-black/20 transition"
            >
              {t.clearBtn}
            </button>
          </div>
        )}
      </div>

      <footer className="px-7 md:px-10 py-8 border-t border-black/10 mt-auto">
        <div className="flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/28">
          <span>CHAMPION PRESSING</span>
          <span>© 2026. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}