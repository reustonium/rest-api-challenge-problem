import express from 'express';
import birdData from './birds.json';

let birdsRouter = express.Router();

birdsRouter.get('/:birdID', (req, res) => {
  const id = req.params.birdID;
  let myBird = birdData.birds.find(bird => {
    if (bird.id == id) {
      return bird;
    }
  });
  res.json(myBird);
});

export default birdsRouter;
