import * as React from 'react'
import { CirclesLoader } from 'react-native-indicator'
import { Colors } from '../../styles'

const Spinner = () => {
    return <CirclesLoader color={Colors.COLOR_RED} />
}

export default Spinner