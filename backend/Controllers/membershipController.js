import Membership from "../models/Membership.js";

export const createMembership = async (req, res, next) => {
  try {
    const data = await Membership.create(req.body);
    res.status(201).json({ message: "Thank you! Our team will contact you soon.", data });
  } catch (err) {
    next(err);
  }
};
