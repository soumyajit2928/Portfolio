document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.second-h1');
    let i = 0;
    const text = "I am Soumyajit2928. I am a Web Designer And Builder.";
    setInterval(() => {
        if (i < text.length) {
            header.textContent += text[i];
            i++;
        }
    }, 150);
});