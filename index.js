import './scss/style.scss';
// import './server/server.js';


const quoteText = document.querySelector('.quote-generator__area-paragraph');
const quoteGenerateButton = document.querySelector('.quote-generator__link');

quoteGenerateButton.addEventListener('click', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/random');
        console.log(JSON.stringify(response))
        const data = await response.json();
        quoteText.innerHTML = `${data.setup} <br><br> ${data.punchline}`;
    } catch (error) {
        console.log(error);
    }
})

console.log(quoteText);
