import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_WHITE,
        paddingHorizontal: Mixins.scaleSize(14),
        paddingVertical: Mixins.scaleSize(8),
        height: Mixins.scaleSize(58),
        elevation: 3
    },

    tabContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabContainerActived: {
        flex: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.COLOR_RED
    },

    textActivated: {
        color: Colors.COLOR_WHITE,
        fontSize: Mixins.scaleFont(16),
        fontWeight: '500'
    },

    textNormal: {
        color: Colors.COLOR_DARK_GRAY,
        fontWeight: '500'
    },
})

export default styles