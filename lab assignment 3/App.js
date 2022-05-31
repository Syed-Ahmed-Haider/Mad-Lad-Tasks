import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import SalahTracker from "./screens/SalahTracker/SalahTracker";
import Charts from "./screens/Charts";
import { AsyncStorage } from 'react-native';
import { GlobalContext } from "./api/SalahContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
setTheArray(currentArray => [...currentArray, newElement])
this.setState({ myArray: [...this.state.myArray, 'inp'] }) //simple value
this.setState({ myArray: [...this.state.myArray, ...[] ] }) //another array


export default function App() {
  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:key',
        'I like to save it.'
      );
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const {useState, useCallback} = React;
function Example() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray([...theArray, `Entry ${theArray.length}`]);
    };
    return [
        <input type="button" onClick={addEntryClick} value="Add" />,
        <View>{theArray.map(entry =>
          <View>{entry}</View>
        )}
        </View>
    ];
}

ReactDOM.render(
    <Example />,
    document.getElementById("root")
);
  return (
    <GlobalContext>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* //Screen 1 */}
          <Tab.Screen
            name="Home"
            component={SalahTracker}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require("./assets/images/home.png")}
                    style={{ width: 30, height: 30 }}
                  />
                );
              },

              tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
              },
            }}
          />
          {/* //Screen 2 */}
          <Tab.Screen
            name="Charts"
            component={Charts}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require("./assets/images/chart.png")}
                    style={{ width: 30, height: 30 }}
                  />
                );
              },
              tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalContext>
  );
}
