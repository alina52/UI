module.exports = {
    setupFiles: ["./test/setup.js"],
    moduleFileExtensions: ["js", "jsx", "json"],
    // coveragePathIgnorePatterns: [
    //   "/components/index.js",
    //   "/components/styles"
    // ],
    transformIgnorePatterns: ["/node_modules/", ".history/*", "lib", "dist"],
    testPathIgnorePatterns:['/node_modules/',"lib","dist","demo"],
    modulePathIgnorePatterns: ["/.history/", "lib", "dist"],
    moduleDirectories: ["node_modules", ".", "src"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    collectCoverageFrom: [
      "components/**/*.{js,jsx}",
      "!components/**/style.{js,jsx}"
    ],
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testURL: "http://localhost",
    rootDir: __dirname,
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/tests/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
    }
  };
  