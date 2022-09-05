








const quotes = [{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
},
{quote: "The way to get started is to quit talking and begin doing. ",
author:"Walt Disney",},
{quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
author:"Steve Jobs"},
{quote: "If life were predictable it would cease to be life, and be without flavor",
author:"Eleanor Roosevelt"},
{quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
author:"Oprah Winfrey"},
{quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
author:"James Cameron"},
{quote: "Life is what happens when you're busy making other plans.",
author:"John Lennon"},
{quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
author:"Mother Teresa"},
{quote: "Always remember that you are absolutely unique. Just like everyone else.",
author:"Margaret Mead"},
{quote: "The future belongs to those who believe in the beauty of their dreams.",
author:"Eleanor Roosevelt"},
];


const quote= document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")


const todayQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;





// Math.random()에다가 10을 곱하면 0에서 10사이의 숫자들을 얻을 수 있다.
// Math.round 의 기능은 자동으로 소수점을 없애주면서 높임과 낮힘을 해준다.
// 예로 들어서 Math.round(3.6)은 4로 나온다.


//Math.ceil(1.1)은 그냥 걍 높여준다. 1.1은 2로 1.3도 2로

// Math.floor(1.9)은 반대 개념이다. 낮추어 준다. 1.3는 1.0으로