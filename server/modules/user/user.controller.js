const User = require("./user.model");

exports.createUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "User created" });
  });
};

exports.getUsers = (req, res) => {
  User.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User updated" });
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User deleted" });
  });
};
