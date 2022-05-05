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
        quoteBTN.innerHTML = `<span><i class="lQuote fa-solid fa-quote-left"></i></span>${result.content}<span><i class="rQuote fa-solid fa-quote-right"></i></span>`
        authorName.innerText = `- ${result.author}`
    })
    
    nextQuote.addEventListener("click", ()=>{
        nextQuote.innerText = 'Loding Quote...'
        fetch(quoteURL).then(res => res.json())
        .then(result =>{
        quoteBTN.innerHTML = `<span><i class="lQuote fa-solid fa-quote-left"></i></span>${result.content}<span><i class="rQuote fa-solid fa-quote-right"></i></span>`
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