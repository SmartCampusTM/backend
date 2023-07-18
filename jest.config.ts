import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@controllers/(.*)$': '<rootDir>/controllers/$1',
    '^@guards/(.*)$': '<rootDir>/guards/$1',
    '^@modules/(.*)$': '<rootDir>/modules/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
  }
};

export default config;
