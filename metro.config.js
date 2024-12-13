const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
    fs: require.resolve('react-native-fs'), // ou 'react-native-fs', se não estiver usando Expo.
    path: require.resolve('path-browserify'),
    assert: require.resolve('assert'),
};

module.exports = config;
