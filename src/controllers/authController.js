const { addUser, getUser, updateUserPassword } = require('../utils/inMemoryStore');

// Login handler
const login = (req, res) => {
  const { email, password } = req.body;
  const user = getUser(email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // For demo, return a success message (in production, return a JWT)
  res.status(200).json({ message: 'Login successful', user: { email, fullName: user.fullName, phone: user.phone } });
};

// Signup handler
const signup = (req, res) => {
  const { email, password, fullName, phone } = req.body;

  if (getUser(email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  addUser(email, password, fullName, phone);
  res.status(201).json({ message: 'Account created successfully' });
};

// Password reset handler
const resetPassword = (req, res) => {
  const { email } = req.body;

  // For demo, we just check if the user exists and simulate a reset
  if (!getUser(email)) {
    return res.status(404).json({ message: 'Email not found' });
  }

  // In a real app, send a reset link or generate a new password
  const newPassword = `temp-${Math.random().toString(36).slice(2, 8)}`;
  updateUserPassword(email, newPassword);
  res.status(200).json({ message: 'Password reset successful', newPassword });
};

module.exports = { login, signup, resetPassword };
