const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

router.post("/apply", async (req, res) => {
  try {
    const { name, email, phone, resumeLink, coverLetter } = req.body;
    const application = new Application({
      name,
      email,
      phone,
      resumeLink,
      coverLetter,
    });
    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit application" });
  }
});

module.exports = router;
