import Trainer from "../models/Trainer.js";

// GET all trainers
export const getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    next(err);
  }
};

// CREATE a trainer
export const createTrainer = async (req, res, next) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json(trainer);
  } catch (err) {
    next(err);
  }
};
