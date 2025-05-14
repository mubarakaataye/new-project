const addBtn = document.getElementById('addBtn'); const seriesContainer = document.getElementById('seriesContainer');

addBtn.addEventListener('click', () => { const seriesName = document.getElementById('seriesName').value; const episode = document.getElementById('episode').value; const imgUrl = document.getElementById('imgUrl').value;

if (seriesName && episode && imgUrl) { const seriesCard = document.createElement('div'); seriesCard.className = 'bg-white p-4 rounded-lg shadow-md w-48 flex flex-col items-center';

const img = document.createElement('img');
img.src = imgUrl;
img.alt = seriesName;
img.className = 'w-full h-32 object-cover mb-2';

const nameEl = document.createElement('h2');
nameEl.className = 'text-lg font-bold';
nameEl.textContent = seriesName;

const episodeEl = document.createElement('p');
episodeEl.className = 'text-gray-500';
episodeEl.textContent = Episode: ${episode};

seriesCard.appendChild(img);
seriesCard.appendChild(nameEl);
seriesCard.appendChild(episodeEl);
seriesContainer.appendChild(seriesCard);

document.getElementById('seriesName').value = '';
document.getElementById('episode').value = '';
document.getElementById('imgUrl').value = '';

} });