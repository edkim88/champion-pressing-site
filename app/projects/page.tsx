"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

// --- MOCK DATA ---
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "232 Compilation",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_1.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  },
  {
    id: 2,
    title: "Color Papaer Hotel",
    artist: "87 Dance",
    image: "/images/projects/project_v2_2.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  },
  {
    id: 3,
    title: "A-List Traxx Vol.3",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_3.jpeg",
    tags: ["Disco Sleeve", "Black Vinyl"]
  },
  {
    id: 4,
    title: "Le Musk",
    artist: "A.R Rahman",
    image: "/images/projects/project_v2_4.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 5,
    title: "Le Musk",
    artist: "A.R Rahman",
    image: "/images/projects/project_v2_5.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 6,
    title: "The Essential",
    artist: "AOMG",
    image: "/images/projects/project_v2_6.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 7,
    title: "Glass House 10th",
    artist: "Antidote Project",
    image: "/images/projects/project_v2_7.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 8,
    title: "Free the Beast",
    artist: "B-Free",
    image: "/images/projects/project_v2_8.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 9,
    title: "BRLLNT IS BACK",
    artist: "BRLLNT",
    image: "/images/projects/project_v2_9.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 10,
    title: "East Shore",
    artist: "Bronze",
    image: "/images/projects/project_v2_10.jpeg",
    tags: ["Gate Fold", "Colored Vinyl", "Black Vinyl"]
  },
  {
    id: 11,
    title: "Free Verse",
    artist: "CADEJO",
    image: "/images/projects/project_v2_11.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 12,
    title: "ION",
    artist: "CIFIAK",
    image: "/images/projects/project_v2_12.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 13,
    title: "Pickpocket EP",
    artist: "ChiChi",
    image: "/images/projects/project_v2_13.jpeg",
    tags: ["Black Vinyl", "Disco Sleeve"]
  },
  {
    id: 14,
    title: "Diff",
    artist: "Coogie",
    image: "/images/projects/project_v2_14.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 15,
    title: "Can I Love",
    artist: "Cosmic Boy",
    image: "/images/projects/project_v2_15.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 16,
    title: "Can I Not",
    artist: "Cosmic Boy",
    image: "/images/projects/project_v2_16.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 17,
    title: "DJ MAX Compilation",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_17.jpeg",
    tags: ["Gate Fold", "Colored Vinyl"]
  },
  {
    id: 18,
    title: "Lovers 20th Tribute",
    artist: "DJ Soulscape",
    image: "/images/projects/project_v2_18.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 19,
    title: "Reaching Out",
    artist: "DJ Spray",
    image: "/images/projects/project_v2_19.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 20,
    title: "Soundbwoy 2",
    artist: "DJ co.kr",
    image: "/images/projects/project_v2_20.jpeg",
    tags: ["Disco Sleeve", "Black Vinyl"]
  },
  {
    id: 21,
    title: "Deux X Vans",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_21.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 22,
    title: "objects",
    artist: "Fandisk",
    image: "/images/projects/project_v2_22.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 23,
    title: "Nomarhythm Textile",
    artist: "Fujiwara Hiroshi",
    image: "/images/projects/project_v2_23.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 24,
    title: "Memories..",
    artist: "Homeboy",
    image: "/images/projects/project_v2_24.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 25,
    title: "미소예찬",
    artist: "Hookuo, JUE",
    image: "/images/projects/project_v2_25.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 26,
    title: "Readmission",
    artist: "Huckleberry P",
    image: "/images/projects/project_v2_26.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 27,
    title: "The Adam",
    artist: "ILHOON",
    image: "/images/projects/project_v2_27.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 28,
    title: "Album About You",
    artist: "JAEHA",
    image: "/images/projects/project_v2_28.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 29,
    title: "Lit",
    artist: "JUSTHIS",
    image: "/images/projects/project_v2_29.jpeg",
    tags: ["Gate Fold", "Colored Vinyl"]
  },
  {
    id: 30,
    title: "Podo",
    artist: "Jambino",
    image: "/images/projects/project_v2_30.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 31,
    title: "Sax And The City",
    artist: "Jason Lee",
    image: "/images/projects/project_v2_31.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 32,
    title: "All You Wanted",
    artist: "Jay Park",
    image: "/images/projects/project_v2_32.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 33,
    title: "Beutiful",
    artist: "Jongho",
    image: "/images/projects/project_v2_33.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 34,
    title: "Inside Out",
    artist: "Kardi",
    image: "/images/projects/project_v2_34.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 35,
    title: "Kasina Playlist 2024",
    artist: "Kasina",
    image: "/images/projects/project_v2_35.jpeg",
    tags: ["Disco Sleeve", "Black Vinyl"]
  },
  {
    id: 36,
    title: "Beige",
    artist: "Kid Milli",
    image: "/images/projects/project_v2_36.jpeg",
    tags: ["Gate Fold", "Colored Vinyl"]
  },
  {
    id: 37,
    title: "It's on me",
    artist: "L-Like",
    image: "/images/projects/project_v2_37.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 38,
    title: "Phil",
    artist: "L-Like",
    image: "/images/projects/project_v2_38.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 39,
    title: "AAA",
    artist: "Lil Moshpit",
    image: "/images/projects/project_v2_39.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 40,
    title: "K-Flip",
    artist: "Lil Moshpit, Sik-K",
    image: "/images/projects/project_v2_40.jpeg",
    tags: ["Special", "Single Pocket", "Colored Vinyl"]
  },
  {
    id: 41,
    title: "Mindspray Vs DJ Cokr",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_41.jpeg",
    tags: ["Disco Sleeve", "Black Vinyl"]
  },
  {
    id: 42,
    title: "TRIPONOEL",
    artist: "Noel",
    image: "/images/projects/project_v2_42.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 43,
    title: "Luv-Fi",
    artist: "Oceanfromtheblue",
    image: "/images/projects/project_v2_43.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  },
  {
    id: 44,
    title: "탑승수속",
    artist: "Okasian",
    image: "/images/projects/project_v2_44.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 45,
    title: "Poem V",
    artist: "Owen",
    image: "/images/projects/project_v2_45.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 46,
    title: "Poem V",
    artist: "Owen",
    image: "/images/projects/project_v2_46.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 47,
    title: "P.O.E",
    artist: "Owen Ovadoz",
    image: "/images/projects/project_v2_47.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 48,
    title: "Narcissism",
    artist: "Oxymosoon",
    image: "/images/projects/project_v2_48.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 49,
    title: "For The Poser",
    artist: "Oygli",
    image: "/images/projects/project_v2_49.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 50,
    title: "Dirt",
    artist: "Paloalto",
    image: "/images/projects/project_v2_50.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 51,
    title: "Nagul Nagulstan",
    artist: "Parvaaz",
    image: "/images/projects/project_v2_51.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 52,
    title: "Nagul. Na Gulistan",
    artist: "Parvaaz",
    image: "/images/projects/project_v2_52.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 53,
    title: "Pop Off",
    artist: "Ph-1",
    image: "/images/projects/project_v2_53.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 54,
    title: "Bury",
    artist: "Punchnello",
    image: "/images/projects/project_v2_54.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 55,
    title: "흰수염고래 알판",
    artist: "QWER",
    image: "/images/projects/project_v2_55.jpeg",
    tags: ["Box Set", "Colored Vinyl", "Special"]
  },
  {
    id: 56,
    title: "흰수염고래",
    artist: "Qwer",
    image: "/images/projects/project_v2_56.jpeg",
    tags: ["Box Set", "Colored Vinyl", "Special"]
  },
  {
    id: 57,
    title: "SOSEOL -POV",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_57.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 58,
    title: "Miniseries 2",
    artist: "SUMIN, SLOM",
    image: "/images/projects/project_v2_58.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 59,
    title: "Anthology",
    artist: "Sam Kim",
    image: "/images/projects/project_v2_59.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 60,
    title: "BALC",
    artist: "Shortfinger",
    image: "/images/projects/project_v2_60.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 61,
    title: "Weather Report",
    artist: "Slom",
    image: "/images/projects/project_v2_61.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 62,
    title: "Solabeam Records Compilation",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_62.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 63,
    title: "Original Soundtrack 2",
    artist: "Stellar Blade",
    image: "/images/projects/project_v2_63.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 64,
    title: "Original Soundtrack",
    artist: "Stellar Blade",
    image: "/images/projects/project_v2_64.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 65,
    title: "예언",
    artist: "Studio360",
    image: "/images/projects/project_v2_65.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 66,
    title: "Sichimi",
    artist: "Sumin",
    image: "/images/projects/project_v2_66.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 67,
    title: "Inevitable",
    artist: "Superjunior D&E",
    image: "/images/projects/project_v2_67.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 68,
    title: "TOTO",
    artist: "Toil",
    image: "/images/projects/project_v2_68.jpeg",
    tags: ["Colored Vinyl", "Single Pocket"]
  },
  {
    id: 69,
    title: "Tree Pose",
    artist: "Wack",
    image: "/images/projects/project_v2_69.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 70,
    title: "Comma",
    artist: "Woo",
    image: "/images/projects/project_v2_70.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 71,
    title: "Modern Funk & Edits",
    artist: "XL Middleton",
    image: "/images/projects/project_v2_71.jpeg",
    tags: ["Disco Sleeve", "Black Vinyl"]
  },
  {
    id: 72,
    title: "Moonshot",
    artist: "XXOK",
    image: "/images/projects/project_v2_72.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 73,
    title: "I Just Can't Control My Feet!",
    artist: "Xin Seha",
    image: "/images/projects/project_v2_73.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 74,
    title: "Lupeternal",
    artist: "Yoon Seok Cheol",
    image: "/images/projects/project_v2_74.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 75,
    title: "살아숨셔4",
    artist: "Yumdda",
    image: "/images/projects/project_v2_75.jpeg",
    tags: ["Special", "Single Pocket", "Colored Vinyl"]
  },
  {
    id: 76,
    title: "oceanfromtheblue",
    artist: "oceanfromtheblue",
    image: "/images/projects/project_v2_76.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 77,
    title: "Object",
    artist: "구원찬",
    image: "/images/projects/project_v2_77.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 78,
    title: "Anthology",
    artist: "권진아",
    image: "/images/projects/project_v2_78.jpeg",
    tags: ["Colored Vinyl", "Single Pocket"]
  },
  {
    id: 79,
    title: "Soul Pop City",
    artist: "나얼",
    image: "/images/projects/project_v2_79.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  },
  {
    id: 80,
    title: "Blessed",
    artist: "문수진",
    image: "/images/projects/project_v2_80.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  },
  {
    id: 81,
    title: "빛나는 스트라이크",
    artist: "신인류",
    image: "/images/projects/project_v2_81.jpeg",
    tags: ["Colored Vinyl", "Gate Fold"]
  },
  {
    id: 82,
    title: "빛나는스트라이크",
    artist: "신인류",
    image: "/images/projects/project_v2_82.jpeg",
    tags: ["Colored Vinyl", "Gate Fold"]
  },
  {
    id: 83,
    title: "안녕 광석이형 Compilation",
    artist: "Champion Pressing Archive",
    image: "/images/projects/project_v2_83.jpeg",
    tags: ["Single Pocket", "Colored Vinyl"]
  },
  {
    id: 84,
    title: "나의 여름은 아직 안 끝났어",
    artist: "윤석철 트리오",
    image: "/images/projects/project_v2_84.jpeg",
    tags: ["Gate Fold", "Black Vinyl"]
  },
  {
    id: 85,
    title: "Original Soundtrack",
    artist: "이 별에 필요한",
    image: "/images/projects/project_v2_85.jpeg",
    tags: ["Single Pocket", "Black Vinyl"]
  },
  {
    id: 86,
    title: "4 only",
    artist: "이하이",
    image: "/images/projects/project_v2_86.jpeg",
    tags: ["Colored Vinyl", "Single Pocket"]
  },
  {
    id: 87,
    title: "FRR",
    artist: "죠지",
    image: "/images/projects/project_v2_87.jpeg",
    tags: ["Black Vinyl", "Single Pocket"]
  }
];

const COLOR_TAGS = ["Black Vinyl", "Colored Vinyl", "Special"];
const JACKET_TAGS = [
  "Single Pocket",
  "Gate Fold",
  "Disco Sleeve",
  "Box Set"
];

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [shuffledProjects, setShuffledProjects] = useState(MOCK_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<typeof MOCK_PROJECTS[0] | null>(null);
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
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }

      let nextTags = [...prev];
      if (JACKET_TAGS.includes(tag)) {
        nextTags = nextTags.filter((t) => !JACKET_TAGS.includes(t));
      } else if (COLOR_TAGS.includes(tag)) {
        nextTags = nextTags.filter((t) => !COLOR_TAGS.includes(t));
      }
      
      return [...nextTags, tag];
    });
  };

  useEffect(() => {
    const filtered = MOCK_PROJECTS.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
    // Fisher-Yates-like random sort
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, [selectedTags]);

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] flex flex-col">
      <div className="px-7 md:px-10 pt-8 pb-4">
        <Header />
      </div>

      <div className="flex-1 px-7 md:px-10 py-12 md:py-20 max-w-[1600px] w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] uppercase mb-12">
          Projects
        </h1>

        <div className="mb-12 md:mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 pb-2">
            <button
              onClick={() => setSelectedTags([])}
              className={`whitespace-nowrap px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all border rounded-full
                ${
                  selectedTags.length === 0
                    ? "bg-black text-[#f5f3ee] border-black"
                    : "bg-transparent text-black border-black/20 hover:border-black"
                }
              `}
            >
              {t.allBtn}
            </button>
            {COLOR_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`whitespace-nowrap px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all border rounded-full
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
          
          <div className="flex flex-wrap items-center gap-2 md:gap-3 pb-4">
            {JACKET_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`whitespace-nowrap px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all border rounded-full
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

        {shuffledProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {shuffledProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="overflow-hidden bg-black/5 aspect-square mb-5 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover mix-blend-darken scale-[1.15] transition-transform duration-700 group-hover:scale-[1.18]"
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

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-[#f5f3ee]/90 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 text-black/50 hover:text-black transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div 
              className="relative w-full shadow-2xl bg-black/5 flex items-center justify-center overflow-hidden aspect-square cursor-pointer"
              onClick={() => setSelectedProject(null)}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={1200}
                className="w-full h-full object-contain mix-blend-darken scale-[1.05]"
                priority
              />
            </div>
            <div className="w-full mt-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-base text-black/60 mb-4">{selectedProject.artist}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-black/50 border border-black/15 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}