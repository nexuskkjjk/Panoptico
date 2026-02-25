/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { Github, Twitter, Instagram, Mail, Play, Menu, X } from "lucide-react";

const projects: Array<{
  id: string;
  title: string;
  category: string;
  vimeoId?: string;
  vimeoHash?: string;
  video?: string;
  thumbnail: string;
  description: string;
  gallery?: string[];
}> = [
  {
    id: "p1",
    title: "MC CABELINHO FT. VINICIN — TERMINEI RECENTEMENTE",
    category: "VIDEOCLIPE",
    vimeoId: "1041871186",
    vimeoHash: "f449db2df9",
    thumbnail: "https://i.vimeocdn.com/video/2124668721-caff6e5a830a5c6a0fe35fada2f292db53b20aa3b2e0a608c3bb68c4199cf7fb-d_1280",
    description: "",
    gallery: [
      "https://i.ibb.co/TFKLs3k/Still-2024-12-18-121501-1-90-1.png",
      "https://i.ibb.co/xKMx6T4t/Still-2024-12-18-121501-1-125-1.png",
      "https://i.ibb.co/nsJLPS6J/Still-2024-12-18-121501-1-94-1.png",
      "https://i.ibb.co/RGrCTVHs/Still-2024-12-18-121501-1-60-1.png"
    ]
  },
  {
    id: "p2",
    title: "KENNER — X-LEVEL",
    category: "COMERCIAL",
    vimeoId: "956764521",
    vimeoHash: "9d854fdf6e",
    thumbnail: "https://i.vimeocdn.com/video/1868507147-dae8263559cadec8dfafe21118c9e48111e53a26df538ca319d92e3e94eae1dc-d_1280",
    description: "",
    gallery: [
      "https://i.ibb.co/FbphV7c0/Timeline-v2-00-00-46-06-Still080.png",
      "https://i.ibb.co/svZMSByN/Timeline-v2-00-00-38-10-Still070.png",
      "https://i.ibb.co/S7m3wMZg/Timeline-v2-00-00-39-22-Still072.png",
      "https://i.ibb.co/mrkQj4Lm/Timeline-v2-00-00-54-20-Still087.png"
    ]
  },
  {
    id: "p3",
    title: "LOLA COSMETICS — BOSSA",
    category: "COMERCIAL",
    vimeoId: "1166865336",
    vimeoHash: "efd39deff7",
    thumbnail: "https://i.vimeocdn.com/video/2124645872-c8a0385984eb6ae676b22d612a77dc1fa96ce2db268714bbeb09a04607f43413-d_1280",
    description: "",
    gallery: [
      "https://i.ibb.co/99Mvkj1v/Still-2025-09-17-132659-1-10-1.png",
      "https://i.ibb.co/k2VJgTdH/Still-2025-09-17-132659-1-5-3.png",
      "https://i.ibb.co/jPjBT9P4/Still-2025-09-17-132659-1-16-1.png",
      "https://i.ibb.co/jk1BBKWK/Still-2025-09-17-132659-1-76-1.png"
    ]
  },
  {
    id: "p4",
    title: "SACADA — ENTRELACE",
    category: "FASHION FILM",
    vimeoId: "954207533",
    vimeoHash: "4801644608",
    thumbnail: "https://i.vimeocdn.com/video/2124667495-60fa293b14182b77b884ec1379f2b9930861b7f74d64f2dc558f4628ef56ca19-d_1280",
    description: "",
    gallery: [
      "https://i.ibb.co/ZzZHJK9Y/V-deo-Mescla-HORIZ-00-00-20-12-Still008.png",
      "https://i.ibb.co/vxhFdN1p/V-deo-Mescla-HORIZ-00-00-50-20-Still025.png",
      "https://i.ibb.co/YBYJnDwj/V-deo-Mescla-HORIZ-00-00-04-11-Still001.png",
      "https://i.ibb.co/3YhLgk9k/V-deo-Mescla-HORIZ-00-00-58-18-Still033.png"
    ]
  },
  {
    id: "p7",
    title: "L7NNON — OUTRO LUGAR",
    category: "VIDEOCLIPE",
    vimeoId: "675329933",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/C3SKtCtb/Screenshot-37.png",
      "https://i.ibb.co/d4D1gGG3/Screenshot-42.png",
      "https://i.ibb.co/VcLLBqMv/Screenshot-34.png",
      "https://i.ibb.co/Q70ynZZd/Screenshot-25.png"
    ]
  },
  {
    id: "p8",
    title: "LOLA COSMETICS — A FÓRMULA",
    category: "COMERCIAL",
    vimeoId: "1167841743",
    vimeoHash: "985ea1d650",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/d4gcrhm9/Still-2026-02-23-114813-2-26-1.png",
      "https://i.ibb.co/d0p5Vhkc/Still-2026-02-23-114813-2-24-2.png",
      "https://i.ibb.co/5W77PpSr/Still-2026-02-23-114813-2-6-1.png",
      "https://i.ibb.co/XkjN4qyr/Still-2026-02-23-114813-2-4-3.png"
    ]
  },
  {
    id: "p6",
    title: "FILIPE RET — QUERO PAZ",
    category: "VIDEOCLIPE",
    vimeoId: "1166877883",
    vimeoHash: "fa9bba8ff9",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/BKgr0VBn/Still-2025-06-18-145719-3-52-1.jpg",
      "https://i.ibb.co/QvymsSSS/Still-2025-06-18-145719-3-82-1.jpg",
      "https://i.ibb.co/VWnZqywx/Still-2025-06-18-145719-3-53-1.jpg",
      "https://i.ibb.co/dwNw0s5V/Still-2025-06-18-145719-3-83-1.jpg"
    ]
  },
  {
    id: "p13",
    title: "JOVEMD! — SAFE",
    category: "VISUALIZER",
    vimeoId: "1166779536",
    vimeoHash: "344fc89908",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/hx9ySvkJ/Still-2025-10-13-175722-1-1-2-16-1-2.png",
      "https://i.ibb.co/Xr88W9r3/Still-2025-10-13-175722-10-3-1-1.png",
      "https://i.ibb.co/vv40c88R/Still-2025-10-13-175722-4-82-1.png",
      "https://i.ibb.co/jxgqYP9/Still-2025-11-10-195821-3-1-3-1.png"
    ]
  },
  {
    id: "p14",
    title: "PAPPA JACK — SENTINELA",
    category: "VIDEOCLIPE",
    vimeoId: "503641665",
    vimeoHash: "ebe547a74b",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/Gvg6LcHR/Sequence-01-00-03-25-00-Still018.jpg",
      "https://i.ibb.co/fzTWYLDR/Sequence-01-00-01-22-14-Still008-2.jpg",
      "https://i.ibb.co/d418KkhV/Sequence-01-00-00-37-08-Still007.jpg",
      "https://i.ibb.co/N8wtpSY/Sequence-01-00-01-44-18-Still014-2.jpg"
    ]
  },
  {
    id: "p5",
    title: "JOVEMD! — SENADOR",
    category: "VISUALIZER",
    vimeoId: "1166793032",
    vimeoHash: "7d05654e07",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/y3KfhxL/Still-2026-01-04-123250-1-27-1.png",
      "https://i.ibb.co/6cTstFP3/Still-2026-01-04-123250-1-8-1.png",
      "https://i.ibb.co/k6sfz3TP/Still-2026-01-04-123250-4-1-2.png",
      "https://i.ibb.co/Z1MtXQBb/Still-2026-01-04-123250-4-2-1.png"
    ]
  },
  {
    id: "p15",
    title: "BK & L7NNON — DEU AULAS",
    category: "VIDEOCLIPE",
    vimeoId: "676467610",
    vimeoHash: "17925b4d69",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/VYYWq7y2/Main-TL-00-00-11-04-Still003.png",
      "https://i.ibb.co/xK547hJH/Main-TL-00-02-15-22-Still044.png",
      "https://i.ibb.co/9kzmpPnp/Main-TL-00-01-42-09-Still035.png",
      "https://i.ibb.co/ynf4WVgW/Main-TL-00-01-19-19-Still028.png"
    ]
  },
  {
    id: "p16",
    title: "MD CHEFE FT BK — OUTRA HORA",
    category: "VIDEOCLIPE",
    vimeoId: "1167850997",
    vimeoHash: "e91af12e3a",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/p681Xnpt/Outra-Hora-30-1-14.png",
      "https://i.ibb.co/99NwNYT8/Outra-Hora-30-1-2.png",
      "https://i.ibb.co/mCwPNYBP/Outra-Hora-30-1-10.png",
      "https://i.ibb.co/Qv9c1Hdd/Outra-Hora-30-1-7.png"
    ]
  },
  {
    id: "p17",
    title: "FILIPE RET — DEUS PERDOA",
    category: "VIDEOCLIPE",
    vimeoId: "821890935",
    vimeoHash: "cc62328569",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/ycFJrwBC/Main-TL-FInal-v2-x1634-00-01-51-15-Still039.jpg",
      "https://i.ibb.co/ymLjLPJg/Main-TL-FInal-v2-x1634-00-00-07-19-Still003.jpg",
      "https://i.ibb.co/nMDMR8TS/Main-TL-FInal-v2-x1634-00-00-26-00-Still011.jpg",
      "https://i.ibb.co/N6r9dRJP/Main-TL-FInal-v2-x1634-00-02-03-22-Still044.jpg"
    ]
  },
  {
    id: "p18",
    title: "DELACRUZ & LUKINHAS — APERTA O START",
    category: "VIDEOCLIPE",
    vimeoId: "748221186",
    vimeoHash: "26726dd11c",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/P8mpKgW/Screenshot-43.png",
      "https://i.ibb.co/3YRHjHNR/Screenshot-48.png",
      "https://i.ibb.co/5hJPLLQk/Screenshot-29.png",
      "https://i.ibb.co/4Rg3704w/Screenshot-34-1.png"
    ]
  },
  {
    id: "p19",
    title: "SANXA — A MENTE MESTRA",
    category: "VIDEOCLIPE",
    vimeoId: "954215639",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/qLwskwHg/Main-TL5-00-00-44-14-Still012.png",
      "https://i.ibb.co/1f8BHS2m/Main-TL5-00-01-08-09-Still024.png",
      "https://i.ibb.co/gMccgYn5/Main-TL5-00-00-21-07-Still001.png",
      "https://i.ibb.co/9mK2cx7H/Main-TL5-00-02-43-06-Still048.png"
    ]
  },
  {
    id: "p9",
    title: "GIORGIO ARMANI — BAJAU",
    category: "COMERCIAL",
    vimeoId: "1166880173",
    vimeoHash: "c3c23b60ba",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/x8RpbH6X/still-1-15-2.png",
      "https://i.ibb.co/99h0y6rz/Still-2024-11-17-163948-1-14-1.png",
      "https://i.ibb.co/4nGVdQcJ/still2-2-5-1.png",
      "https://i.ibb.co/DDwsy0Zc/Still-2024-11-17-163948-1-14-3.png"
    ]
  },
  {
    id: "p10",
    title: "ATEEN — 30 ANOS",
    category: "COMERCIAL",
    vimeoId: "1166870300",
    vimeoHash: "3aae8bfa69",
    thumbnail: "",
    description: "",
    gallery: [
      "https://i.ibb.co/GvKP5G4v/V-deos-v2-00-01-45-13-Still072.png",
      "https://i.ibb.co/C5b2dn7R/V-deos-v2-00-00-50-21-Still057.png",
      "https://i.ibb.co/7tXNF2Tn/V-deos-v2-00-00-43-03-Still052.png",
      "https://i.ibb.co/67K8pjcG/V-deos-v2-00-00-04-00-Still037.png"
    ]
  },
  {
    id: "p11",
    title: "LOLA COSMETICS — PURPLE",
    category: "COMERCIAL",
    vimeoId: "1166868756",
    vimeoHash: "3189a7bcff",
    thumbnail: "",
    description: "",
  },
  {
    id: "p12",
    title: "BLUEMAN",
    category: "COMERCIAL",
    vimeoId: "457119275",
    vimeoHash: "045fa16b88",
    thumbnail: "",
    description: "",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'publicidade' | 'videoclipe' | 'contact'>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [time, setTime] = useState(new Date());
  const [vimeoThumbnails, setVimeoThumbnails] = useState<Record<string, string>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const subject = encodeURIComponent(`CONTATO SITE: ${formData.subject}`);
      const body = encodeURIComponent(`NOME: ${formData.name}\nEMAIL: ${formData.email}\n\nMENSAGEM:\n${formData.message}`);
      
      // Gmail Compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=PRODUTORA@PANOPTICOFILMES.COM&su=${subject}&body=${body}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank');
      
      setFormStatus('success');
      setFormMessage('REDIRECIONANDO PARA O GMAIL...');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setFormMessage('ERRO AO REDIRECIONAR.');
    }
  };

  useEffect(() => {
    // Fetch Vimeo thumbnails dynamically
    const fetchThumbnails = async () => {
      const thumbs: Record<string, string> = {};
      for (const project of projects) {
        if (project.vimeoId && !project.thumbnail) {
          try {
            const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.vimeoId}`);
            const data = await response.json();
            if (data.thumbnail_url) {
              // Replace the size in the URL to get medium res for faster loading
              thumbs[project.id] = data.thumbnail_url.replace(/_[0-9x]+/, '_640');
            }
          } catch (error) {
            console.error(`Error fetching thumbnail for ${project.vimeoId}:`, error);
          }
        }
      }
      setVimeoThumbnails(prev => ({ ...prev, ...thumbs }));
      
      // Preload the newly fetched thumbnails
      Object.values(thumbs).forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    fetchThumbnails();

    // Preload gallery images
    projects.forEach(project => {
      if (project.gallery) {
        project.gallery.forEach(url => {
          const img = new Image();
          img.src = url;
        });
      }
    });
  }, []);

  useEffect(() => {
    // Typewriter sound effects
    const typingAudio = new Audio("https://www.soundjay.com/communication/typewriter-typing-1.mp3");
    const bellAudio = new Audio("https://www.soundjay.com/communication/typewriter-bell-1.mp3");
    const clickAudio = new Audio("https://www.soundjay.com/button/button-16.mp3");
    
    typingAudio.volume = 0.3;
    bellAudio.volume = 0.4;
    clickAudio.volume = 0.2;
    
    const playSound = () => {
      typingAudio.play().catch(e => console.log("Audio play blocked by browser"));
    };

    if (loading) {
      playSound();
    }

    if (!loading && currentPage === 'contact') {
      bellAudio.play().catch(e => console.log("Audio play blocked"));
    }

    // Attach click sounds to all buttons and links
    const handleGlobalClick = () => {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    };

    window.addEventListener('mousedown', handleGlobalClick);

    const timer = setTimeout(() => {
      setLoading(false);
      typingAudio.pause();
    }, 4500);

    return () => {
      clearTimeout(timer);
      typingAudio.pause();
      window.removeEventListener('mousedown', handleGlobalClick);
    };
  }, [loading, currentPage]);

  const renderHome = () => (
    <main className="pt-20 md:pt-32 pb-32 px-6 md:px-16">
      {/* Project List */}
      <div className="max-w-[1400px] mx-auto mb-8 flex justify-between items-center border-b border-[var(--border)] pb-4">
        <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">SHOWCASE</div>
      </div>

      <div id="trabalhos" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-[1400px] mx-auto scroll-mt-32">
        {projects.slice(0, 8).map((project, index) => (
          <motion.div
            key={project.id}
            initial={index < 2 ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            animate={index < 2 && !loading ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: index < 2 ? 0.3 : 0 }}
            className="group"
          >
            <div 
              className="relative aspect-video overflow-hidden bg-neutral-50 rounded-none cursor-pointer"
              onClick={() => setActiveVideo(project.id)}
            >
              {/* Thumbnail / Poster - Always visible until video is active */}
              {activeVideo !== project.id && (
                <img 
                  src={project.thumbnail || vimeoThumbnails[project.id] || "https://picsum.photos/seed/vimeo/1920/1080"} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              )}

              {project.vimeoId ? (
                <div className="w-full h-full relative">
                  {activeVideo === project.id && (
                    <iframe
                      src={`https://player.vimeo.com/video/${project.vimeoId}?h=${project.vimeoHash || ''}&autoplay=1&title=0&byline=0&portrait=0`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="absolute top-0 left-0 w-full h-full"
                      title={project.title}
                    ></iframe>
                  )}
                </div>
              ) : (
                <div className="w-full h-full relative">
                  {activeVideo === project.id ? (
                    <video
                      autoPlay
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : null}
                </div>
              )}

              {/* Play Button Overlay */}
              {activeVideo !== project.id && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-700">
                    <Play className="text-white fill-white w-6 h-6 ml-1 opacity-60" />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="font-sans tracking-tighter opacity-90 text-[11px] cursor-pointer hover:opacity-40 transition-opacity font-bold uppercase"
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );

  const renderCategory = (categoryType: 'publicidade' | 'videoclipe') => {
    const filteredProjects = projects.filter(p => {
      if (categoryType === 'videoclipe') return p.category === 'VIDEOCLIPE' || p.category === 'VISUALIZER';
      return p.category === 'COMERCIAL' || p.category === 'FASHION FILM';
    });

    return (
      <main className="pt-24 md:pt-48 pb-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto mb-16 flex flex-col gap-4">
          <div className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">
            {categoryType === 'videoclipe' ? 'VIDEOCLIPES / MUSIC VIDEOS' : 'PUBLICIDADE / FASHION FILM'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-[1400px] mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative aspect-video overflow-hidden bg-neutral-50 rounded-none cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.thumbnail || vimeoThumbnails[project.id] || "https://picsum.photos/seed/vimeo/1920/1080"} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-widest border border-white/40 px-4 py-2">VER DETALHES</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-[9px] opacity-40 font-bold tracking-widest uppercase">{project.category}</span>
                <h2 className="font-bold tracking-tight text-[13px] uppercase">{project.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    );
  };

  const renderContact = () => (
    <main className="pt-24 md:pt-48 pb-32 px-6 md:px-16 font-sans">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24"
      >
        {/* Left Column: Contact Info */}
        <div className="md:col-span-5 flex flex-col gap-12 order-2 md:order-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold tracking-tight uppercase">PANOPTICO FILMES</h1>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px] uppercase">EMAIL: <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">PRODUTORA@PANOPTICOFILMES.COM</span></div>
            <div className="text-[11px] uppercase">WHATSAPP: <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">+55 21 99016-6606</span></div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px] uppercase">LOCALIZADA NO RIO DE JANEIRO, BRASIL</div>
            <div className="text-[11px] uppercase">AVAILABLE WORLDWIDE</div>
          </div>

          <div className="flex gap-4 text-[11px] font-bold">
            <a href="https://www.instagram.com/PANOPTICO.FILMES" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">INSTAGRAM</a>
            <a href="https://vimeo.com/panopticofilmes" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">VIMEO</a>
          </div>

          {/* Clients Section */}
          <div className="flex flex-col gap-6 mt-8">
            <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">CLIENTES</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-bold opacity-80">
              {["Adidas", "Flamengo", "Kenner", "Lola Cosmetics", "Época Cosméticos", "MC Cabelinho", "Emicida", "Filipe Ret", "L7nnon", "Delacruz", "Sacada", "Ateen", "Blueman", "BK", "Papatinho", "JovemD!"].map((client) => (
                <span key={client} className="uppercase tracking-tighter">{client}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7 flex flex-col order-1 md:order-2">
          <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 mb-8 uppercase">CONTATO / SEND A MESSAGE</div>
          <form className="flex flex-col gap-8" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold opacity-40 uppercase">Nome / Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold opacity-40 uppercase">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold opacity-40 uppercase">Assunto / Subject</label>
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold opacity-40 uppercase">Mensagem / Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase resize-none"
              ></textarea>
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-fit mt-4 text-[10px] font-bold tracking-widest border border-[var(--text)] px-8 py-4 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all uppercase disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Enviando...' : 'Enviar / Send Message'}
              </button>
              
              {formStatus !== 'idle' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[10px] font-bold uppercase tracking-widest ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                  {formMessage}
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );

  const renderFooter = () => (
    <footer className="bg-[var(--bg)] text-[var(--text)] pt-32 pb-12 px-6 md:px-16 font-sans border-t border-[var(--border)] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-16">
          {/* Sitemap */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold opacity-40 uppercase">[SITEMAP]</span>
            <div className="flex flex-col gap-2 text-[11px] font-bold">
              <button onClick={() => setCurrentPage('home')} className="w-fit hover:opacity-40 transition-opacity uppercase">Home</button>
              <button onClick={() => setCurrentPage('publicidade')} className="w-fit hover:opacity-40 transition-opacity uppercase">Publicidade</button>
              <button onClick={() => setCurrentPage('videoclipe')} className="w-fit hover:opacity-40 transition-opacity uppercase">Videoclipe</button>
              <button onClick={() => setCurrentPage('contact')} className="w-fit hover:opacity-40 transition-opacity uppercase">Contact</button>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold opacity-40 uppercase">[CONTATO]</span>
            <div className="flex flex-col gap-2 text-[11px] font-bold">
              <span className="hover:opacity-40 transition-opacity cursor-pointer uppercase">PRODUTORA@PANOPTICOFILMES.COM</span>
              <span className="hover:opacity-40 transition-opacity cursor-pointer uppercase">+55 (21) 99016-6606</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold opacity-40 uppercase">[LOCAL]</span>
            <div className="flex flex-col gap-2 text-[11px] font-bold uppercase">
              <span>Rio de Janeiro</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold opacity-40 uppercase">[SOCIAL]</span>
            <div className="flex flex-col gap-2 text-[11px] font-bold uppercase">
              <a href="https://www.instagram.com/PANOPTICO.FILMES" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity cursor-pointer">Instagram</a>
              <a href="https://vimeo.com/panopticofilmes" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity cursor-pointer">Vimeo</a>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-[9px] opacity-40 font-bold tracking-widest uppercase">
            © PANOPTICO - Todos os direitos reservados a Panoptico Filmes LTDA | CNPJ: 48.896.739/0001-50
          </div>
          <div className="text-[11px] font-bold uppercase opacity-80">
            Rio de Janeiro: {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen font-sans uppercase tracking-tight text-[12px] font-medium selection:bg-black selection:text-white transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen flex flex-col">
      
      <AnimatePresence>
        {loading && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "linear" }}
              className="flex flex-col items-center gap-12"
            >
              <img 
                src="https://i.ibb.co/R47dfnNV/Untitled-design.png" 
                alt="PANOPTICO FILMES" 
                className="w-24 h-24 md:w-40 md:h-40 object-contain grayscale opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="typewriter-text tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-[14px]">
                PANOPTICO FILMES
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {currentPage === 'home' ? renderHome() : currentPage === 'publicidade' ? renderCategory('publicidade') : currentPage === 'videoclipe' ? renderCategory('videoclipe') : renderContact()}
              </motion.div>
            </AnimatePresence>
          </div>
          {renderFooter()}
        </div>
      )}

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 pt-6 pb-4 md:px-8 bg-transparent pointer-events-none">
        <div className="max-w-full mx-auto flex justify-between items-center gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="pointer-events-auto cursor-pointer flex flex-col gap-0.5"
            onClick={() => {
              setCurrentPage('home');
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="opacity-90 tracking-widest font-bold text-[14px] md:text-[11px]">PANOPTICO FILMES</span>
          </motion.div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-24 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1 }}
            >
              <button 
                onClick={() => setCurrentPage('home')}
                className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'home' ? 'font-bold opacity-100' : 'opacity-60'}`}
              >
                HOME
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.15 }}
            >
              <button 
                onClick={() => setCurrentPage('publicidade')}
                className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'publicidade' ? 'font-bold opacity-100' : 'opacity-60'}`}
              >
                PUBLICIDADE
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2 }}
            >
              <button 
                onClick={() => setCurrentPage('videoclipe')}
                className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'videoclipe' ? 'font-bold opacity-100' : 'opacity-60'}`}
              >
                VIDEOCLIPE
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.3 }}
            >
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'contact' ? 'font-bold opacity-100' : 'opacity-60'}`}
              >
                CONTATO
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden pointer-events-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4 }}
            className="hidden md:flex gap-4 pointer-events-auto items-center"
          >
            <button 
              onClick={() => setIsDarkMode(false)}
              className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${!isDarkMode ? 'font-bold opacity-100' : 'opacity-30'}`}
            >
              LIGHT
            </button>
            <button 
              onClick={() => setIsDarkMode(true)}
              className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${isDarkMode ? 'font-bold opacity-100' : 'opacity-30'}`}
            >
              DARK
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[45] bg-[var(--bg)] flex flex-col transition-colors duration-500"
          >
            <div className="flex-grow flex flex-col items-center justify-center gap-6 px-6 pt-20">
              {['home', 'publicidade', 'videoclipe', 'contact'].map((page, index) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setCurrentPage(page as any);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-[14px] tracking-[0.4em] font-bold uppercase transition-all ${currentPage === page ? 'opacity-100' : 'opacity-30'}`}
                >
                  {page === 'contact' ? 'CONTATO' : page}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pb-20 px-12"
            >
              <div className="border-t border-[var(--border)] pt-10 flex gap-12 items-center justify-center">
                <button 
                  onClick={() => setIsDarkMode(false)}
                  className={`tracking-[0.3em] text-[11px] font-bold uppercase transition-all ${!isDarkMode ? 'opacity-100' : 'opacity-30'}`}
                >
                  LIGHT
                </button>
                <button 
                  onClick={() => setIsDarkMode(true)}
                  className={`tracking-[0.3em] text-[11px] font-bold uppercase transition-all ${isDarkMode ? 'opacity-100' : 'opacity-30'}`}
                >
                  DARK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[var(--bg)] flex items-center justify-center overflow-hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="w-full h-full flex flex-col overflow-y-auto no-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 md:px-16 py-6 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] opacity-40 tracking-[0.3em] font-bold uppercase">{selectedProject.category}</span>
                  <h2 className="text-[16px] md:text-[20px] font-bold tracking-tighter uppercase">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] opacity-40 hover:opacity-100 transition-opacity tracking-[0.2em] font-bold border border-[var(--border)] px-4 py-2 hover:bg-[var(--text)] hover:text-[var(--bg)]"
                >
                  VOLTAR / CLOSE
                </button>
              </div>

              <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 py-12 flex flex-col gap-8 md:gap-12">
                {/* Video Section */}
                {selectedProject.vimeoId && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="aspect-video w-full bg-black/5 relative group"
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${selectedProject.vimeoId}?h=${selectedProject.vimeoHash}&autoplay=1&title=0&byline=0&portrait=0`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                )}

                {/* Gallery Section */}
                {selectedProject.gallery && (
                  <div className="flex flex-col gap-6 mt-4">
                    <div className="text-[10px] font-bold tracking-[0.3em] opacity-40">STILLS / GALERIA</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="w-full overflow-hidden bg-black/5"
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} still ${idx + 1}`}
                            className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[1.05]"
                            referrerPolicy="no-referrer"
                            loading="eager"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Spacer */}
                <div className="h-24" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
