import ContactMessage from "../models/ContactMessage.js";

export const createContactMessage = async (req, res, next) => {
  try {
    const contact = await ContactMessage.create(req.body);
    res.status(201).json({
      message: "Message received! We'll get back to you soon.",
      contact,
    });
  } catch (err) {
    next(err);
  }
};
