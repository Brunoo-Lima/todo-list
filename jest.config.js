module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./src/.jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': './src/.jest/mocks.fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
