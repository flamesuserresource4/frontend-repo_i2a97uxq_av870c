import { useState } from 'react';
import { ImagePlus, Send, Sparkles, Upload, Wand2 } from 'lucide-react';

const MODELS = [
  { id: 'sd3', name: 'Stable 3D (beta)' },
  { id: 'omni', name: 'OpenAI Omni 3D' },
  { id: 'flux', name: 'Flux Geo Synth' },
  { id: 'gaia', name: 'NVIDIA Gaia 3D' },
];

export default function PromptPanel({ onGenerate }) {
  const [prompt, setPrompt] = useState('A low-poly sci-fi spaceship with glowing blue engines');
  const [image, setImage] = useState(null);
  const [model, setModel] = useState(MODELS[0].id);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage({ file, url: URL.createObjectURL(file) });
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // In a full implementation, this would call the backend API
      // For now we simulate latency and then emit the intent
      await new Promise((r) => setTimeout(r, 1000));
      onGenerate?.({ prompt, image, model });
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white/90">Create with AI</h3>
        <div className="inline-flex items-center gap-2 text-xs text-white/60">
          <Wand2 className="h-4 w-4" /> Multi‑model
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what to build…"
          className="flex-1 rounded-lg border border-white/10 bg-black/30 text-white placeholder-white/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        />
        <label className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 text-white px-3 py-2 hover:bg-black/40 cursor-pointer">
          <ImagePlus className="h-4 w-4" />
          Image
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {MODELS.map((m) => (
          <button
            key={m.id}
            onClick={() => setModel(m.id)}
            className={`rounded-lg px-3 py-2 text-xs border transition ${model === m.id ? 'bg-indigo-500/30 border-indigo-400/40 text-white' : 'bg-black/30 border-white/10 text-white/70 hover:text-white hover:bg-black/40'}`}
          >
            <Sparkles className="inline-block h-3.5 w-3.5 mr-1" />
            {m.name}
          </button>
        ))}
      </div>

      {image && (
        <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
          <img src={image.url} alt="reference" className="w-full h-32 object-cover" />
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 disabled:opacity-60 text-white px-4 py-2 text-sm transition"
        >
          <Send className="h-4 w-4" /> {loading ? 'Generating…' : 'Generate'}
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 text-white/80 hover:bg-black/40 px-3 py-2 text-sm">
          <Upload className="h-4 w-4" /> Import mesh
        </button>
      </div>
    </aside>
  );
}
