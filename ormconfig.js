/**
 * The migration-specific TypeORM connection settings.
 */
module.exports = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 15432,
  username: "root",
  password: "example",
  database: "typeormtest",
  module: "commonjs",
  logging: true,
  schema: "upgradeIssue",
  entities: ["./entities/**/*.ts"],
  migrations: ["./migrations/*.ts"],
  seeds: ["./seeds/**/*.seed.ts"],
  cli: {
    migrationsDir: "migrations",
    entitiesDir: "entities",
  },
};
