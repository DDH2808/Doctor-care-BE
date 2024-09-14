import userService from "../services/userService";

const handleLoging = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  const userData = await userService.handleUserLogin(email, password);
  // check email exist
  // password nhap vao ko dung
  // return userInfor
  // access_token :JWT json web token

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLoging: handleLoging,
};
