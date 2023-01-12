import { Request, Response } from "express";
import db from "../services/db"

export const getOrders = async (req: Request, res: Response) => {
  const orders = await db.order.findMany({
    include: {
      creditCard: true,
      info: {
        include: {
          items: true
        }
      },
      products: {
        include: {
          product: true
        }
      }
    }
  });
  return res.status(200).json({
    orders
  });
}