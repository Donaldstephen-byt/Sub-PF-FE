// import { useState } from "react";
 export const profileOpenCard1 = () => {
    // const [profileOpen , setProfileOpen] = useState(false) ;
    const profileOpen = true
    
  return (
    <>
      {profileOpen && (
        <div
          role="menu"
          aria-label="Profile options"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-white/75 backdrop-blur-sm border border-white/20
                             shadow-md py-2 ring-1 ring-black/5"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
            role="menuitem"
          >
            My Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
            role="menuitem"
          >
            Settings
          </a>
          <div className="border-t border-white/30 my-1" />
          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            role="menuitem"
            onClick={() => {
              /* handle logout placeholder */
              alert("Logout clicked");
            }}
          >
            Logout
          </button>
        </div>
      )}
      ;
    </>
  );
}

export const profileOpenCard2 = () => {
    const profileOpen = true;
     <>
       {profileOpen && (
         <div
           role="menu"
           aria-label="Presence and availability"
           className="absolute right-0 mt-2 w-64 rounded-xl
               bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
               border border-slate-200/60 dark:border-slate-700/60
               shadow-lg py-3 ring-1 ring-black/5"
         >
           {/* STATUS */}
           <div className="px-4 pb-2">
             <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
               Status
             </p>

             <div className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
               <div className="flex items-center gap-2">
                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
                 Available for freelance
               </div>

               <div className="flex items-center gap-2">
                 <span className="h-2 w-2 rounded-full bg-indigo-500" />
                 Open to full-time roles
               </div>
             </div>
           </div>

           <div className="border-t border-slate-200/60 dark:border-slate-700/60 my-2" />

           {/* NOW */}
           <div className="px-4 pb-2">
             <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
               Now
             </p>

             <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
               🛠 Building <span className="font-medium">Portfolio v2</span>
             </p>
           </div>

           <div className="border-t border-slate-200/60 dark:border-slate-700/60 my-2" />

           {/* LOCATION */}
           <div className="px-4">
             <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
               Location
             </p>

             <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
               📍 Remote / Hybrid (EU-friendly)
             </p>
           </div>
         </div>
       )}
     </>;
}