console.log('Hello, World!')

document.write('<p> var players: liste des joueurs<p>')
document.write('<p> function getPlayers(): affiche la liste des joueurs<p>')
document.write(
  '<p> function addPlayer(nom): ajoute un joueur à la liste des joueurs<p>'
)
document.write('<p> function rollDices(): lance 3 dés<p>')
document.write(
  '<p> function getActionsByRoll(roll): retourne les actions selon le lancé<p>'
)

var players = []

/*
let one = new Player("Manu");
players.push(one);
console.log(one.name);

document.write("\n");
document.write("List des joueurs:\n");
players.forEach(function(player){
document.write(player.name + "\n");
}); */

function getPlayers () {
  console.log('Liste des joueurs:\n')
  players.forEach(function (player) {
    console.log(player.name + '\n')
  })
}

function addPlayer (name) {
  const player = new Player(name)
  players.push(player)
}
