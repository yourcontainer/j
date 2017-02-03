import React from 'react';
import {
    Container, View, Tabs, Icon, Content, Title, Text, Card, CardItem, Thumbnail
}
from 'native-base';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

class Feed extends React.Component {

    static navigatorStyle = {
        //navBarBackgroundColor: '#FF3B30',
        navBarButtonColor: 'black',
        //navBarTranslucent: true
        //statusBarTextColorScheme: 'dark',
        //drawUnderNavBar: true,
        //navBarBlur: true,

        //navBarNoBorder: true
    };

    static navigatorButtons = {
        leftButtons: [{
            icon: require('../../icons/navicon_menu.png'),
            id: 'menu'
        }],
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'menu') {
            this.props.navigator.toggleDrawer({
                side: 'left',
                animated: true
            });
        }
    }

    render() {
        return (
            <Container>
                <Content>
                        <View>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Thumbnail style={{width: 50, height: 50}} source={require('../../icons/contacts@3x.png')} />
                                    <View>
                                        <Text>Alisa</Text>
                                        <Text note style={{fontSize: 11, color: 'grey'}}>Publish at April 15, 2016</Text>
                                    </View>
                                </CardItem>

                                <CardItem cardBody>
                                    <Text>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Thumbnail style={{width: 50, height: 50}} source={require('../../icons/contacts@3x.png')} />
                                    <View>
                                        <Text>Alisa</Text>
                                        <Text note style={{fontSize: 11, color: 'grey'}}>Publish at April 15, 2016</Text>
                                    </View>
                                </CardItem>

                                <CardItem cardBody>
                                    <Text>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Thumbnail style={{width: 50, height: 50}} source={require('../../icons/contacts@3x.png')} />
                                    <View>
                                        <Text>Alisa</Text>
                                        <Text note style={{fontSize: 11, color: 'grey'}}>Publish at April 15, 2016</Text>
                                    </View>
                                </CardItem>

                                <CardItem cardBody>
                                    <Text>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн
                                    </Text>
                                </CardItem>
                            </Card>
                        </View>
                </Content>

            </Container>
        )
    }

}

export default Feed;