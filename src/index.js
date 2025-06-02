const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');
const authRoutes = require('./routes/authRoutes');
const setupSwagger = require('../swagger'); // 👈 NEW

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow Angular frontend to connect
app.use(express.json()); // Parse JSON bodies

// Swagger docs
setupSwagger(app); // 👈 NEW

// Routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Medibooks Backend API!');
});


// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
