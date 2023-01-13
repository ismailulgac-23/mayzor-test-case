import { Request, Response } from "express";
import db from "../services/db"

type IQueryProps = {
  orderBy?: "desc" | "asc";
  query?: string
  sortBy?: "default" | "best-sellers" | "increased-price" | "decreased-price" | "new" | "a-z"
  type?: "all" | "cancels" | "returns"
}

export const getOrders = async (req: Request, res: Response) => {
  const { orderBy, query, sortBy, type }: IQueryProps = req.query;
  const orders = await db.order.findMany({
    orderBy: {
      date: orderBy ?? "asc"
    },
    where: {
      products: query ? {
        some: {
          product: {
            title: {
              contains: query
            }
          }
        }
      } : undefined,
    },
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