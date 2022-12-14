// React
import { Image } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';

// Tab Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const Tab = createBottomTabNavigator();

export default function App() { 
    return (
        <Provider store = {store}>
            <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName = 'home'
                    screenOptions = {({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'home') {
                                return focused ? 
                                    <Image style = {{ width: size, height: size }} source = {require('./assets/home.png')} /> 
                                    : <Image style = {{ width: size, height: size }} source = {require('./assets/home_unfocused.png')} />
                            }

                            else if (route.name === 'favorites') {
                                return focused ?
                                    <Image style = {{ width: size, height: size }} source = {require('./assets/favorites.png')} />
                                    : <Image style = {{ width: size, height: size }} source = {require('./assets/favorites_unfocused.png')} />
                            }
                            else if (route.name === 'history') {
                                return (<Image style = {{ width: size, height: size }} source = {require('./assets/history.png')} />)
                            }
                        },
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: 'grey'                
                    })} 
                >
                    <Tab.Screen name = 'home' component = {HomeScreen} options = {{ headerShown: false }} />
                    <Tab.Screen name = 'favorites' component = {FavoritesScreen} options = {{ headerShown: false }} />
                    <Tab.Screen name = 'history' component = {HistoryScreen} options = {{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
