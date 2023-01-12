import { createUUID, makeSeed } from "../constants/helpers";
import db from "../services/db";

export const productUuids = {
  one: createUUID(),
  two: createUUID()
}

const cb = async () => {
  await db.product.create({
    data: {
      uuid: productUuids.one,
      imageUrl: "product-image-2359235832.png",
      oldPrice: "90,55",
      price: "66,00",
      title: "DeFacto Slim Fit Kapüşonlu Fermuarlı Duş Jeli"
    }
  });
  await db.product.create({
    data: {
      uuid: productUuids.two,
      imageUrl: "product-image-329683296.png",
      oldPrice: "220,45",
      price: "120,60",
      title: "Defacto Yünlü Kapüşonlu Ceket"
    }
  });
};
export default () => makeSeed(cb);