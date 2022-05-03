const copyBTN = document.getElementById('copyBTN'),
quoteBTN = document.querySelector('.quote_here'),
authorName = document.querySelector('.author_name'),
speakBTN = document.querySelector('#speak_button'),
nextQuote = document.querySelector('#nextQuote'),
tweetBTN = document.querySelector('#tweets');
let url = `https://twitter.com/intent/tweet?url=${quoteBTN.innerText} by ${authorName.innerText}`;
let quoteURL = 'https://api.quotable.io/random'


fetch(quoteURL).then(res => res.json())
    .then(result =>{
        quoteBTN.innerText = result.content
        authorName.innerText = `- ${result.author}`
    })
nextQuote.addEventListener("click", ()=>{
    nextQuote.innerText = 'Loding Quote...'
    fetch(quoteURL).then(res => res.json())
    .then(result =>{
        quoteBTN.innerText = result.content
        authorName.innerText = `- ${result.author}`
        nextQuote.innerText = 'Next Quote'
    })
})

speakBTN.addEventListener("click", ()=>{
    let spk = new SpeechSynthesisUtterance(`${quoteBTN.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(spk)
})

tweetBTN.addEventListener("click", ()=>{
    window.open(url)
})

copyBTN.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteBTN.innerText)
})