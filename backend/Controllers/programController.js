import Program from "../models/Program.js";

export const getPrograms = async (req, res, next) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    next(err);
  }
};

export const createProgram = async (req, res, next) => {
  try {
    const program = await Program.create(req.body);
    res.status(201).json(program);
  } catch (err) {
    next(err);
  }
};
