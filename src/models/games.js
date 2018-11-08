const fs = require('fs');
const uuid = require('uuid/v4');
const path = require('path');

function getAll () {
    const games = fs.readFileSync(path.join(__dirname,'../../data/games.json'),'utf-8');
    const gameLibrary= JSON.parse(games);
    return gameLibrary;
};

function getGame (id) {
    const games = fs.readFileSync(path.join(__dirname,'../../data/games.json'),'utf-8');
    const gameLibrary = JSON.parse(games);
    let result = gameLibrary.data.find(game => game.id === id);
    return result;
}

function newGame (name, system, publisher, developer) {
    let newGame = { id: uuid().slice(0,8), name, system, publisher, developer };
    const games = fs.readFileSync(path.join(__dirname,'../../data/games.json'),'utf-8');
    const gameLibrary = JSON.parse(games);
    gameLibrary.data.push(newGame);
    fs.writeFileSync(path.join(__dirname,'../../data/games.json'), JSON.stringify(gameLibrary, null, 4), 'utf-8');
    return newGame;
  };

  function deleteGame (id) {
    const games = fs.readFileSync(path.join(__dirname,'../../data/games.json'),'utf-8');
    const gameLibrary = JSON.parse(games);
    const deletedGame = gameLibrary.data.find(game => game.id === id)
    const index = gameLibrary.data.findIndex(game => game.id === id)
    gameLibrary.data.splice(index,1);
    fs.writeFileSync(path.join(__dirname,'../../data/games.json'), JSON.stringify(gameLibrary, null, 4), 'utf-8');
    return deletedGame;
  }

  function updateGame (id, name, system, publisher, developer) {
    const updatedGame = {id, name, system, publisher, developer};
    const games = fs.readFileSync(path.join(__dirname,'../../data/games.json'),'utf-8');
    const gameLibrary = JSON.parse(games);
    let game = gameLibrary.data.find(game => game.id === updatedGame.id);
    game.name = updatedGame.name;
    game.system = updatedGame.system;
    game.publisher = updatedGame.publisher;
    game.developer = updatedGame.developer;
    fs.writeFileSync(path.join(__dirname,'../../data/games.json'), JSON.stringify(gameLibrary, null, 4), 'utf-8');
    return game;

  }

console.log(updateGame("bae60268", "Skies of Arcadia", "Dreamcast", "Sega", "Smilebit" ));
// console.log(deleteGame('2cc37e64'));

modules.exports = {
    getAll,
    getGame,
    deleteGame,
    newGame,
    updateGame,
}