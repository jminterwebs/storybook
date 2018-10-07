import { View, AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';

import './rn-addons';

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI();

setTimeout(
  () =>
    setOptions({
      name: 'CRNA React Native App',
    }),
  100
);

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUIRoot />
      </View>
    );
  }
}

AppRegistry.registerComponent('crna-kitchen-sink', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
