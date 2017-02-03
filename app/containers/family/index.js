import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, View, Button, Icon, Content, Title, Text} from 'native-base';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';
class Family extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                              latitude: 37.78825,
                              longitude: -122.4324,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                            }}
                        />
                    </View>
                </Content>
            </Container>
        )
    }

}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height, width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Family;