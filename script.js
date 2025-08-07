// API ключ удален из соображений безопасности
const API_KEY = 'YOUR_API_KEY_HERE';

function analyzeVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
        document.getElementById('results').innerHTML = '<p>Неверная ссылка на видео</p>';
        return;
    }
    
    // Здесь будет код для работы с YouTube API
    document.getElementById('results').innerHTML = `
        <h3>Анализ видео</h3>
        <p>ID видео: ${videoId}</p>
        <p>Функционал API будет добавлен позже</p>
    `;
}

function extractVideoId(url) {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
