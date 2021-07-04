const User = require("../db/models/user");
const jwt = require("jsonwebtoken");

exports.postUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login: login });

    // if (!user) {
    //   res.status(404).json({
    //     error: 404,
    //     message: "Użytkownik o podanym loginie nie istnieje",
    //   });

    //   return;
    // }

    // const isPasswordCorrect = user.password === password;
    // if (!isPasswordCorrect) {
    //   res.status(401).json({
    //     error: 401,
    //     message: "Błędne hasło",
    //   });

    //   return;
    // }

    const token = jwt.sign({ login: login }, process.env.JWT_SECRET, {
      expiresIn: 1200,
    });

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie POST w endpointcie users",
    });
  }
};

exports.postNewUser = async (req, res) => {
  let user;

  try {
    const { email, login, password } = req.body;

    const userData = {
      email: email,
      login: login,
    };

    user = new User(userData);

    await User.register(user, password);

    res.send("Użytkownik został utworzony");

    await user.save();
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }

  res.status(201).json(user);
};
