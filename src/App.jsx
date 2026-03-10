import React, { useState } from 'react';
import { Search, TrendingUp, Globe, AlertCircle } from 'lucide-react';

// Komponen Kecil untuk Statistik
const StatCard = ({ title, value, change, icon: Icon }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-slate-800">{value}</h3>
      </div>
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon size={20} />
      </div>
    </div>
    <p className={`text-xs mt-3 font-semibold ${change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
      {change >= 0 ? '+' : ''}{change}% <span className="text-slate-400 font-normal">berbanding bulan lepas</span>
    </p>
  </div>
);

export default function SEODashboard() {
  const [url, setUrl] = useState('');

  // Contoh data (Nanti kita tarik dari Firebase/API)
  const keywords = [
    { term: "seo tool malaysia", rank: 3, volume: "1.2k", difficulty: "Easy" },
    { term: "cara naikkan ranking google", rank: 1, volume: "850", difficulty: "Medium" },
    { term: "ai search optimization", rank: 12, volume: "3.4k", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      {/* Search Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold mb-2 tracking-tight">SEO Power Hub 🚀</h1>
        <p className="text-slate-500 mb-6">Analisa visibility website anda di semua platform.</p>
        
        <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-md border border-slate-200">
          <input 
            type="text" 
            placeholder="Masukkan URL website (cth: mybisnes.com)..."
            className="flex-1 px-4 py-3 outline-none rounded-xl bg-transparent text-sm"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
            <Search size={18} /> Analisa
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Domain Authority" value="42/100" change={2.4} icon={Globe} />
        <StatCard title="Organic Traffic" value="12,450" change={15.8} icon={TrendingUp} />
        <StatCard title="Technical Issues" value="7" change={-40.0} icon={AlertCircle} />
      </div>

      {/* Keywords Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-bold text-lg text-slate-800">Top Keywords</h2>
          <button className="text-sm text-blue-600 font-semibold hover:underline">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-500">Keyword</th>
                <th className="px-6 py-4 font-semibold text-slate-500 text-center">Rank</th>
                <th className="px-6 py-4 font-semibold text-slate-500 text-center">Volume</th>
                <th className="px-6 py-4 font-semibold text-slate-500 text-center">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {keywords.map((kw, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">{kw.term}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-bold text-xs border border-blue-100">
                      #{kw.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-600">{kw.volume}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-xs font-bold ${
                      kw.difficulty === 'Easy' ? 'text-emerald-500' : 
                      kw.difficulty === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                    }`}>
                      {kw.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
