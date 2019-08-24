import React from "react";
import { StatusBar, View, TouchableOpacity, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createAppContainer
} from "react-navigation";
import HomeStackNavigator from "./src/components/navigation/home-stack-navigator";
// import HomeScreen from "./src/components/screens/home-screen";
// import ShowDateilsScreen from "./src/components/screens/show-details-screen";
import { COLORS } from "./src/constants/styles";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
`;

const drawerRouterConfig = {
  Home: HomeStackNavigator
};

const styles = styled.View`
  flex: 1;
  background-color: #fff;
`;

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.View}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />
};

const AppDrawer = createDrawerNavigator(
  drawerRouterConfig,
  drawerNavigatorConfig
);

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        {/* <HomeStackNavigator /> */}
        <AppDrawer />
      </AppContainer>
    );
  }
}

export default App;
