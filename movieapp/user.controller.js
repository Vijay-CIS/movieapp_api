const { Util } = require("../util");
const {  UserDAO } = require("./user.dao");
class UserController {
  async register(req, res) {
    const user = req.body;
    console.log(user);
    let encryptedPassword= await Util.getHashPassword(user.password);
    console.log(encryptedPassword);
    user.password = encryptedPassword;

    let result = await new UserDAO().save(user);
    res.status(201).json({ id: result });
  }

  async login(req, res) {
    const { email, password } = req.body;

    

    const user = await new UserDAO().findByEmail(email);
    if (user == null) {
      res.status(400).json({ errorMessage: "Invalid Login Credentials" });
    } else {
      const encrytedPasswordInDB = user.password;
      let matched= await Util.comparePassword(password,encrytedPasswordInDB);
      if(!matched){
        res.status(400).json({ errorMessage: "Invalid Login Credentials" });
      }
      else{
        delete user.password;
        res.status(200).json(user);
      }
    }
  }

  async login1(req, res) {
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
