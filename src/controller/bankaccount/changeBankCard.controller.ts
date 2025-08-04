import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const changeBankCard = async (req: Request, res: Response) => {
  const { userId } = req.params;
  // const { bankCardId } = req.params;
  const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

  // if (!bankCardId || isNaN(Number(bankCardId))) {
  //   return res.status(400).json({ message: "bankCardId шаардлагатай ба тоон утга байх ёстой." });
  // }

  if (!userId || isNaN(Number(userId))) {
    return res
      .status(400)
      .json({ message: "userId шаардлагатай ба тоон утга байх ёстой." });
  }

  if (!country || !firstName || !lastName || !cardNumber || !expiryDate) {
    return res
      .status(400)
      .json({ message: "Бүх шаардлагатай талбаруудыг бөглөнө үү." });
  }

  const parsedExpiryDate = new Date(expiryDate);
  if (isNaN(parsedExpiryDate.getTime())) {
    return res
      .status(400)
      .json({ message: "expiryDate нь хүчинтэй огноо байх ёстой." });
  }

  try {
    const bankAccount = await prisma.bankCard.update({
      where: { userId: Number(userId) },
      // where: { id: Number(bankCardId) },
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: parsedExpiryDate,
      },
    });

    res.status(200).json({ bankAccount });
  } catch (error) {
    res.status(500).json({ message: "Серверийн алдаа гарлаа." });
  }
};
