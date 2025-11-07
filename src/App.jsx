import { useState } from 'react';
import Header from './components/Header';
import ModelViewport from './components/ModelViewport';
import PromptPanel from './components/PromptPanel';
import ExportPanel from './components/ExportPanel';

function App() {
  const [lastGen, setLastGen] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B0B10] text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <ModelViewport />

          {lastGen && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">
                Last request: "{lastGen.prompt}" · Model: <span className="text-white">{lastGen.model}</span>
              </p>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <PromptPanel onGenerate={(data) => setLastGen(data)} />
          <ExportPanel />
        </div>
      </main>

      <footer className="py-8 text-center text-white/50 text-sm">
        Built for creators. Exports to OBJ, FBX, STL, GLTF/GLB, USD/USDZ.
      </footer>
    </div>
  );
}

export default App;
