export const config = {
  port: parseInt(process.env.PORT),
  db: {
    live: process.env.DB_LIVE,
    test: process.env.DB_TEST,
    dev: process.env.DB_DEV
  }
}
