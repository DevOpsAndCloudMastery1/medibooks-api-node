const { getDoctors } = require('../utils/doctorStore');

const getAllDoctors = (req, res) => {
  const doctors = getDoctors();
   res.json(doctors); 
};

module.exports = { getAllDoctors };
