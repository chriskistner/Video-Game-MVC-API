const model = require('../models/games');

function getAllGames (req, res, next) {
  const result = model.getAll();

  if (!result)
    return next({status: 404, message: "Sorry, you have no games."})

  res.status(200).send(result);
  };

  function getGame (req, res, next) {
  const gameID = req.params.id;
  const result = model.getGame(gameID);

  if (!result)
    return next({ status: 404, message: "Game not Found" });

  res.status(302).send(result);
};

function newGame (req, res, next) {
  const {name, system, publisher, developer} = req.body;

  if (!name || name.length <= 0)
    return next({ status: 400, message: "A Name is Required for your Game!" });
  if (!system || system.length <=1) 
    return next ({status: 400, message: "Hey What did This get released on?" });

  let result = model.newGame(name, system, publisher, developer);
  res.status(201).send(result);
};

function deleteGame (req, res, next) {
  let gameID = req.params.id;
  const result = model.deleteGame(gameID);

  if (!result)
    return next({ status: 404, message: "Can't delete what doesn't exist" });

  res.status(200).send(result);
};

function updateGame (req, res, next) {
  let gameID = req.params.id; 
  const {name, system, publisher, developer} = req.body;
  if (!gameID)
    return next({ status: 400, message: "Hey I can't update what you don't give me!" });

  let result = model.updateGame(gameID, name, system, publisher, developer);

  res.status(201).send(result);
};


  module.exports = {
      getAllGames,
      getGame,
      newGame,
      deleteGame,
      updateGame
  };