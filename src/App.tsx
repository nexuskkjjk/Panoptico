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
    description: "PROJETO AUDIOVISUAL INDEPENDENTE.",
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
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

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
    <main className="pt-48 pb-32 px-6 md:px-16">
      {/* Project List */}
      <div id="trabalhos" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-[1400px] mx-auto scroll-mt-64">
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
    </main>
  );

  const renderAbout = () => (
    <main className="pt-48 pb-32 px-6 md:px-16 min-h-screen flex items-start justify-start">
      <motion.section 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full"
      >
        <div className="flex flex-col gap-8 bg-[#fdfdfd] p-0 border-none relative">
          <div className="flex flex-col gap-2">
            <h2 className="text-[14px] tracking-tighter opacity-90 typewriter-text w-fit mx-0 font-bold">SOBRE_NÓS</h2>
            <div className="h-[1px] w-12 bg-black/20" />
          </div>
          
          <div className="flex flex-col gap-6 text-[12px] leading-[1.8] tracking-tight opacity-80 text-justify">
            <p>
              A PANÓPTICO FILMES É UMA PRODUTORA INDEPENDENTE FOCADA NA CRIAÇÃO DE NARRATIVAS VISUAIS QUE DESAFIAM O CONVENCIONAL. NASCEMOS DA NECESSIDADE DE OBSERVAR O MUNDO SOB DIFERENTES ÂNGULOS, CAPTURANDO A ESSÊNCIA DO QUE MUITAS VEZES PASSA DESPERCEBIDO.
            </p>
            <p>
              NOSSA ESTÉTICA É GUIADA PELA VERDADE DA LUZ E PELA FORÇA DO MOVIMENTO. CADA PROJETO É UM NOVO EXPERIMENTO, UMA NOVA FORMA DE TRADUZIR SENTIMENTOS EM QUADROS CINEMATOGRÁFICOS.
            </p>
          </div>

          <div className="mt-6 flex gap-8 opacity-30 text-[10px] tracking-tighter">
            <span>EST. 2020</span>
            <span>RIO DE JANEIRO</span>
            <span>BRASIL</span>
          </div>
        </div>
      </motion.section>
    </main>
  );

  const renderContact = () => (
    <main className="pt-64 pb-32 px-6 md:px-16 min-h-screen flex items-start justify-start">
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl w-full flex flex-col gap-10 text-[12px] leading-[1.8] tracking-[0.1em]"
      >
        {/* Header Section */}
        <div className="flex flex-col gap-0">
          <div className="font-bold tracking-[0.2em]">
            PANÓPTICO FILMES — PRODUTORA AUDIOVISUAL
          </div>
          <div className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity w-fit">
            MEMBRO ASSOCIADO BRAZILIAN CONTENT
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-0">
          <div>
            TELEFONE: <span className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity">+55 21 99999 8888</span>
          </div>
          <div>
            E-MAIL PESSOAL: <span className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity">CONTATO@PANOPTICO.FILMS</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-0">
          <div>LOCALIZADOS NO RIO DE JANEIRO, BRASIL</div>
          <div>DISPONÍVEIS PARA PROJETOS EM TODO O MUNDO</div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <span className="cursor-pointer hover:opacity-40 transition-opacity">INSTAGRAM</span>
          <span className="opacity-40">|</span>
          <span className="cursor-pointer hover:opacity-40 transition-opacity">VIMEO</span>
          <span className="opacity-40">|</span>
          <span className="cursor-pointer hover:opacity-40 transition-opacity">LINKEDIN</span>
        </div>

        {/* Agent Section */}
        <div className="flex flex-col gap-8 mt-4">
          <div className="font-bold tracking-[0.2em]">AGENTE — PANÓPTICO REPRESENTAÇÕES</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-0">
              <div className="font-bold">RODRIGO SILVA</div>
              <div className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity w-fit">
                RODRIGO@PANOPTICO.FILMS
              </div>
              <div className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity w-fit">
                +55 21 98888 7777
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="font-bold">MARINA COSTA</div>
              <div className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity w-fit">
                MARINA@PANOPTICO.FILMS
              </div>
              <div className="underline decoration-black/30 underline-offset-4 cursor-pointer hover:opacity-40 transition-opacity w-fit">
                +55 21 97777 6666
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );

  return (
    <div className="min-h-screen font-sans uppercase tracking-tight text-[12px] text-black/90 font-medium selection:bg-black selection:text-white ink-bleed">
      <div className="paper-grain" />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#fdfdfd] flex items-center justify-center"
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
            className="fixed inset-0 z-[110] bg-[#fdfdfd]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-24"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="max-w-3xl w-full flex flex-col gap-12"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="opacity-40 text-[10px] tracking-[0.2em]">{selectedProject.category}</span>
                  <h3 className="text-xl tracking-[0.3em]">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="hover:opacity-40 transition-opacity text-[10px] tracking-[0.2em]"
                >
                  [ FECHAR ]
                </button>
              </div>
              
              <div className="w-full h-[1px] bg-black/10" />
              
              <p className="text-[13px] leading-relaxed tracking-[0.1em] opacity-80 text-justify">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex justify-between text-[10px] opacity-40">
                  <span>ANO</span>
                  <span>2026</span>
                </div>
                <div className="flex justify-between text-[10px] opacity-40">
                  <span>FORMATO</span>
                  <span>4K DIGITAL / 35MM</span>
                </div>
                <div className="flex justify-between text-[10px] opacity-40">
                  <span>LOCAL</span>
                  <span>RIO DE JANEIRO, BR</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-1.5 md:px-16 bg-transparent border-y border-black/10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="pointer-events-auto cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <span className="opacity-90 tracking-tighter font-bold">PANÓPTICO FILMES</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
          className="flex gap-8 md:gap-12 pointer-events-auto"
        >
          <button 
            onClick={() => setCurrentPage('home')}
            className={`hover:opacity-40 transition-opacity tracking-tighter ${currentPage === 'home' ? 'font-bold' : ''}`}
          >
            TRABALHOS
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className={`hover:opacity-40 transition-opacity tracking-tighter ${currentPage === 'about' ? 'font-bold' : ''}`}
          >
            SOBRE
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`hover:opacity-40 transition-opacity tracking-tighter ${currentPage === 'contact' ? 'font-bold' : ''}`}
          >
            CONTATO
          </button>
          <a href="#" className="hover:opacity-40 transition-opacity tracking-tighter">IG</a>
        </motion.div>
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
      <footer className="pt-16 pb-16 px-6 md:px-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-16">
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
  );
}
