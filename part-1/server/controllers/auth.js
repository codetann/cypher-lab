const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;

    users.forEach((user) => {
      if (user.username === username) {
        const hashCheck = bcrypt.compareSync(password, user.password);

        if (hashCheck) {
          const usrCopy = { ...user };
          delete usrCopy.password;

          res.status(200).send(usrCopy);
          return;
        }

        res.status(400).send("User not found.");
      }
    });
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;

    // check if username or email already exists
    users.forEach((user) => {
      if (user.username === username || user.email === email) {
        res.status(400).send("Username or email already exists");
        return;
      }
    });

    // hash password
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);

    // create user
    const usr = {
      username,
      email,
      firstName,
      lastName,
      password: hash,
    };
    const usrCopy = { ...usr };
    delete usrCopy.password;

    console.log("Registering User");

    users.push(usr);
    res.status(200).send(usrCopy);
  },
};
