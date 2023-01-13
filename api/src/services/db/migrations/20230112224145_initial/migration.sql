-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderProduct" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "deliveryDate" TEXT NOT NULL,
    "productUuid" TEXT NOT NULL,
    "orderUuid" TEXT NOT NULL,
    "receiverName" TEXT,
    "isDelivered" BOOLEAN NOT NULL DEFAULT false,
    "isCanceled" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "OrderProduct_productUuid_fkey" FOREIGN KEY ("productUuid") REFERENCES "Product" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderProduct_orderUuid_fkey" FOREIGN KEY ("orderUuid") REFERENCES "Order" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderProduct" ("deliveryDate", "isCanceled", "isDelivered", "orderUuid", "productUuid", "receiverName", "uuid") SELECT "deliveryDate", "isCanceled", "isDelivered", "orderUuid", "productUuid", "receiverName", "uuid" FROM "OrderProduct";
DROP TABLE "OrderProduct";
ALTER TABLE "new_OrderProduct" RENAME TO "OrderProduct";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
