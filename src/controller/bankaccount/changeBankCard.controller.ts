import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const changeBankCard = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

  try {
    const bankAccount = await prisma.bankCard.create({
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        user: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });

    res.status(200).json({ bankAccount });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
