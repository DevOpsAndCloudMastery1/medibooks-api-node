const { getDoctors, getDoctorById, addNewDoctor, updateDoctorById, removeDoctorById } = require('../utils/doctorStore');

// GET /api/doctors
const getAllDoctors = (req, res) => {
  const doctors = getDoctors();
  res.json(doctors);
};

// GET /api/doctors/:id
const getDoctorDetails = (req, res) => {
  const id = req.params.id;
  const doctor = getDoctorById(id);

  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  res.json(doctor);
};

// POST /api/doctors
const addDoctor = (req, res) => {
  const newDoctor = req.body;

  // Validate input
  if (
    !newDoctor.name ||
    !newDoctor.specialization ||
    !newDoctor.experience ||
    !newDoctor.location ||
    !newDoctor.description ||
    !newDoctor.img
  ) {
    return res.status(400).json({ message: 'Invalid doctor data' });
  }

  // Save to fake database
  const addedDoctor = addNewDoctor(newDoctor);
  res.status(201).json({ message: 'Doctor added successfully', doctor: addedDoctor });
};

// PUT /api/doctors/:id
const updateDoctor = (req, res) => {
  const { id } = req.params;
  const updatedData = updateDoctorById (id, req.body);
  if (!updatedDoctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  res.json({ message: 'Doctor updated successfully', doctor: updatedDoctor });
};
//DELETE /api/doctors/:id
const deleteDoctor = (req, res) => {
  const id = req.params.id;
  const success = removeDoctorById(id);

  if (!success) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  res.json({ message: 'Doctor deleted successfully' });
};
module.exports = {
  getAllDoctors,
  getDoctorDetails,
  addDoctor,
  updateDoctor,
  deleteDoctor
};
