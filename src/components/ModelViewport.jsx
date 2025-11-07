import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Maximize2, Minimize2, Move3D, Camera } from 'lucide-react';

export default function ModelViewport() {
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);

  return (
    <section className={`relative ${fullscreen ? 'fixed inset-0 z-50' : 'h-[520px]'} w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40`}
      ref={containerRef}
    >
      <Spline 
        scene="https://prod.spline.design/Ge9tqmkCzpc6J3e6/scene.splinecode" 
        style={{ width: '100%', height: '100%' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          onClick={() => setFullscreen(!fullscreen)}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 backdrop-blur px-3 py-2 text-xs text-white hover:bg-white/20 transition"
        >
          {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          {fullscreen ? 'Exit full screen' : 'Full screen'}
        </button>
      </div>

      <div className="absolute left-3 bottom-3 flex items-center gap-2 text-white/80 text-xs">
        <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 border border-white/10"><Move3D className="h-3 w-3"/>Orbit</span>
        <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 border border-white/10"><Camera className="h-3 w-3"/>Pan</span>
      </div>
    </section>
  );
}
