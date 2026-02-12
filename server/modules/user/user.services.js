const userModel = require("./user.model");

exports.getAllUsers = async () => {
  return await userModel.getAllUsers();
};

exports.createUser = async (data) => {
  return await userModel.createUser(data.name, data.email);
};
