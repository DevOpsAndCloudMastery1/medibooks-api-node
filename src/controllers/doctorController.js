const pool = require('../utils/db');

// GET /api/doctors
const getAllDoctors = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM doctors ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// GET /api/doctors/:id
const getDoctorDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM doctors WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// POST /api/doctors
const addDoctor = async (req, res) => {
  const { name, img, specialization, experience, location, description } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO doctors (name, img, specialization, experience, location, description)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, img, specialization, experience, location, description]
    );
    res.status(201).json({ message: 'Doctor added successfully', doctor: result.rows[0] });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// PUT /api/doctors/:id
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { name, img, specialization, experience, location, description } = req.body;
  try {
    const result = await pool.query(
      `UPDATE doctors 
       SET name = $1, img = $2, specialization = $3, experience = $4, location = $5, description = $6
       WHERE id = $7 RETURNING *`,
      [name, img, specialization, experience, location, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json({ message: 'Doctor updated successfully', doctor: result.rows[0] });
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// DELETE /api/doctors/:id
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM doctors WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorDetails,
  addDoctor,
  updateDoctor,
  deleteDoctor
};
