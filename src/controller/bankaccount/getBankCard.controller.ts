import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getBankCard = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "userId буруу байна." });
  }

  try {
    const bankAccount = await prisma.bankCard.findUnique({
      where: { userId: Number(req.params.userId) },
    });

    if (!bankAccount) {
      return res.status(404).json({ message: "Банкны карт олдсонгүй." });
    }

    res.status(200).json({ bankAccount });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
