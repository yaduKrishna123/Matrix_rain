function randomText() {
    const text = "!2#$%^&*(){}";
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    const cloud = document.querySelector('.cloud');

    for (let i = 0; i < 50; i++) { 
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.innerText = randomText();

        const left = Math.random() * 100; 
        const size = Math.random() * 1.5;
        drop.style.left = `${left}vw`;
        drop.style.fontSize = `${0.5 + size}em`;

        cloud.appendChild(drop);

        setTimeout(() => {
            cloud.removeChild(drop);
        }, 2000);
    }
}
setInterval(rain,100)