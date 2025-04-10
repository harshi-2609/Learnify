function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// Example progress update function
function updateProgress(value) {
    document.getElementById('progress-fill').style.width = value + '%';
    document.getElementById('progress-text').innerText = value + '%';
}

// Simulate progress update after 3 seconds
setTimeout(() => updateProgress(70), 3000);
