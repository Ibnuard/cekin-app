import * as React from 'react'
import { View, Text, Image, KeyboardAvoidingView, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../component/Button/component'
import Input from '../../component/Input/component'
import CustomStatusBar from '../../component/StatusBar/component'
import { Colors } from '../../styles'
import { defaultStyles } from '../../styles/DefaultText'
import { IMAGES } from '../../styles/Images'
import styles from './styles'

const SigninScreen = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const LogoContainer = () => {
        return (
            <View style={styles.topContainer}>
                <Image source={IMAGES.logo} style={styles.logo} />
            </View>
        )
    }

    const InputContainer = () => {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.inputContainer}>
                <Input
                    placeholder={'Masukan Email'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType={'email-address'}
                    style={[styles.input, defaultStyles.textNormalDefault]} />
                <Input
                    placeholder={'Masukan 6 digit kode akses'}
                    value={password}
                    keyboardType={'phone-pad'}
                    returnKeyType={'done'}
                    maxLength={6}
                    onChangeText={(text) => setPassword(text)}
                    isPassword
                    style={[styles.input, defaultStyles.textNormalDefault]} />
            </KeyboardAvoidingView>
        )
    }

    const ButtonContainer = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button title={'Masuk'} containerStyle={styles.button} />
            </View>
        )
    }

    const BackgroundContainer = () => {
        return (
            <View style={styles.backgroundContainer}>
                <Image source={IMAGES.auth_bg} style={styles.bg} resizeMode={'stretch'} />
            </View>
        )
    }

    const BottomContainer = () => {
        return (
            <View style={styles.bottomContainer}>
                <Text style={defaultStyles.textNormalDefault}>Belum punya akun?</Text>
                <TouchableOpacity activeOpacity={.6} style={styles.textButton}>
                    <Text style={[defaultStyles.textNormalDefault, defaultStyles.textBold,]}>Daftar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const CustomStatusBar = () => {
        return <StatusBar backgroundColor={Colors.COLOR_WHITE} barStyle={'dark-content'} />
    }

    return (
        <View style={styles.container}>
            {CustomStatusBar()}
            {LogoContainer()}
            {InputContainer()}
            {ButtonContainer()}
            {BackgroundContainer()}
            {BottomContainer()}
        </View>
    )
}

export default SigninScreen