module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: 'src/.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/__tests__'],
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
  collectCoverageFrom: ['src/*.{js,ts}'],
};
