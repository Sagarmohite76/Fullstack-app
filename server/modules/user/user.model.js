const db = require("../../config/db");

const User = {
  create: (data, callback) => {
    db.query("INSERT INTO users SET ?", data, callback);
  },

  findAll: (callback) => {
    db.query("SELECT * FROM users", callback);
  },

  findById: (id, callback) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE users SET ? WHERE id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
  }
};

module.exports = User;
