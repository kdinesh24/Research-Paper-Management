const express = require('express');
const router = express.Router();
const ResearchPaper = require('../models/research-model');
const Publisher = require('../models/publisher-model');

// GET all papers
router.get('/', async (req, res) => {
  const papers = await ResearchPaper.find().populate('publisher');
  res.json(papers);
});

// POST a new paper
router.post('/', async (req, res) => {
  const paper = new ResearchPaper(req.body);
  await paper.save();
  res.json(paper);
});

// PUT assign publisher
router.put('/:id/publishers', async (req, res) => {
  const { publisherId } = req.body;
  const paper = await ResearchPaper.findByIdAndUpdate(
    req.params.id,
    { publisher: publisherId },
    { new: true }
  );
  res.json(paper);
});

// DELETE paper
router.delete('/:id', async (req, res) => {
  await ResearchPaper.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
