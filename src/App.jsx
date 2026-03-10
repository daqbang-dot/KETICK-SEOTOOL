import React, { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('');

  const keywords = [
    { term: "seo tool malaysia", rank: 3, volume: "1.2k", diff: "Easy" },
    { term: "ketick os review", rank: 1, volume: "500", diff: "Medium" },
    { term: "klinik yakin bahau", rank: 2, volume: "3.4k", diff: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-6">
        <h1 className="text-2xl font-black text-blue-600 tracking-tight">KETICK SEO 🚀</h1>
        <p className="text-gray-500 text-sm italic">All-platform visibility tracker</p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-6 flex gap-2">
        <input 
          className="flex-1 p-3 rounded-xl border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder="Masukkan URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold shadow-md">
          Cek
        </button>
      </div>

      {/* Mini Stats */}
      <div className="max-w-xl mx-auto grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-400 font-bold uppercase">Traffic</p>
          <p className="text-xl font-black text-gray-800">12.5k</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-400 font-bold uppercase">Health</p>
          <p className="text-xl font-black text-emerald-500">98%</p>
        </div>
      </div>

      {/* Keywords Table (Mobile Optimized) */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <h2 className="font-bold text-sm">Top Performance</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {keywords.map((kw, i) => (
            <div key={i} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">{kw.term}</p>
                <p className="text-xs text-gray-400">Vol: {kw.volume}</p>
              </div>
              <div className="text-right">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-xs font-black">
                  #{kw.rank}
                </span>
                <p className={`text-[10px] mt-1 font-bold ${kw.diff === 'Easy' ? 'text-emerald-500' : 'text-orange-500'}`}>
                  {kw.diff.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
