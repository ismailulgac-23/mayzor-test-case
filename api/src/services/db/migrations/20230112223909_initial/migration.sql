-- CreateTable
CREATE TABLE "Product" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "oldPrice" TEXT NOT NULL,
    "price" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "number" INTEGER NOT NULL,
    "note" TEXT NOT NULL DEFAULT '',
    "creditCardUuid" TEXT NOT NULL,
    CONSTRAINT "Order_creditCardUuid_fkey" FOREIGN KEY ("creditCardUuid") REFERENCES "CreditCard" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "deliveryDate" TEXT NOT NULL,
    "productUuid" TEXT NOT NULL,
    "orderUuid" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "isDelivered" BOOLEAN NOT NULL DEFAULT false,
    "isCanceled" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "OrderProduct_productUuid_fkey" FOREIGN KEY ("productUuid") REFERENCES "Product" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderProduct_orderUuid_fkey" FOREIGN KEY ("orderUuid") REFERENCES "Order" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderInfo" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "orderUuid" TEXT NOT NULL,
    CONSTRAINT "OrderInfo_orderUuid_fkey" FOREIGN KEY ("orderUuid") REFERENCES "Order" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderInfoItem" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "orderInfoUuid" TEXT NOT NULL,
    CONSTRAINT "OrderInfoItem_orderInfoUuid_fkey" FOREIGN KEY ("orderInfoUuid") REFERENCES "OrderInfo" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "number" TEXT NOT NULL
);
