/**
 * API Handler untuk SEO Master Tool
 * Menggunakan Google PageSpeed Insights API
 */

async function startAudit() {
    const urlInput = document.getElementById('urlInput').value;
    const reportBox = document.getElementById('results');
    const content = document.getElementById('reportContent');

    // 1. Validasi URL ringkas
    if (!urlInput.startsWith('http')) {
        alert("Sila masukkan URL penuh (termasuk https://)");
        return;
    }

    // Paparkan loading state
    reportBox.classList.remove('hidden');
    content.innerHTML = `
        <div class="flex flex-col items-center justify-center p-6">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p class="mt-4 text-gray-600 font-medium">Google sedang menganalisis ${urlInput}...</p>
        </div>
    `;

    try {
        // 2. Panggil API (Strategi: Desktop Analysis untuk kelajuan)
        const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(urlInput)}&category=SEO&category=PERFORMANCE`;
        
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // 3. Ekstrak Skor (Skor diberikan dalam decimal 0-1, kita tukar ke peratus)
        const seoScore = data.lighthouseResult.categories.seo.score * 100;
        const perfScore = data.lighthouseResult.categories.performance.score * 100;
        const auditItems = data.lighthouseResult.categories.seo.auditRefs;

        // 4. Paparkan Keputusan
        content.innerHTML = `
            <div class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <span class="block text-3xl font-bold text-green-600">${seoScore}%</span>
                        <span class="text-xs uppercase font-bold text-gray-500">Skor SEO</span>
                    </div>
                    <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <span class="block text-3xl font-bold text-blue-600">${perfScore}%</span>
                        <span class="text-xs uppercase font-bold text-gray-500">Prestasi</span>
                    </div>
                </div>

                <div>
                    <h3 class="font-bold text-gray-700 mb-2 border-b pb-1">Analisis Teknikal:</h3>
                    <ul class="text-sm space-y-2">
                        ${auditItems.slice(0, 5).map(item => `
                            <li class="flex items-center text-gray-600">
                                <span class="mr-2">✅</span> ${item.id.replace(/-/g, ' ')}
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <button onclick="location.reload()" class="w-full text-xs text-gray-400 hover:text-blue-500 underline">
                    Buat Carian Baru
                </button>
            </div>
        `;

    } catch (error) {
        content.innerHTML = `
            <div class="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                <strong>Ralat:</strong> ${error.message}
            </div>
        `;
    }
}
