import { useState } from 'react';
import { Archive, Download } from 'lucide-react';

const FORMATS = [
  { id: 'obj', label: 'OBJ' },
  { id: 'fbx', label: 'FBX' },
  { id: 'stl', label: 'STL' },
  { id: 'gltf', label: 'GLTF' },
  { id: 'glb', label: 'GLB' },
  { id: 'usd', label: 'USD' },
  { id: 'usdz', label: 'USDZ' },
];

export default function ExportPanel() {
  const [selected, setSelected] = useState(['glb']);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleExport = async () => {
    // In a full app, this would request the backend to export selected formats
    await new Promise((r) => setTimeout(r, 600));
    alert(`Exported: ${selected.join(', ').toUpperCase()}`);
  };

  return (
    <aside className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white/90">Export</h3>
        <Archive className="h-4 w-4 text-white/60" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            onClick={() => toggle(f.id)}
            className={`rounded-lg px-3 py-2 text-xs border transition text-center ${selected.includes(f.id) ? 'bg-emerald-500/30 border-emerald-400/40 text-white' : 'bg-black/30 border-white/10 text-white/70 hover:text-white hover:bg-black/40'}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <button
        onClick={handleExport}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2 text-sm transition"
      >
        <Download className="h-4 w-4" /> Download
      </button>
    </aside>
  );
}
