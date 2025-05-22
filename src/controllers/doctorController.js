const { getDoctors } = require('../utils/doctorStore');

const getAllDoctors = (req, res) => {
  res.json({ doctors: getDoctors() });
};

module.exports = { getAllDoctors };
