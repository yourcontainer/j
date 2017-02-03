import React from 'react';
import { Container, Content, Text, List, ListItem, Icon, View } from 'native-base';
import sidebarTheme from './sidebar-theme';
import styles from './style';
import { Image } from 'react-native';

const drawerCover = require('../../img/drawer-cover.png');
const drawerImage = require('../../img/logo-kitchen-sink.png');



class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    render() {
        return (
            <Container>
                <Content
                    theme={sidebarTheme}
                    style={styles.sidebar}
                >
                    <View>
                        <View>
                            <Image source={drawerCover} style={styles.drawerCover}>
                                <Image
                                    square
                                    style={styles.drawerImage}
                                    source={drawerImage}
                                />
                            </Image>
                        </View>
                        <List>
                            <ListItem button iconLeft>
                                <View style={styles.listItemContainer}>
                                    <View style={[styles.iconContainer, { backgroundColor: '#0209D8', paddingLeft: 14 }]}>
                                        <Icon name="ios-phone-portrait-outline" style={styles.sidebarIcon} />
                                    </View>
                                    <Text style={styles.text}>Anatomy</Text>
                                </View>
                            </ListItem>
                            <ListItem button iconLeft>
                                <View style={styles.listItemContainer}>
                                    <View style={[styles.iconContainer, { backgroundColor: '#4DCAE0' }]}>
                                        <Icon name="ios-notifications-outline" style={styles.sidebarIcon} />
                                    </View>
                                    <Text style={styles.text}>Badge</Text>
                                </View>
                            </ListItem>
                        </List>
                    </View>
                </Content>
            </Container>
        )
    }

}

export default SideMenu;