// JavaScript code to handle button actions

document.addEventListener("DOMContentLoaded", function() {
    const messageElement = document.querySelector(".message p");
    const originalText = messageElement.textContent;

    document.querySelector(".action-button").addEventListener("click", function() {
        alert("Surprise! Here's a love note or memory.");
    });
});

function showPictures(type) {
    const picturesContainer = document.getElementById('pictures');
    picturesContainer.innerHTML = '';

    const pictures = type === 'boyfriend' ? ['boyfriend1.jpg', 'boyfriend2.jpg', 'boyfriend3.jpg'] : ['girlfriend1.jpg', 'girlfriend2.jpg', 'girlfriend3.jpg'];

    pictures.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${type} picture`;
        picturesContainer.appendChild(img);

        setTimeout(() => {
            img.classList.add('show');
        }, 100);
    });

    picturesContainer.style.display = 'block';
}

function openNewPage() {
    document.getElementById('mainWindow').style.display = 'none';
    document.getElementById('newPage').style.display = 'block';
}

function closeWindow() {
    document.getElementById('mainWindow').style.display = 'block';
    document.getElementById('newPage').style.display = 'none';
}