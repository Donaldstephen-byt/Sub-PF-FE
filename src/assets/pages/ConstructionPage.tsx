import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Stars, 
  Float, 
  Sparkles,
  Text,
  Cylinder,
  Box,
  Sphere
} from "@react-three/drei";
import * as THREE from "three";

const QuantumComputer = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, 2, 0]}>
      <Cylinder args={[0.1, 0.1, 8, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </Cylinder>

      <Cylinder args={[1.5, 1.5, 0.2, 64]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.15} />
      </Cylinder>
      
      <Cylinder args={[1.2, 1.2, 0.2, 64]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.15} />
      </Cylinder>
      
      <Cylinder args={[0.8, 0.8, 0.2, 64]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.15} />
      </Cylinder>
      
      <Cylinder args={[0.2, 0.2, 0.5, 32]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
      </Cylinder>

      {[...Array(8)].map((_, i) => (
        <Cylinder 
            key={i} 
            args={[0.02, 0.02, 4, 8]} 
            position={[Math.sin(i) * 0.5, 0, Math.cos(i) * 0.5]}
        >
            <meshStandardMaterial color="#b8860b" metalness={1} />
        </Cylinder>
      ))}
    </group>
  );
};

const Scientist = ({ 
  position, 
  rotation, 
  action = "idle" 
}: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  action?: "welding" | "typing" | "tablet" | "idle"
}) => {
  const laserRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    // Animate Laser
    if (action === "welding" && laserRef.current) {
        laserRef.current.visible = Math.random() > 0.1; // Flicker
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        
        <Sphere args={[0.25, 32, 32]} position={[0, 1.6, 0]}>
           <meshStandardMaterial color="#ffdbac" />
        </Sphere>
        <Box args={[0.3, 0.08, 0.1]} position={[0, 1.6, 0.2]}>
            <meshStandardMaterial color="#000" />
        </Box>

        <Cylinder args={[0.15, 0.3, 0.9, 32]} position={[0, 0.9, 0]}>
            <meshStandardMaterial color="white" />
        </Cylinder>
        <Cylinder args={[0.08, 0.08, 0.8, 16]} position={[-0.15, 0, 0]}>
            <meshStandardMaterial color="#1e293b" />
        </Cylinder>
        <Cylinder args={[0.08, 0.08, 0.8, 16]} position={[0.15, 0, 0]}>
            <meshStandardMaterial color="#1e293b" />
        </Cylinder>

        {action === "welding" && (
           <group position={[0.3, 1.1, 0.2]} rotation={[0, 0, -0.5]}>
              <Cylinder args={[0.06, 0.06, 0.6]} />
              <Box args={[0.1, 0.3, 0.1]} position={[0, -0.4, 0]}>
                 <meshStandardMaterial color="#555" />
              </Box>
              <mesh ref={laserRef} position={[0, -1, 0]}>
                 <cylinderGeometry args={[0.02, 0.02, 1.5]} />
                 <meshBasicMaterial color="#00ffff" />
              </mesh>
           </group>
        )}

        {action === "tablet" && (
           <group position={[0, 1, 0.4]} rotation={[-0.5, 0, 0]}>
              <Box args={[0.4, 0.5, 0.05]}>
                 <meshStandardMaterial color="#333" />
              </Box>
              <Box args={[0.35, 0.45, 0.06]} position={[-0,0,0]}>
                 <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
              </Box>
           </group>
        )}

        {action === "typing" && (
            <group position={[0, 1, 0.5]}>
                <Box args={[0.6, 0.02, 0.3]} rotation={[0.2, 0, 0]}>
                    <meshBasicMaterial color="#00ffff" transparent opacity={0.3} wireframe />
                </Box>
            </group>
        )}
      </Float>
    </group>
  );
};

const ConstructionScene = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[5, 1, 6]} />
      <OrbitControls enableZoom={true} maxDistance={15} minDistance={2} autoRotate autoRotateSpeed={0.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#00ffff" />
      <QuantumComputer />
      <Scientist 
         position={[2, 1.5, 1]} 
         rotation={[0, -1, 0]} 
         action="welding" 
      />
      <Sparkles count={20} scale={2} size={4} position={[1, 1, 1]} speed={2} color="orange" />
      <Scientist 
         position={[-1.5, -1, 2]} 
         rotation={[0, 0.5, 0]} 
         action="tablet" 
      />
      <Scientist 
         position={[0, 0, -3]} 
         rotation={[0, 3, 0]} 
         action="typing" 
      />
      <Float speed={1.5}>
        <Text 
           position={[2.5, 2.5, 1]} 
           fontSize={0.2} 
           color="#00ffff"
           font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
        >
           SYSTEM_CHECK: 98%
        </Text>
      </Float>

    </Canvas>
  );
};

