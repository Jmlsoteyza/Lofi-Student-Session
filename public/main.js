

// sidebar buttons
const youtubeSearchContainer = document.querySelector('.youtube-search-api');
const sidebarBtn = document.querySelector('.sidebar-btn');
const youtubebtnClose = document.querySelector('.youtube-btnClose');

sidebarBtn.addEventListener('click', () => {
	const visibility = youtubeSearchContainer.getAttribute('data-visible');

    if (visibility === "false") {
        youtubeSearchContainer.setAttribute("data-visible", true);
        sidebarBtn.setAttribute("aria-expanded", true);
    } else if (visibility === 'true') {
        youtubeSearchContainer.setAttribute("data-visible", false);
		youtubebtnClose.setAttribute("aria-expanded", false);
        sidebarBtn.setAttribute("aria-expanded", false);
		
    }
})

youtubebtnClose.addEventListener('click', () => {
	const visibility = youtubeSearchContainer.getAttribute('data-visible');
	if (visibility === "true") {
		youtubeSearchContainer.setAttribute("data-visible", false);
		youtubebtnClose.setAttribute("aria-expanded", false);
	}
})

// youtube API

const API_KEY = 'AIzaSyDhtvMhV9WOtopj0nN9ZX6SrL4nQJ7Wu9o';
const searchForm = document.getElementById('search-form');
const searchQuery = document.getElementById('search-query');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', e => {
	e.preventDefault();

	const query = searchQuery.value.trim();

	if (query.length > 0) {
		searchYouTube(query);
	}
});

function searchYouTube(query) {
	fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`)
		.then(response => response.json())
		.then(data => {
			const videos = data.items.map(item => {
				return {
					title: item.snippet.title,
					description: item.snippet.description,
					thumbnail: item.snippet.thumbnails.medium.url,
					videoId: item.id.videoId,
					channelTitle: item.snippet.channelTitle
				};
			});

			displayResults(videos);
		})
}

function displayResults(videos) {
	resultsContainer.innerHTML = '';

	videos.forEach(video => {
		const videoElement = `
			<div class="video">
				<a href="#" data-video-id="${video.videoId}">
					<img src="${video.thumbnail}" alt="${video.title}">
					<h2>${video.title}</h2>
				</a>
				<p>${video.description}</p>
				<p>Channel: ${video.channelTitle}</p>
			</div>
		`;
		resultsContainer.innerHTML += videoElement;
	});

	// Add event listener to all video links
	const videoLinks = document.querySelectorAll('.video a');
	videoLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const videoId = link.getAttribute('data-video-id');
			const videoFrame = `
				<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			`;
			resultsContainer.innerHTML = videoFrame;
		});
	});
}


