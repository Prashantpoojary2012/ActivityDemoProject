
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Activity from '../Pages/Activity';
import ListActivity from '../Pages/ListActivity';
import UploadActivity from '../Pages/UploadActivity';
import ViewActivity from '../Pages/ViewActivity';

const mainNavigator = createStackNavigator({
    Activity: {
        screen: Activity,
        navigationOptions: () => ({
            title: 'Activity',
            headerTitleStyle: { alignSelf: 'center' }
        })
    },
    ListActivity: {
        screen: ListActivity,
        navigationOptions: () => ({
            title: 'List Activity',
            headerTitleStyle: { alignSelf: 'center' }
        })
    },
    UploadActivity: {
        screen: UploadActivity,
        navigationOptions: () => ({
            title: 'Upload Activity',
            headerTitleStyle: { alignSelf: 'center' }
        })
    },
    ViewActivity: {
        screen: ViewActivity,
        navigationOptions: () => ({
            title: 'View Details',
            headerTitleStyle: { alignSelf: 'center' }
        })
    },

});
// const AppNavigator = createSwitchNavigator({
//     Home: {
//       screen: mainNavigator,
//     },
//   });
const AppContainer = createAppContainer(mainNavigator);

export { AppContainer };