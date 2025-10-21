import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if all fields are filled
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // check if user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // create token
    const token = jsonwebtoken.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // send response
    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error occurred during registration!",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
