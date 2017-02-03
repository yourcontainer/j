import React from 'react';
import {Container, View, Content} from 'native-base';
import {Dimensions, ScrollView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import CustomActions from './CustomActions';

class Chat extends React.Component {

    static navigatorButtons = {
        leftButtons: [{
            icon: require('../../icons/navicon_menu.png'),
            id: 'menu'
        }],
    };

    constructor(props) {
        super(props);

        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    onNavigatorEvent(event) {
        if (event.id === 'menu') {
            this.props.navigator.toggleDrawer({
                side: 'left',
                animated: true
            });
        }
    }



    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }

    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <Container>
                <View style={{flex: 1, position: 'absolute', width, height, bottom: 0}}>
                    <View>
                        <GiftedChat
                            renderActions={() => <CustomActions />}
                            messages={this.state.messages}
                            onSend={this.onSend}
                            user={{
                          _id: 1,
                        }}
                        />
                    </View>
                </View>
            </Container>
        )
    }

}

export default Chat;