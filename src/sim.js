
var forestEmojis = ["", "", "", "", "", "", "", "", "", "🐛", "🌱", "🌲", "🌳", "🍀", "🍎", "🍄", "🦊", "🐑", "🐹", "🐰"];

function makeInput() {
  var input = document.getElementById("inputForest").value.trim();
  var inputEmojis = forestEmojis;
  console.log("input: "+input.length);
  if (input.length != 0) {
    inputEmojis = input.split("");
    for (var i = 0; i < inputEmojis.length / 2; i++) {
      inputEmojis.push("");
    }
  }
  console.log(inputEmojis);
  return inputEmojis;
}

function makeForest(arr) {
  var forest = []
  for (var i = 0; i < 8; i++) {
    var line = [];
    for (var j = 0; j < 8; j++) {
      line.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    forest.push(line);
  }
  return forest;
}

function printForest(arr) {
  intro.classList.add('hidden');
  sim.classList.remove('hidden');
  if (sim.hasChildNodes()) {

  }
  var table = document.createElement('table');
  for (var i = 0; i < arr.length; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < arr[i].length; j++) {
      var td = document.createElement('td');
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  sim.appendChild(table);
}

function reprintForest(arr) {
  var table = sim.firstChild;
  var tr = table.childNodes;
  for (var i = 0; i < tr.length; i++) {
    var td = tr.childNodes;
    for (var j = 0; j < td.length; j++) {
      
    }
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  var intro = document.getElementById('intro');
  var sim = document.getElementById('sim');
  var pushtray = document.getElementById('pushtray');

  var btn = document.getElementsByTagName('button');

  function test() {
    var forest = makeForest(makeInput());
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
