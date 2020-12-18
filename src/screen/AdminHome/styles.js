import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.COLOR_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        padding: Mixins.scaleSize(8),
    },

    titles: {
        marginHorizontal: Mixins.scaleSize(12),
        paddingHorizontal: Mixins.scaleSize(12),
        paddingVertical: Mixins.scaleSize(14),
    },

    nameText: {
        color: Colors.COLOR_BLACK,
    },

    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Mixins.scaleSize(14),
        borderRadius: Mixins.scaleSize(24),
    },

    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logoutText: {
        paddingVertical: Mixins.scaleSize(18),
        paddingHorizontal: Mixins.scaleSize(15),
        borderRadius: Mixins.scaleSize(32),
        color: Colors.COLOR_RED,
    },
})

export default styles