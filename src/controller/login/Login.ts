import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createAccessToken } from "../../utils/token";
import { prisma } from "../../utils/prisma";

export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: { email },
            include: {
                profile: true
            }
        });

        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const payload = { email, userId: user.id }

            const accessToken = createAccessToken(payload);

            res.status(200).json({
                success: true, accessToken, user: {
                    username: user.username,
                    email: user.email
                }, isCreatedProfile: Boolean(user.profile)
            });
        } else {
            res.status(400).json({ message: "email and password invalid" });
        }
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({ success: false, error });
    }
};