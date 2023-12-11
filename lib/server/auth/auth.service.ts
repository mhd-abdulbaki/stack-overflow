import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/database/user/user.model";

export class AuthService {
  async signIn(req: NextApiRequest, res: NextApiResponse) {
    const { user, pwd } = req.body;
    if (!user || !pwd)
      return res
        .status(400)
        .json({ message: "Username and password are required." });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.statusCode(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
      const roles = Object.values(foundUser.roles);
      // create JWTs
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "30s" }
      );

      const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn: "1d" }
      );
      // TODO: Saving refresh token with current user
      foundUser.refreshToken = refreshToken;
      // eslint-disable-next-line no-unused-vars
      const result = await foundUser.save();

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ toke: accessToken });
    } else {
      res.sendStatus(401);
    }
  }

  async signUp() {}

  async signOut() {}

  async refresh() {}
}
