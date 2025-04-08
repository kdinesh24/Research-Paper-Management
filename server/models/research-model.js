const mongoose = require('mongoose');

const ResearchPaperSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
});

module.exports = mongoose.model('ResearchPaper', ResearchPaperSchema);
