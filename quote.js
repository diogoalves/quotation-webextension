const quotes = [
  'prefer a deeper reading than superficial news',
  'how is your coding queue?',
  'get some rest, go for a walk',
  'get some rest, wash your face'
];

var p = document.createElement("p");
p.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
document.body.insertBefore(p, document.body.firstChild);
