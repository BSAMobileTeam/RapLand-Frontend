import React, { Component } from 'react'
import { 
    StyleSheet,
    StyleProp,
    ViewStyle,
    SafeAreaView,
    View
} from 'react-native'
import Constants from 'expo-constants'


interface IAppScreenProps {
    style: StyleProp<ViewStyle>,
    children: any
}

export default class AppScreen extends Component<IAppScreenProps, {}>{
    constructor (props: IAppScreenProps) {
        super(props)
    }
    render() {
        const { style, children } = this.props;
        return (
            <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]}>{children}</View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    screen: {        
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
})