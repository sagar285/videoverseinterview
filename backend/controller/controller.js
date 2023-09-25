const usermodal =require("../modal/modal")
const bcrypt =require("bcryptjs")


exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email || !name || !password) {
        return res.status(400).send({ message: "pls filled all your field" });
      }
      const userexist = await usermodal.findOne({ email: email });
      if (userexist) {
        return res.status(400).send({ message: "email id exist in database" });
      } else {
        const newuser = await usermodal.create({
          name,
          email,
          password,
        });
        return res.status(200).send({ message: "user registered succesfully" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };
  

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send({ message: "pls filled all your field" });
      }
      const Userexist = await usermodal.findOne({ email });
      if (Userexist) {
        const matchpassword = await bcrypt.compare(password, Userexist.password);
        if (matchpassword) {
          return res.status(200).send({message: "user login succesflly"});
        }
      }
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  };