const fullSequence = [
  "> ALLOCATING RESOURCES: SECTOR 4",
  "> COMPILING NEURAL ARCHITECTURE...",
  "> WELDING UI COMPONENTS... [OK]",
  "> INITIALIZING COMPONENT TREE...",
  "> WARNING: PERFECTION TAKES TIME",
  "> AUTOMATED BUILDERS AT 74% CAPACITY"
];

const ConstructionTerminal = () => {
  const [logs, setLogs] = useState<string[]>(["> INITIALIZING ASSEMBLY SEQUENCE..."]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullSequence.length) {
        setLogs(prev => [...prev, fullSequence[index]]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md bg-black/50 border border-indigo-500/20 rounded-xl p-4 font-mono text-xs text-cyan-400/70 h-32 overflow-hidden relative backdrop-blur-md">
      <div className="flex items-center gap-2 mb-2 border-b border-indigo-500/20 pb-2 text-indigo-300">
        <Terminal size={14} />
        <span className="tracking-widest uppercase text-[10px]">Build_Logs.exe</span>
      </div>
      <div className="space-y-1 flex flex-col justify-end">
        {logs.map((log, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            {log}
          </motion.div>
        ))}
        <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.div>
      </div>
    </div>
  );
};

export default function UnderConstructionPage() {
  return (
    <div className="h-screen w-full sm:pt-10 md:pt-0"><div className="fixed inset-0 z-[10] w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ConstructionScene />
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[10%] z-10 pointer-events-none"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_120%)] z-10 pointer-events-none"></div>

      {/* --- LAYER 4: UI OVERLAY (SPLIT LAYOUT) --- */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 pointer-events-none max-w-[1600px] mx-auto">
        
        {/* LEFT PANEL: Text & Navigation */}
        <div className="flex flex-col items-start text-left space-y-8 max-w-xl pointer-events-auto mt-10 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
                 <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 w-fit backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        Sector Under Development
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                    <span className="text-[26px] mr-2">😊</span>System <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Upgrade</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-md border-l-2 border-cyan-500/30 pl-4 bg-gradient-to-r from-cyan-500/5 to-transparent py-2">
                    Deployment sequences are still underway as I finalize this sector’s platform systems. Core modules are scaling and stabilizing for public release.

                </p>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              onClick={() => window.history.back()}
              className="group flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm backdrop-blur-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-cyan-400" />
              <span>Return to Home</span>
            </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-end space-y-6 pointer-events-auto mt-12 md:mt-0 w-full md:w-auto"
        >
             <div className="relative group">
                {/* Decorative brackets */}
                <div className="absolute -left-2 -top-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500/30"></div>
                <div className="absolute -right-2 -bottom-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500/30"></div>
                
                <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-lg w-full md:w-96 shadow-2xl">
                   <ConstructionTerminal />
                </div>
             </div>
             
             {/* Decorative HUD Element */}
             <div className="flex gap-8 text-[10px] text-cyan-500/40 font-mono tracking-widest uppercase">
                <div className="flex flex-col items-end">
                  <span>Render Time</span>
                  <span className="text-cyan-400">12ms</span>
                </div>
                 <div className="flex flex-col items-end">
                  <span>Fiber Updates</span>
                  <span className="text-cyan-400">64</span>
                </div>
                 <div className="flex flex-col items-end">
                  <span>Build</span>
                  <span className="text-cyan-400">v.2.0.0</span>
                </div>
             </div>
        </motion.div>

      </div>
    </div></div>
  );
}

export const QuantumLab = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <ConstructionScene />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center max-w-2xl"
         >
            <div className="inline-block px-3 py-1 mb-4 border border-yellow-500/50 rounded-full bg-yellow-500/10">
               <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest animate-pulse">
                 ⚠ Restricted Area: Construction Zone
               </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                Next Generation
              </span>
            </h1>
            
            <p className="text-slate-300 font-light mb-8">
               Our engineers are currently assembling the quantum logic gates required for this section. 
               Please check back once the system stabilizes.
            </p>

            <a 
              href="/" 
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors"
            >
               <ArrowLeft size={18} />
               Return Home
            </a>
         </motion.div>
      </div>

    </div>
  );
};