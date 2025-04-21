import './scss/style.scss';
// import './server/server.js';


const quoteText = document.querySelector('.quote-generator__area-paragraph');
const quoteGenerateButton = document.querySelector('.quote-generator__link');

quoteGenerateButton.addEventListener('click', async() => {
    try {
        const response = await fetch('https://joke-generator-api-project.onrender.com/random');
        console.log(JSON.stringify(response))
        const data = await response.json();
        quoteText.innerHTML = `${data.setup} <br><br> ${data.punchline}`;
    } catch (error) {
        console.log(error);
    }
})

console.log(quoteText);
