window.mapSection = {
  mapEmbedUrl: 'https://www.google.com/maps/d/u/0/embed?mid=1YkshW4LC_Oj4-mUH6f7YYIbvUEYK6XM'
};

window.renderMapSection = function () {
  const container = document.getElementById('map-cards-container');
  if (!container) return;

  container.innerHTML = `
    <div class="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm md:col-span-2">
      <iframe
        src="${window.mapSection.mapEmbedUrl}"
        width="100%"
        height="520"
        class="w-full rounded-xl border-0 shadow-sm"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mappa di Firenze">
      </iframe>
    </div>
  `;
};
