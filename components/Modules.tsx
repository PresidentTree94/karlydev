export default function Modules({ title, modules, pricingModules, selectedModules, setSelectedModules }: {
  title: string;
  modules: any[];
  pricingModules: any[];
  selectedModules: Record<string, number | boolean>;
  setSelectedModules: React.Dispatch<React.SetStateAction<Record<string, number | boolean>>>;
}) {

  function toggleModule(module: any) {
    setSelectedModules(prev => {
      const updated = { ...prev };

      if (!module.multiple) {
        updated[module.id] = !prev[module.id];
      } else {
        updated[module.id] = (prev[module.id] as number) > 0 ? 0 : 1;
      }

      const deps: string[] = module.dependsOn ?? [];
      deps.forEach(dep => {
        updated[dep] = true;
      });

      pricingModules.forEach(m => {
        const mDeps: string[] = m.dependsOn ?? [];
        if (mDeps.includes(module.id)) {
          updated[m.id] = m.multiple ? 0 : false;
        }
      });

      return updated;
    });
  }

  return (
    <div>
      <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-4">{title}</h3>
      <div className="space-y-3">
        {modules.map((module: any) => {
          const isSelected = module.multiple ? (selectedModules[module.id] as number) > 0 : (selectedModules[module.id] as boolean);
          return (
            <button key={module.id} className={`flex items-center gap-4 p-4 rounded-xl border border-stone-200 w-full text-left ${module.isDisabled ? "bg-stone-50 opacity-50" : "cursor-pointer"}`} disabled={module.isDisabled} onClick={() => toggleModule(module)}>
              <div className={`w-5 h-5 border-2 rounded ${isSelected ? "border-stone-900 bg-stone-900" : "border-stone-300 bg-transparent"}`}></div>
              <div className="w-8 h-8 bg-stone-100 rounded-lg flex justify-center items-center">
                <i className={`${module.icon} text-stone-600 text-sm`}></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-stone-900">{module.title}</p>
                <p className="text-xs text-stone-500">{module.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-stone-900">${module.price}</p>
                <p className="text-xs text-stone-400">{module.multiple ? "per page" : module.isBuild ? "one-time" : "per month"}</p>
              </div>
              {(module.multiple && isSelected) && <div className="col-span-full flex items-center gap-3">
                <span className="text-xs text-stone-500">Quantity:</span>
                <div className="flex items-center gap-2 border border-stone-200 rounded-lg">
                  <button
                    className="w-7 h-7 flex justify-center items-center text-stone-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedModules(prev => ({...prev, [module.id]: (prev[module.id] as number) - 1}));
                    }}>-</button>
                  <span className="text-sm font-semibold text-stone-900 w-5 text-center">{selectedModules[module.id]}</span>
                  <button
                    className="w-7 h-7 flex justify-center items-center text-stone-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedModules(prev => ({...prev, [module.id]: (prev[module.id] as number) + 1}));
                    }}>+</button>
                </div>
                <span className="text-xs text-stone-500">= <span className="text-stone-800 font-bold">${module.price * (selectedModules[module.id] as number)}</span></span>
              </div>}
            </button>
        )})}
      </div>
    </div>
  );
}