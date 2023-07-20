
var quotes = [
{qoute:"“Be yourself; everyone else is already taken.”",
auther:"― Oscar Wilde"},
{qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
auther:"― Marilyn Monroe"},
{qoute:"“Be yourself; everyone else is already taken.”",
auther:"― Oscar Wilde"},
{qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
auther:"― Albert Einstein"},
{qoute:"“So many books, so little time.”",
auther:"― Frank Zappa"},
{qoute:"“A room without books is like a body without a soul.”",
auther:"― Marcus Tullius Cicero"},
];








function randomClick() {
   var randomQuotes = quotes[Math.floor(Math.random() * quotes.length) ] ;
   

document.getElementById("quote").innerHTML=randomQuotes.qoute;
document.getElementById("auther").innerHTML=randomQuotes.auther;

   
}
