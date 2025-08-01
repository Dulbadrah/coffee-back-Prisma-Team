import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const createDonation = async (req: Request, res: Response) => {

  const {
    amount,
    specialMessage,
    socialURLOrBuyMeACoffee,
    donorId,
    recipientId,
  } = req.body;

  if (donorId === recipientId) {
    return res
      .status(400)
      .json({ message: "Donor and recipient cannot be the same." });
  }
  try {
    const donation = await prisma.donations.create({
      data: {
        amount,
        specialMessage,
        socialURLOrBuyMeACoffee,
        donorId,
        recipientId,
      },
    });
    console.log("donation:", donation);
    res.status(200).json({ donation });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};