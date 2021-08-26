-- CreateTable
CREATE TABLE "Logger" (
    "id" SERIAL NOT NULL,
    "api" TEXT NOT NULL,
    "params" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
