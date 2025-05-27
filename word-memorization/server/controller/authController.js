import { authValidate, generateAuthToken } from "../models/user.js";
import { compare } from "bcrypt";
import prisma from "../startup/db.js";

async function postUser(req, res) {
  try {
    const { error } = authValidate(req.body);
    if (error) return res.status(401).send(error.details[0].message);
    let user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user) return res.status(400).send("Email yok parol xato");
    const isValidPwd = await compare(req.body.password, user.password);
    if (!isValidPwd) return res.status(400).send("Email yok parol xato");

    const token = await generateAuthToken(user);

    res.header("x-auth-token", token).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch user: ${error}` });
  }
}
export default postUser;