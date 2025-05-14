const users = {};

const addUser = (email, password, fullName, phone) => {
  users[email] = { password, fullName, phone };
};

const getUser = (email) => users[email];

const updateUserPassword = (email, newPassword) => {
  if (users[email]) {
    users[email].password = newPassword;
    return true;
  }
  return false;
};

module.exports = { addUser, getUser, updateUserPassword };
