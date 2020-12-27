module.exports = {
  roots: ['<rootDir>'],
  // setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    // '^.+\\.ts?$': 'ts-jest'
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  collectCoverage: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
};
