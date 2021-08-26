const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports.CreateLogger = async (uri, params) => {
  const log = await prisma.logger.create({
    data: {
      api: uri,
      params: JSON.stringify(params),
    },
  });

  return log;
};
