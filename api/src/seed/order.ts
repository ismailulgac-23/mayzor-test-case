import { createUUID, makeSeed } from "../constants/helpers";
import db from "../services/db";
import { creditCardUuids } from "./credit-card";
import { productUuids } from "./product";

const cb = async () => {
  await db.order.create({
    data: {
      number: 251255,
      creditCardUuid: creditCardUuids.one,
      products: {
        create: [
          {
            deliveryDate: "11 Kasım",
            isCanceled: false,
            isDelivered: false,
            productUuid: productUuids.one,
          },
          {
            deliveryDate: "13 Kasım",
            isCanceled: false,
            isDelivered: false,
            productUuid: productUuids.two,
          }
        ]
      },
      info: {
        create: [
          {
            name: "Teslimat Bilgileri",
            items: {
              create: [
                {
                  name: "Adres Adı",
                  value: "Ev"
                },
                {
                  name: "Adres",
                  value: "1481 sokak bağcılar/istanbul no:12 kat:3 daire 4"
                },
              ]
            }
          },
          {
            name: "Fatura Bilgileri",
            items: {
              create: [
                {
                  name: "Lokasyon",
                  value: "İstanbul"
                },
                {
                  name: "Adres",
                  value: "1481 sokak bağcılar/istanbul no:12 kat:3 daire 4"
                },
              ]
            }
          }
        ]
      },
    }
  })
};
export default () => makeSeed(cb);