import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';

const Landing = () => {
    return(
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner}/>

            <Text style={styles.title}>
                Hi, there! {'\n'}
                <Text style={styles.titleBold}>
                    What do you want to do?
                </Text>
            </Text>
        </View>
    );
}

export default Landing;
