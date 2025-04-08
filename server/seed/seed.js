const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const ResearchPaper = require('../models/research-model');
const Publisher = require('../models/publisher-model');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await ResearchPaper.deleteMany();
  await Publisher.deleteMany();

  const publishers = await Publisher.insertMany([
    { name: 'Springer', location: 'Germany' },
    { name: 'IEEE', location: 'USA' },
  ]);

  await ResearchPaper.insertMany([
    { title: 'Quantum Computing', author: 'Alice', year: 2020 },
    { title: 'AI in Healthcare', author: 'Bob', year: 2021 },
  ]);

  console.log('Database seeded');
  process.exit();
};

seed();
