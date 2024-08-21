import asyncHandler from "../utilities/CatchAsync";
import User from "../models/User";
import { UserModel } from "../models/User";
import AppError from "../utilities/AppError";
import generateToken from "../utilities/GetToken";
import matchPass from "../utilities/MatchPassword";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new AppError("Enter all the required fields", 201);
  }

  const user = await User.findOne({ email: email });

  if (user) {
    throw new AppError("User Already Registered", 201);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userAccount: UserModel | null = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  if (userAccount) {
    return res.status(200).json({
      success: true,
      message: "User registered sucessfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userAccount: UserModel | null = await User.findOne({ email: email });
  if (userAccount) {
    if (await matchPass(password, userAccount.password as string)) {
      res.status(201).json({
        success: true,
        message: "Login sucessfully",
        data: {
          _id: userAccount._id,
          username: userAccount.username,
          token: generateToken({
            _id: userAccount._id,
            username: userAccount.username,
            email: userAccount.email,
          }),
        },
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Wrong email or password",
        data: {},
      });
    }
  } else {
    res.status(201).json({
      sucess: false,
      message: "Account not found",
      data: {},
    });
  }
});

const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const { email, username } = req.body;
  if (!username || !email) {
    throw new AppError("Enter all the required fields", 201);
  }

  // Update user document in the database
  const user: UserModel | null = await User.findByIdAndUpdate(
    userId,
    { email, username },
    { new: true }
  );

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: user,
  });
});

const changePassword = asyncHandler(async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new AppError("Enter all the required fields", 201);
  }

  // Check if the user with the given ID exists
  const user: UserModel | null = await User.findById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  // Check if the old password matches the stored password
  if (!(await bcrypt.compare(oldPassword, user.password as string))) {
    return res.status(400).json({
      success: false,
      message: "Old password is incorrect",
    });
  }

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  // Update user's password with the new hashed password
  await User.findByIdAndUpdate(userId, { password: hashedPassword });

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

const getProfile = asyncHandler(async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  // Check if the user with the given ID exists
  const user: UserModel | null = await User.findById(userId)
    .select("-password")
    .populate("quotes")
    .populate("likedQuotes")
    .populate("favoriteQuotes");
  if (!user) {
    throw new AppError("User not found", 404);
  }
  // Return user's profile details (email and name)
  res.status(200).json({
    success: true,
    data: user,
  });
});

export { registerUser, loginUser, updateProfile, changePassword, getProfile };
