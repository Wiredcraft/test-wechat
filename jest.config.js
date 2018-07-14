exports = {
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    ],
    "moduleFileExtensions": ["js","jsx"],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
    },
    "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
};