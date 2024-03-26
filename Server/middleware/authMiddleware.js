const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Authentication invalid",
    });
  }

  const token = authHeader.split(" ")[1];
  console.log(authHeader);
  console.log(token);

  try {
    const {username ,userid} = jwt.verify(token , "secret");
    req.user = {username ,userid}
    next()
    // const { username, userid } = jwt.verify(authHeader, "secret");
    // req.user = { username, userid };
    // next();

    // const data = jwt.verify(authHeader , "secret");
    // return res.status(StatusCodes.OK).json({data})
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Authentication invalid" });
  }
}

module.exports = authMiddleware;
