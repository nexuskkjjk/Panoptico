/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Github, Twitter, Instagram, Mail, Play } from "lucide-react";

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
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p2",
    title: "KENNER — X-LEVEL",
    category: "COMERCIAL",
    vimeoId: "956764521",
    vimeoHash: "9d854fdf6e",
    thumbnail: "https://i.vimeocdn.com/video/1868507147-dae8263559cadec8dfafe21118c9e48111e53a26df538ca319d92e3e94eae1dc-d_1280",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p3",
    title: "LOLA COSMETICS — BOSSA",
    category: "COMERCIAL",
    vimeoId: "1166865336",
    vimeoHash: "efd39deff7",
    thumbnail: "https://i.vimeocdn.com/video/2124645872-c8a0385984eb6ae676b22d612a77dc1fa96ce2db268714bbeb09a04607f43413-d_1280",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p4",
    title: "SACADA — ENTRELACE",
    category: "FASHION FILM",
    vimeoId: "954207533",
    vimeoHash: "4801644608",
    thumbnail: "https://i.vimeocdn.com/video/2124667495-60fa293b14182b77b884ec1379f2b9930861b7f74d64f2dc558f4628ef56ca19-d_1280",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p7",
    title: "L7NNON — OUTRO LUGAR",
    category: "VIDEOCLIPE",
    vimeoId: "675329933",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p8",
    title: "LOLA COSMETICS — A FÓRMULA",
    category: "COMERCIAL",
    vimeoId: "1167841743",
    vimeoHash: "985ea1d650",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p6",
    title: "FILIPE RET — QUERO PAZ",
    category: "VIDEOCLIPE",
    vimeoId: "1166877883",
    vimeoHash: "fa9bba8ff9",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p13",
    title: "JOVEMD! — SAFE",
    category: "VISUALIZER",
    vimeoId: "1166779536",
    vimeoHash: "344fc89908",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p14",
    title: "PAPPA JACK — SENTINELA",
    category: "VIDEOCLIPE",
    vimeoId: "503641665",
    vimeoHash: "ebe547a74b",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p5",
    title: "JOVEMD! — SENADOR",
    category: "VISUALIZER",
    vimeoId: "1166793032",
    vimeoHash: "7d05654e07",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p15",
    title: "BK & L7NNON — DEU AULAS",
    category: "VIDEOCLIPE",
    vimeoId: "676467610",
    vimeoHash: "17925b4d69",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p16",
    title: "MD CHEFE FT BK — OUTRA HORA",
    category: "VIDEOCLIPE",
    vimeoId: "1167850997",
    vimeoHash: "e91af12e3a",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p17",
    title: "FILIPE RET — DEUS PERDOA",
    category: "VIDEOCLIPE",
    vimeoId: "821890935",
    vimeoHash: "cc62328569",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p18",
    title: "DELACRUZ & LUKINHAS — APERTA O START",
    category: "VIDEOCLIPE",
    vimeoId: "748221186",
    vimeoHash: "26726dd11c",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p19",
    title: "SANXA — A MENTE MESTRA",
    category: "VIDEOCLIPE",
    vimeoId: "954215639",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p9",
    title: "GIORGIO ARMANI — BAJAU",
    category: "COMERCIAL",
    vimeoId: "1166880173",
    vimeoHash: "c3c23b60ba",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p10",
    title: "ATEEN — 30 ANOS",
    category: "COMERCIAL",
    vimeoId: "1166870300",
    vimeoHash: "3aae8bfa69",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p11",
    title: "LOLA COSMETICS — PURPLE",
    category: "COMERCIAL",
    vimeoId: "1166868756",
    vimeoHash: "3189a7bcff",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
  {
    id: "p12",
    title: "BLUEMAN",
    category: "COMERCIAL",
    vimeoId: "457119275",
    vimeoHash: "045fa16b88",
    thumbnail: "",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
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
              // Replace the size in the URL to get high res (e.g., 1280)
              thumbs[project.id] = data.thumbnail_url.replace(/_[0-9x]+/, '_1280');
            }
          } catch (error) {
            console.error(`Error fetching thumbnail for ${project.vimeoId}:`, error);
          }
        }
      }
      setVimeoThumbnails(prev => ({ ...prev, ...thumbs }));
    };

    fetchThumbnails();
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
    <main className="pt-32 pb-32 px-6 md:px-16">
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
      <main className="pt-48 pb-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto mb-16 flex flex-col gap-4">
          <div className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">
            {categoryType === 'videoclipe' ? 'VIDEOCLIPES / MUSIC VIDEOS' : 'PUBLICIDADE / COMMERCIALS'}
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
    <main className="pt-48 pb-32 px-6 md:px-16 font-sans">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24"
      >
        {/* Left Column: Contact Info */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold tracking-tight uppercase">PANOPTICO FILMES — PRODUTORA AUDIOVISUAL</h1>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px] uppercase">EMAIL: <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">PRODUTORA@PANOPTICOFILMES.COM</span></div>
            <div className="text-[11px] uppercase">TEL: <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">+55 21 99016-6606</span></div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px] uppercase">LOCALIZADA NO RIO DE JANEIRO, BRASIL</div>
            <div className="text-[11px] uppercase">AVAILABLE WORLDWIDE</div>
          </div>

          <div className="flex gap-4 text-[11px] font-bold">
            <span className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">INSTAGRAM</span>
            <span className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">VIMEO</span>
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
        <div className="md:col-span-7 flex flex-col">
          <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 mb-8 uppercase">SEND A MESSAGE / CONTATO</div>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold opacity-40 uppercase">Name / Nome</label>
                <input type="text" className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold opacity-40 uppercase">Email</label>
                <input type="email" className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold opacity-40 uppercase">Subject / Assunto</label>
              <input type="text" className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold opacity-40 uppercase">Message / Mensagem</label>
              <textarea rows={4} className="bg-transparent border-b border-[var(--border)] py-2 focus:outline-none focus:border-[var(--text)] transition-colors text-[12px] uppercase resize-none"></textarea>
            </div>
            <button className="w-fit mt-4 text-[10px] font-bold tracking-widest border border-[var(--text)] px-8 py-4 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all uppercase">
              Send Message / Enviar
            </button>
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
            <span className="text-[10px] font-bold opacity-40 uppercase">[CONTACT]</span>
            <div className="flex flex-col gap-2 text-[11px] font-bold">
              <span className="hover:opacity-40 transition-opacity cursor-pointer uppercase">PRODUTORA@PANOPTICOFILMES.COM</span>
              <span className="hover:opacity-40 transition-opacity cursor-pointer uppercase">(21) 99016-6606</span>
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
              <span className="hover:opacity-40 transition-opacity cursor-pointer">Instagram</span>
              <span className="hover:opacity-40 transition-opacity cursor-pointer">Vimeo</span>
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
                alt="PRODUTORA AUDIOVISUAL" 
                className="w-40 h-40 object-contain grayscale opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="typewriter-text tracking-[0.8em] text-[14px]">
                PRODUTORA AUDIOVISUAL
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
            className="hidden sm:flex pointer-events-auto cursor-pointer flex-col gap-0.5"
            onClick={() => setCurrentPage('home')}
          >
            <span className="opacity-90 tracking-widest font-bold text-[11px]">PRODUTORA AUDIOVISUAL</span>
          </motion.div>

          {/* Menu Items */}
          <div className="flex items-center gap-6 md:gap-24 pointer-events-auto">
            {/* Index / Works */}
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

            {/* Publicidade */}
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

            {/* Videoclipe */}
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

            {/* Contact */}
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

          {/* Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4 }}
            className="flex gap-4 pointer-events-auto items-center"
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

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <div className="text-[10px] font-bold tracking-[0.3em] opacity-40">SOBRE O PROJETO / ABOUT</div>
                    <p className="text-[16px] md:text-[18px] leading-[1.5] tracking-tight opacity-90 text-justify font-medium">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                    <div className="text-[10px] font-bold tracking-[0.3em] opacity-40">DETALHES / SPECS</div>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between text-[11px] border-b border-[var(--border)] pb-2">
                        <span className="opacity-40">ANO</span>
                        <span className="font-bold">2026</span>
                      </div>
                      <div className="flex justify-between text-[11px] border-b border-[var(--border)] pb-2">
                        <span className="opacity-40">FORMATO</span>
                        <span className="font-bold">4K DIGITAL / 35MM</span>
                      </div>
                      <div className="flex justify-between text-[11px] border-b border-[var(--border)] pb-2">
                        <span className="opacity-40">LOCAL</span>
                        <span className="font-bold">RIO DE JANEIRO, BR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery Section */}
                {selectedProject.gallery && (
                  <div className="flex flex-col gap-6 mt-4">
                    <div className="text-[10px] font-bold tracking-[0.3em] opacity-40">STILLS / GALERIA</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className="w-full overflow-hidden bg-black/5"
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} still ${idx + 1}`}
                            className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out hover:scale-[1.05]"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
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
