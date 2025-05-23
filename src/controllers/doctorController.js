const { getDoctors, getDoctorById } = require('../utils/doctorStore');

const getAllDoctors = (req, res) => {
  const doctors = getDoctors();
   res.json(doctors); 
};

const getDoctorDetails = (req, res) => {
  const id = req.params.id;
  const doctor = getDoctorById(id);
  
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  res.json(doctor); // 👈 send only that doctor's details
};

module.exports = { getAllDoctors, getDoctorDetails };
