import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  rootDir: "./",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["node_modules", "dist"],
  testMatch: ['**/__tests__/**/*.test.ts'],
  resetModules: true,
  transform: {
    '^.+\\.ts': [
      "ts-jest", {
        useESM: true,
      },
    ]
  },
};

export default config;
