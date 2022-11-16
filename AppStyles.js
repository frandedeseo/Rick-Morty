// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
       backgroundColor: '#202329'
    },

    blur: { 
        position: 'absolute', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        width: '100%', 
        height: '100%'
    },

    loading: {
        position: 'absolute',
        alignSelf: 'center',
        top: '40%'
    }
})