import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import backgroundImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={backgroundImg} style={styles.content}>
                <Text style={styles.title}>
                    Want to be a Proffy?
                </Text>
                <Text style={styles.description}>
                    First of all, you need to create an account on our web plataform.
                </Text>
            </ImageBackground>
            
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Ok then :(
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;