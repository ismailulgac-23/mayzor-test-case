import { createUUID, makeSeed } from "../constants/helpers";
import db from "../services/db";

export const creditCardUuids = {
  one: createUUID(),
  two: createUUID()
}

const cb = async () => {
  await db.creditCard.create({
    data: {
      uuid: creditCardUuids.one,
      number: "4563 9530 1234 9090",
      type: "VISA",
    }
  });
  await db.creditCard.create({
    data: {
      uuid: creditCardUuids.two,
      number: "5342 5233 1233 9022",
      type: "MASTER_CARD",
    }
  });
};
export default () => makeSeed(cb);