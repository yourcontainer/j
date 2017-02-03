import React from 'react';

import Feed from './app/containers/feed';
import Family from './app/containers/family';
import Chat from './app/containers/chat';
import SideMenu from './app/containers/side-menu';

import {Navigation} from 'react-native-navigation';


function registerScreens() {
    Navigation.registerComponent('Jeevsy.Feed', () => Feed);
    Navigation.registerComponent('Jeevsy.Family', () => Family);
    Navigation.registerComponent('Jeevsy.Chat', () => Chat);
    Navigation.registerComponent('Jeevsy.SideMenu', () => SideMenu);
}

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Feed',
            screen: 'Jeevsy.Feed',
            icon: require('./app/icons/notebook@3x.png'),
            selectedIcon: require('./app/icons/notebook@3x.png'),
            title: 'Feed'
        },
        {
            label: 'Family',
            screen: 'Jeevsy.Family',
            icon: require('./app/icons/near@3x.png'),
            selectedIcon: require('./app/icons/near@3x.png'),
            title: 'Family'
        },
        {
            label: 'Chat',
            screen: 'Jeevsy.Chat',
            icon: require('./app/icons/chat@3x.png'),
            selectedIcon: require('./app/icons/chat@3x.png'),
            title: 'Chat'
        }
    ],
    drawer: {
        left: {
            screen: 'Jeevsy.SideMenu'
        },
        disableOpenGesture: false,
        style: {
            leftDrawerWidth: 80,
        }
    },
    tabsStyle: {
        tabBarBackgroundColor: '#fef9ff',
    },
    //animationType: 'slide-down'
});


// export default class Jeevsy extends Component {
//
//     state = {
//         selectedTab: 'Feed',
//     };
//
//
//     render() {
//         return (
//             <TabBarIOS>
//                 <TabBarIOS.Item
//                     title="Feed"
//                     icon={require('./app/icons/notebook@3x.png')}
//                     selected={this.state.selectedTab == 'Feed'}
//                     onPress={() => this.setState({selectedTab: 'Feed'})}
//                 >
//                     <Feed />
//                 </TabBarIOS.Item>
//
//                 <TabBarIOS.Item
//                     title="Family"
//                     icon={require('./app/icons/near@3x.png')}
//                     selected={this.state.selectedTab == 'Family'}
//                     onPress={() => this.setState({selectedTab: 'Family'})}
//                 >
//                     <Family />
//                 </TabBarIOS.Item>
//
//                 <TabBarIOS.Item
//                     title="Chat"
//                     icon={require('./app/icons/chat@3x.png')}
//                     selected={this.state.selectedTab == 'Chat'}
//                     onPress={() => this.setState({selectedTab: 'Chat'})}
//                 >
//                     <Chat />
//                 </TabBarIOS.Item>
//             </TabBarIOS>
//         );
//     }
//
// }
//
// AppRegistry.registerComponent('Jeevsy', () => Jeevsy);
