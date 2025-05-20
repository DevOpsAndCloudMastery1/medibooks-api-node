const users = [];

const getUser = (email) => {
  return users.find(user => user.email === email);
};

const addUser = (email, password, fullName, phone) => {
  users.push({ email, password, fullName, phone });
};

const updateUserPassword = (email, password) => {
  const user = users.find(user => user.email === email);
  if (user) {
    user.password = password;
  }
};

module.exports = { getUser, addUser, updateUserPassword };
