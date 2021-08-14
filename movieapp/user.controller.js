const {  UserDAO } = require("./user.dao");
class UserController {
  async register(req, res) {
    const user = req.body;
    console.log(user);
    let result = await new UserDAO().save(user);
    res.status(201).json({ id: result });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await new UserDAO().login(email, password);
    if (user == null) {
      res.status(400).json({ errorMessage: "Invalid Login Credentials" });
    } else {
      res.status(200).json(user);
    }
  }

  async getUsers(req, res) {
    let users = await new UserDAO().findAll();
    res.status(200).json(users);
  }
}

exports.UserController = UserController;
