module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePathIgnorePatterns: ['<rootDir>/src/reportWebVitals.ts'],
};
