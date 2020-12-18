import * as React from 'react'
import { View, Text } from 'react-native'
import TouchableText from '../../component/TouchableText/component'
import { CreateTabBar, DailyAbsenStack } from '../../navigator/Navigator'
import { defaultStyles } from '../../styles/DefaultText'
import styles from './styles'

const AdminHome = ({ navigation }) => {

    const configuration = [
        {
            name: 'DailyAbsen',
            component: DailyAbsenStack,
            title: 'Absen Harian'
        },
        {
            name: 'EventAbsen',
            component: DailyAbsenStack,
            title: 'Absen Acara'
        }
    ]

    return (
        <>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <View style={styles.leftGroup}>
                        <Text
                            numberOfLines={1}
                            style={[
                                defaultStyles.textBold,
                                defaultStyles.textLargeDefault,
                                styles.nameText,
                            ]}>
                            Admin
                        </Text>
                    </View>
                </View>
                <TouchableText
                    text={'Keluar'}
                    textstyle={[defaultStyles.textNormalDefault, styles.logoutText]}
                    onPress={() => navigation.navigate('CodeAdmin')}
                />
            </View>
            <CreateTabBar config={configuration} />
        </>
    )
}

export default AdminHome