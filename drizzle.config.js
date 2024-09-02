/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-marketplace_owner:XjcL2T4QDhko@ep-long-shadow-a2tfg520.eu-central-1.aws.neon.tech/car-marketplace?sslmode=require',
    }
  };