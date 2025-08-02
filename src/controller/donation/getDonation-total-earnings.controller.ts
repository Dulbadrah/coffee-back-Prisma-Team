import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getTotalEarnings = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const total = await prisma.donations.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        recipientId: Number(userId),
      },
    });

    const totalEarnings = total._sum.amount || 0;

    if (totalEarnings === 0) {
      return res.status(200).json({
        message: "Танд одоогоор кофе хэн ч хандивлаагүй байна ☕️",
        totalEarnings: 0,
      });
    }

    return res.status(200).json({ totalEarnings });
  } catch (error) {
    return res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};

//Prisma-гийн aggregate() функц ашиглан нийлбэр, дундаж, тоо, хамгийн их, хамгийн бага зэрэг статистик гаргаж болно.