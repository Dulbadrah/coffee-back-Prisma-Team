import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getSearchDonations = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { search } = req.query;

  if (!search || typeof search !== "string") {
    return res.status(400).json({ message: "Хайх утга шаардлагатай." });
  }

  try {
    const donations = await prisma.donations.findMany({
      where: {
        recipientId: Number(userId),
        OR: [
          {
            donor: {
              is: {
                email: {
                  contains: String(search),
                  mode: "insensitive",
                },
              },
            },
          },
          {
            specialMessage: {
              contains: String(search),
              mode: "insensitive",
            },
          },
        ],
      },
      include: { donor: true, user: true },
    });

    if (!donations.length) {
      return res.status(404).json({ message: "Тохирох хандив олдсонгүй." });
    }

    res.json({ donations });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
