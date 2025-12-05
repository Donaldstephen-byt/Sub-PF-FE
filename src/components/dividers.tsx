// to be use across the platform for clarity purposes 
function Dividers() {
  return (
    <div>
      {/* FIRST DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 w-full my-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
        <div className="mt-1 flex justify-center gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-indigo-500/40"
            ></div>
          ))}
        </div>
      </div>
      {/* SECOND DIVIDER */}

      <div
        className="sm:col-span-2 lg:col-span-3 h-[2px] w-full my-6 
  bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent 
  shadow-[0_0_25px_4px_rgba(99,102,241,0.2)]"
      ></div>

      {/* THIRD DIVIDER */}

      <div className="sm:col-span-2 lg:col-span-3 my-6 w-full flex flex-col gap-1">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-70"></div>
      </div>

      {/* FOURTH DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 w-full my-6 flex justify-center">
        <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent relative">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          ></div>
        </div>
      </div>

      {/* FIFTH DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 w-full my-6 flex items-center">
        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="mx-3 w-3 h-3 rotate-45 bg-indigo-500/60 shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>

      {/* SIXTH DIVIDER */}
      <div
        className="sm:col-span-2 lg:col-span-3 w-full my-6 h-[2px] 
  bg-indigo-400/20 blur-sm"
      ></div>

      {/* SEVENTH DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 h-px w-full my-2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

      {/* EIGHTH DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 relative w-full my-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent blur-[1px]"></div>
        <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      </div>

      {/* NINTH DIVIDER */}
      <div className="sm:col-span-2 lg:col-span-3 relative my-8 w-full flex items-center">
        <div className="flex-grow h-[1px] bg-lineaar-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="mx-3 h-3 w-3 rotate-45 bg-indigo-500/50 shadow-md shadow-indigo-500/30"></div>
        <div className="flex-grow h-[1px] bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      </div>

      {/* TENTH DIVIER */}
      <div className="sm:col-span-2 lg:col-span-3 w-full my-8">
        <div className="relative w-full">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>
          <div className="absolute inset-0 h-[6px] bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent blur-md"></div>
        </div>
          </div>
    </div>
  );
}
export default Dividers;
