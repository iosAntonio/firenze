window.mapSection = {
  points: [
    {
      label: 'Punto 1',
      title: 'Piazza del Duomo',
      address: 'Duomo di Firenze, Firenze'
    },
    {
      label: 'Punto 2',
      title: 'Piazza della Signoria',
      address: 'Piazza della Signoria, Firenze'
    }
  ]
};

window.renderMapSection = function () {
  const container = document.getElementById('map-cards-container');
  if (!container) return;

  container.innerHTML = window.mapSection.points.map((point) => `
    <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
      <p class="text-sm font-bold text-amber-900 mb-3">${point.label} — ${point.title}</p>
      <iframe
        src="https://www.google.com/maps?q=${encodeURIComponent(point.address)}&output=embed"
        width="100%"
        height="300"
        class="w-full rounded-xl border-0 shadow-sm"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mappa di ${point.title}">
      </iframe>
    </div>
  `).join('');
};
