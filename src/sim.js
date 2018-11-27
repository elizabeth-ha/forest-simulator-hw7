
var forestEmojis = ["", "", "", "", "", "", "", "", "", "🐛", "🌱", "🌲", "🌳", "🍀", "🍎", "🍄", "🦊", "🐑", "🐹", "🐰"];
var forest = [];

function makeInput() {
  var input = document.getElementById("inputForest").value.trim();
  var inputEmojis = forestEmojis;
  console.log("input: "+input.length);
  if (input.length != 0) {
    inputEmojis = input.split("");
    for (var i = 0; i < inputEmojis.length / 2; i++) {
      inputEmojis.push("");
    }
    forestEmojis = inputEmojis;
  }
  // console.log(inputEmojis);
  // return inputEmojis;
}

function makeForest() {
  // var forest = []
  for (var i = 0; i < 8; i++) {
    var line = [];
    for (var j = 0; j < 8; j++) {
      line.push(forestEmojis[Math.floor(Math.random()*forestEmojis.length)]);
    }
    forest.push(line);
  }
  return forest;
}

function printForest(arr) {
  intro.classList.add('hidden');
  sim.classList.remove('hidden');

  if (sim.contains(document.getElementById("forestTable"))) {
    reprintForest(arr);
  } else {
    var table = document.createElement('table');
    table.id = "forestTable";
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
}

function reprintForest() {
  var table = document.getElementById("forestTable");
  var tr = table.childNodes;

  var td = document.getElementsByTagName("td");
  for (var i = 0; i < td.length; i++) {
    if (!td[i].classList.contains("save")) {
      td[i].innerHTML = forestEmojis[Math.floor(Math.random()*forestEmojis.length)];
    }
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  var intro = document.getElementById('intro');
  var sim = document.getElementById('sim');
  var pushtray = document.getElementById('pushtray');

  var btn = document.getElementsByTagName('button');

  function generate() {
    makeInput();
    var forest = makeForest(forestEmojis);
    printForest(forest);
    console.log(forest);
  }
  btn[0].addEventListener("click", generate, false);
  btn[0].classList.add("show");

  document.addEventListener('click', function (event) {

	 if (!event.target.matches('td')) return;

   if (event.target.classList.contains("save")) {
     event.target.classList.remove("save");
   } else {
     event.target.classList.add("save");
   }
  }, false);

  const simpsonsIndex = forest =>
  1 - Object.entries(
  [...forest.join("")].reduce(
      (counts, emoji) => ({...counts, [emoji]: (counts[emoji] || 0) + 1}),
      {}
  )
  ).reduce(([top, bottom], [species, count]) => [top + (count * (count - 1)), bottom + count], [0, 0])
  .reduce((sumLilN,bigN) => sumLilN / (bigN * (bigN - 1)));

  console.log("simpson: "+simpsonsIndex(forest));
  var simpson = document.createElement('p');
  simpson.innerHTML = "The current simpons index is: "+simpsonsIndex();
  sim.appendChild(simpson);
});
