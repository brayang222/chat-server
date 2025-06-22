import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";

export function generateToken(username) {
  return jsonwebtoken.sign({ username }, process.env.JWT_SECRET);
}

export function verificateToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);
  if (!token)
    return res.status(401).json({ error: "Acceso denegado, token requerido" });

  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.usernameConnected = dataToken.username;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token no valido" });
  }
}
