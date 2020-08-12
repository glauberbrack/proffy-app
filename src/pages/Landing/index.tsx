import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

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

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Give Classes</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                100 connections already made {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    );
}

export default Landing;
