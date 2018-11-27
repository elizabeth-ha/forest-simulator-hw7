
var forestEmojis = ["🐛", "🌱", "🌲", "🌳", "🍀", "🍎", "🍄", "🦊", "🐑", "🐹", "🐰"];

var intro = document.getElementById('intro');
var sim = document.getElementById('sim');
var pushtray = document.getElementById('pushtray');

function makeForest(arr) {
  var forest = []
  for (var i = 0; i < 8; i++) {
    var line = "";
    for (var j = 0; j < 8; j++) {
      line += arr[Math.floor(Math.random()*arr.length)] + " ";
    }
    forest.push(line);
  }
  return forest;
}

function printForest(arr) {
  intro.toggleClass('hidden');
  sim.toggleClass('hidden');
  sim.innerHTML = arr;
}
document.addEventListener("DOMContentLoaded", function(event) {
  var btn = document.getElementsByTagName('button');

  function test() {
    var forest = makeForest(forestEmojis);
    printForest(forest);
    console.log(forest);
  }
  btn[0].addEventListener("click", test, false);


  const simpsonsIndex = forest =>
  1 - Object.entries(
  [...forest.join("")].reduce(
      (counts, emoji) => ({...counts, [emoji]: (counts[emoji] || 0) + 1}),
      {}
  )
  ).reduce(([top, bottom], [species, count]) => [top + (count * (count - 1)), bottom + count], [0, 0])
  .reduce((sumLilN,bigN) => sumLilN / (bigN * (bigN - 1)))
 });
