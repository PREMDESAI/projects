import { genSalt, hash, compare } from "bcrypt";

import prisma from "../startup/db.js";
import { createValidation, generateAuthToken } from "../models/user.js";

async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    if (!users) return res.status(404).send("User not found");
    res.send(users);
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

async function getUser(req, res) {
  try {
    let userId = req.params.id;
    if (!userId) return res.status(401).json({ error: "User id not found" });
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

async function postUser(req, res) {
  try {
    const { error } = createValidation(req.body);
    if (error) return res.status(401).send(error.details[0].message);
    let user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (user) return res.status(400).json({ error: "This email already used" });
    const salt = await genSalt();
    const hashPass = await hash(req.body.password, salt);
    user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
        role: req.body.role,
      },
    });

    const token = await generateAuthToken(user);

    res.header("x-auth-token", token).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

async function putUser(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!user) return res.status(404).send("user topilmadi");
    const { error } = createValidation(req.body);
    if (error) return res.status(401).send(error.details[0].message);
    const newPass = req.body.newPassword;
    let hashPass;
    if (newPass) {
      const isValidPwd = await compare(req.body.password, user.password);
      if (!isValidPwd)
        return res.status(400).send("Oldingi parol xato kiritilgan");
      const salt = await genSalt();
      hashPass = await hash(req.body.newPass, salt);
    } else {
      hashPass = req.body.password;
    }
    user = await prisma.post.update({
      where: { id: Number(req.params.id) },
      data: {
        name: req.body.name,
        password: hashPass,
        role: req.body.role,
      },
    });

    if (!user) return res.status(404).send("Berilgan ID li ma'lumot topilmadi");
    res.json({
      id: user.id,
      name: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: "ma'lumot olishda xatolik" });
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!user) return res.status(404).send("user topilmadi");
    res.send("Foydalanuvchi ma'lumotlari o'chirildi");
  } catch (error) {
    res.status(500).json({ error: "ma'lumot olishda xatolik" });
  }
};

export { getAllUsers, getUser, postUser, putUser, deleteUser };
