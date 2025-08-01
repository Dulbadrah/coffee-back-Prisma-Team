import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getBankCard = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

  try {
    const bankAccount = await prisma.bankCard.findUnique({
      where: { userId: Number(req.params.userId) },
    });
    res.status(200).json({ bankAccount });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
