let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = 
[
 ' “I would rather die of passion than of boredom.” - Vincent van Gogh ' ,
 ' “A truly rich man is one whose children run into his arms when his hands are empty." - Unknown ' ,
 ' “It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.” - Ann Landers ' ,
 ' “If you want your children to turn out well, spend twice as much time with them, and half as much money.” - Abigail Van Buren ' ,
 ' “Build your own dreams, or someone else will hire you to build theirs.” - Farrah Gray ',
 ' “The battles that count arent the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--thats where its at.” - Jesse Owens ' ,
 ' “Education costs money.  But then so does ignorance.” - Sir Claus Moser ' ,
 ' “I have learned over the years that when ones mind is made up, this diminishes fear.” - Rosa Parks ' ,
 ' “It does not matter how slowly you go as long as you do not stop.” - Confucius ' ,
 ' “If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.” - Oprah Winfrey ' ,
 ' "Remember that not getting what you want is sometimes a wonderful stroke of luck.” - Dalai Lama ' ,
 ' “You cant use up creativity.  The more you use, the more you have.” - Maya Angelou ' ,
 ' “Dream big and dare to fail.” - Norman Vaughan ' ,
 ' “Our lives begin to end the day we become silent about things that matter.” - Martin Luther King Jr. ' ,
 ' “Do what you can, where you are, with what you have.” - Teddy Roosevelt ' ,
 ' “If you do what youve always done, youll get what youve always gotten.” - Tony Robbins ' ,
];

btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() *  quotes.length)]
  output.innerHTML = randomQuote;
  
})
  //* output random quote which will go output variable which is connected to our output div, which is connected tto the setnence which will change to one of the quotes. *//