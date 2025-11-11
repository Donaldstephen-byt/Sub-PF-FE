import { Sidebar, LefIndexCard } from "../../components/HomeComponents";

function Home() {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center gap-4 items-center mt-4 min-h-screen">
        <div className="py-4 border border-slate-500/70 w-full mx-6 rounded-3xl pl-2 flex justify-between flex-row">
          {" "}
          <Sidebar />
          <div className="personal-info ">
            <div className="grid grid-cols gap-5 h-full">
              <div className="rounded-e-3xl h-full w-220 mr-3 mt-1 border border-slate-500/70 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]">
                <div className="w-full  relative overflow-hidden h-full">
                  <div className="relative text-center items-center px-10  z-1000 font-bold text-lg">
                    content here!!!
                  </div>
                  <div className="absolute gear-1 left-10 bottom-8">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                      <path
                        d="M50,20 L55,35 L70,30 L65,45 L80,50 L65,55 L70,70 L55,65 L50,80 L45,65 L30,70 L35,55 L20,50 L35,45 L30,30 L45,35 Z"
                        fill="#6B7280"
                        stroke="#4B5563"
                        stroke-width="2"
                      />
                      <circle cx="50" cy="50" r="18" fill="#1F2937" />
                    </svg>
                  </div>

                  <div className="absolute gear-2 left-28 top-20">
                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <path
                        d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
                        fill="#6B7280"
                        stroke="#4B5563"
                        stroke-width="2"
                      />
                      <circle cx="50" cy="50" r="20" fill="#1F2937" />
                    </svg>
                  </div>

                  <div className="absolute gear-3 right-24 bottom-9">
                    <svg width="75" height="75" viewBox="0 0 100 100">
                      <path
                        d="M50,22 L54,36 L68,32 L64,46 L78,50 L64,54 L68,68 L54,64 L50,78 L46,64 L32,68 L36,54 L22,50 L36,46 L32,32 L46,36 Z"
                        fill="#6B7280"
                        stroke="#4B5563"
                        stroke-width="2"
                      />
                      <circle cx="50" cy="50" r="16" fill="#1F2937" />
                    </svg>
                  </div>

                  <div className="absolute gear-4 -right-16 top-5">
                    <svg width="140" height="140" viewBox="0 0 100 100">
                      <path
                        d="M50,10 L58,28 L76,20 L70,38 L90,42 L75,55 L90,62 L70,66 L76,84 L58,76 L50,94 L42,76 L24,84 L30,66 L10,62 L25,55 L10,42 L30,38 L24,20 L42,28 Z"
                        fill="#6B7280"
                        stroke="#4B5563"
                        stroke-width="2"
                      />
                      <circle cx="50" cy="50" r="22" fill="#1F2937" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="rounded-e-3xl h-full w-220 mr-3 mt-1 border border-slate-500/70 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)] py-6"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-4 items-center mt-4">
          {" "}
          {/* <LefIndexCard />{" "} */}
        </div>
      </div>
    </>
  );
}

export default Home;
