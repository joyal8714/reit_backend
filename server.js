const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authrouter');
const propertyRoutes = require('./routes/property');
const investmentRoutes = require('./routes/investrouter');

dotenv.config();
const app = express();
app.use(express.json());

// Routessssss
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/invest', investmentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch(err => console.log(err));
