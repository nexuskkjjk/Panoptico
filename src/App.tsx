/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

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
    id: "p5",
    title: "JOVEMD! — SENADOR",
    category: "VIDEOCLIPE",
    vimeoId: "1166793032",
    vimeoHash: "7d05654e07",
    thumbnail: "https://i.vimeocdn.com/video/2124669645-2544c9df0bbf44943281602f742fba23b212b1fd8b71ba733ed55463e083c528-d_1280",
    description: "Exploração visual da estética urbana e do movimento, o videoclipe 'Senador' mergulha em uma narrativa cinematográfica que transita entre o realismo e a abstração. Com uma direção de fotografia focada em texturas e contrastes, o projeto busca capturar a essência da vida noturna e a energia frenética das ruas cariocas, utilizando uma linguagem documental elevada por composições rigorosas e uma montagem rítmica que dialoga diretamente com a sonoridade do artista.",
    gallery: [
      "https://i.imgur.com/tJeG85u.jpeg",
      "https://i.imgur.com/q4Ram74.jpeg",
      "https://i.imgur.com/F7PXcoK.jpeg",
      "https://i.imgur.com/2bkHA1N.jpeg"
    ]
  },
  {
    id: "p6",
    title: "FILIPE RET — QUERO PAZ",
    category: "VIDEOCLIPE",
    vimeoId: "1166877883",
    vimeoHash: "fa9bba8ff9",
    thumbnail: "https://i.vimeocdn.com/video/2124662558-a78dc2650380c7672edfca14d60eea3159a78ba23138b723f7d8328d2e44b606-d_1280",
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
        <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">TRABALHOS SELECIONADOS — 24/25</div>
        <div className="text-[10px] opacity-40 uppercase">{projects.length} PROJETOS</div>
      </div>

      <div id="trabalhos" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-[1400px] mx-auto scroll-mt-32">
        {projects.map((project, index) => (
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
                  src={project.thumbnail} 
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
            </div>
            <div className="mt-4 flex justify-end">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="font-mono tracking-tighter opacity-90 text-[11px] cursor-pointer hover:opacity-40 transition-opacity font-bold uppercase"
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Home Manifesto Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-[1400px] mx-auto mt-48 mb-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center"
      >
        <div className="flex flex-col gap-8">
          <div className="text-[10px] font-bold tracking-[0.3em] opacity-40">MANIFESTO</div>
          <p className="text-[18px] md:text-[22px] leading-[1.4] tracking-tighter font-bold opacity-90">
            ACREDITAMOS QUE O CINEMA É UMA FERRAMENTA DE TRANSFORMAÇÃO E OBSERVAÇÃO. NOSSA MISSÃO É CRIAR IMAGENS QUE NÃO APENAS DOCUMENTEM, MAS QUE PROVOQUEM E ETERNIZEM MOMENTOS.
          </p>
        </div>
        <div className="flex flex-col gap-4 opacity-40 text-[10px] tracking-widest uppercase">
          <div className="flex justify-between border-b border-[var(--border)] pb-2">
            <span>ESTÉTICA</span>
            <span>CRUA / REALISTA</span>
          </div>
          <div className="flex justify-between border-b border-[var(--border)] pb-2">
            <span>ABORDAGEM</span>
            <span>EXPERIMENTAL</span>
          </div>
          <div className="flex justify-between border-b border-[var(--border)] pb-2">
            <span>FOCO</span>
            <span>NARRATIVA VISUAL</span>
          </div>
        </div>
      </motion.section>
    </main>
  );

  const renderAbout = () => (
    <main className="pt-48 pb-32 px-6 md:px-16 min-h-screen font-mono">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24"
      >
        {/* Left Column: Main Info */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="text-[12px] font-bold tracking-tight">PANÓPTICO FILMES — QUEM SOMOS</h1>
            <span className="text-[11px] opacity-40 uppercase tracking-widest">ESTABLISHED 2020 / RIO DE JANEIRO</span>
          </div>

          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-[11px] leading-[1.8] opacity-80">
              A PANÓPTICO FILMES É UMA PRODUTORA INDEPENDENTE FOCADA NA CRIAÇÃO DE NARRATIVAS VISUAIS QUE DESAFIAM O CONVENCIONAL. NASCEMOS DA NECESSIDADE DE OBSERVAR O MUNDO SOB DIFERENTES ÂNGULOS, CAPTURANDO A ESSÊNCIA DO QUE MUITAS VEZES PASSA DESPERCEBIDO.
            </p>
            <p className="text-[11px] leading-[1.8] opacity-80">
              NOSSA ESTÉTICA É GUIADA PELA VERDADE DA LUZ E PELA FORÇA DO MOVIMENTO. CADA PROJETO É UM NOVO EXPERIMENTO, UMA NOVA FORMA DE TRADUZIR SENTIMENTOS EM QUADROS CINEMATOGRÁFICOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">01 / ESTÉTICA</span>
              <p className="text-[11px] opacity-60">GUIADA PELA VERDADE DA LUZ E PELA FORÇA DO MOVIMENTO.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">02 / PROPÓSITO</span>
              <p className="text-[11px] opacity-60">CINEMA COMO FERRAMENTA DE TRANSFORMAÇÃO E OBSERVAÇÃO.</p>
            </div>
          </div>

          <div className="mt-auto pt-12 border-t border-[var(--text)]/10 flex flex-col gap-1">
            <span className="text-[10px] opacity-40 uppercase">LOCATED IN RIO DE JANEIRO, BRASIL</span>
            <span className="text-[10px] font-bold uppercase">AVAILABLE WORLDWIDE</span>
          </div>
        </div>

        {/* Right Column: Accordions */}
        <div className="md:col-span-5 flex flex-col pt-0 md:pt-48">
          {/* Expertise Accordion */}
          <div className="border-t border-[var(--text)]/20 py-6">
            <button 
              onClick={() => setExpandedSection(expandedSection === 'expertise' ? null : 'expertise')}
              className="w-full flex justify-between items-center text-[11px] font-bold tracking-widest hover:opacity-50 transition-opacity"
            >
              <span>EXPERTISE</span>
              <span className="text-[16px] leading-none">{expandedSection === 'expertise' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'expertise' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 flex flex-col gap-2 text-[10px] opacity-60 uppercase">
                    {['DIREÇÃO DE FOTOGRAFIA', 'DIREÇÃO CRIATIVA', 'MONTAGEM E EDIÇÃO', 'COLOR GRADING', 'PRODUÇÃO EXECUTIVA', 'STORYTELLING VISUAL'].map((item, i) => (
                      <div key={i} className="flex justify-between border-b border-[var(--text)]/5 pb-1">
                        <span>{item}</span>
                        <span>0{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Selected Clients Accordion */}
          <div className="border-t border-b border-[var(--text)]/20 py-6">
            <button 
              onClick={() => setExpandedSection(expandedSection === 'about-clients' ? null : 'about-clients')}
              className="w-full flex justify-between items-center text-[11px] font-bold tracking-widest hover:opacity-50 transition-opacity"
            >
              <span>SELECTED CLIENTS</span>
              <span className="text-[16px] leading-none">{expandedSection === 'about-clients' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'about-clients' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 grid grid-cols-2 gap-y-2 text-[10px] opacity-60 uppercase">
                    {['KENNER', 'SACADA', 'LOLA COSMETICS', 'FILIPE RET', 'MC CABELINHO', 'L7NNON', 'JOVEMD!', 'RESERVA'].map((client, i) => (
                      <span key={i}>{client}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-[40px] font-bold tracking-tighter opacity-5 self-end uppercase">SOBRE</div>
        </div>
      </motion.section>
    </main>
  );

  const renderContact = () => (
    <main className="pt-48 pb-32 px-6 md:px-16 min-h-screen font-mono">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24"
      >
        {/* Left Column: Contact Info */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="text-[12px] font-bold tracking-tight">PANÓPTICO FILMES — PRODUTORA AUDIOVISUAL</h1>
            <span className="text-[11px] opacity-40 underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">MEMBRO ASSOCIADO BRAZILIAN CONTENT</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px]">PHONE: <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">+55 21 99999 8888</span></div>
            <div className="text-[11px]">PERSONAL <span className="underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">E-MAIL</span></div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[11px]">LOCATED IN RIO DE JANEIRO, BRASIL</div>
            <div className="text-[11px]">AVAILABLE WORLDWIDE</div>
          </div>

          <div className="flex gap-4 text-[11px] font-bold">
            <span className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">INSTAGRAM</span>
            <span className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">VIMEO</span>
            <span className="cursor-pointer hover:opacity-40 transition-opacity underline decoration-[var(--text)]/20 underline-offset-4">LINKEDIN</span>
          </div>

          <div className="flex flex-col gap-8 mt-4">
            <div className="text-[11px] font-bold tracking-widest">AGENT — PANÓPTICO REPRESENTAÇÕES</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <div className="text-[11px] font-bold">RODRIGO SILVA</div>
                <div className="text-[11px] underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">RODRIGO@PANOPTICO.FILMS</div>
                <div className="text-[11px] underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">+55 21 98888 7777</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-[11px] font-bold">MARINA COSTA</div>
                <div className="text-[11px] underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">MARINA@PANOPTICO.FILMS</div>
                <div className="text-[11px] underline decoration-[var(--text)]/20 underline-offset-4 cursor-pointer hover:opacity-100 transition-all">+55 21 97777 6666</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordions */}
        <div className="md:col-span-5 flex flex-col pt-0 md:pt-48">
          {/* Selected Clients Accordion */}
          <div className="border-t border-[var(--text)]/20 py-6">
            <button 
              onClick={() => setExpandedSection(expandedSection === 'clients' ? null : 'clients')}
              className="w-full flex justify-between items-center text-[11px] font-bold tracking-widest hover:opacity-50 transition-opacity"
            >
              <span>SELECTED CLIENTS</span>
              <span className="text-[16px] leading-none">{expandedSection === 'clients' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'clients' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 grid grid-cols-2 gap-y-2 text-[10px] opacity-60">
                    {['KENNER', 'SACADA', 'LOLA COSMETICS', 'FILIPE RET', 'MC CABELINHO', 'L7NNON', 'JOVEMD!', 'RESERVA', 'NIKE', 'ADIDAS'].map((client, i) => (
                      <span key={i}>{client}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Awards Accordion */}
          <div className="border-t border-b border-[var(--text)]/20 py-6">
            <button 
              onClick={() => setExpandedSection(expandedSection === 'awards' ? null : 'awards')}
              className="w-full flex justify-between items-center text-[11px] font-bold tracking-widest hover:opacity-50 transition-opacity"
            >
              <span>AWARDS AND NOMINATIONS</span>
              <span className="text-[16px] leading-none">{expandedSection === 'awards' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'awards' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 flex flex-col gap-4 text-[10px] opacity-60">
                    <div className="flex justify-between">
                      <span>CANNES LIONS — BRONZE</span>
                      <span>2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MVF AWARDS — BEST CINEMATOGRAPHY</span>
                      <span>2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLIO AWARDS — SILVER</span>
                      <span>2023</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </main>
  );

  return (
    <div className={`min-h-screen font-sans uppercase tracking-tight text-[12px] font-medium selection:bg-black selection:text-white transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      
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
                alt="PANÓPTICO FILMES" 
                className="w-40 h-40 object-contain grayscale opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="typewriter-text tracking-[0.8em] text-[14px]">
                PANÓPTICO FILMES
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

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 pt-2 pb-4 md:px-16 bg-transparent pointer-events-none">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 items-start gap-4">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="pointer-events-auto cursor-pointer flex flex-col gap-0.5"
            onClick={() => setCurrentPage('home')}
          >
            <span className="opacity-90 tracking-widest font-bold text-[11px]">PANÓPTICO FILMES</span>
          </motion.div>

          {/* Index / Works */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.1 }}
            className="hidden md:flex pointer-events-auto"
          >
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'home' ? 'font-bold opacity-100' : 'opacity-60'}`}
            >
              HOME
            </button>
          </motion.div>

          {/* Info / About */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2 }}
            className="hidden md:flex pointer-events-auto"
          >
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'about' ? 'font-bold opacity-100' : 'opacity-60'}`}
            >
              SOBRE
            </button>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.3 }}
            className="hidden md:flex pointer-events-auto"
          >
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:opacity-40 transition-opacity tracking-[0.2em] text-[10px] ${currentPage === 'contact' ? 'font-bold opacity-100' : 'opacity-60'}`}
            >
              CONTATO
            </button>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4 }}
            className="flex justify-end gap-4 pointer-events-auto items-start"
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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {currentPage === 'home' ? renderHome() : currentPage === 'about' ? renderAbout() : renderContact()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="pt-16 pb-16 px-6 md:px-16 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="opacity-40 text-[10px]">
          © 2026 PANÓPTICO FILMES. TODOS OS DIREITOS RESERVADOS.
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:opacity-40 transition-opacity"><Twitter className="w-4 h-4 opacity-60" /></a>
          <a href="#" className="hover:opacity-40 transition-opacity"><Github className="w-4 h-4 opacity-60" /></a>
          <a href="#" className="hover:opacity-40 transition-opacity"><Instagram className="w-4 h-4 opacity-60" /></a>
          <a href="#" className="hover:opacity-40 transition-opacity"><Mail className="w-4 h-4 opacity-60" /></a>
        </div>
      </footer>
      </div>
    </div>
  );
}
