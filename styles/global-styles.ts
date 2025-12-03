import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calcutorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingBottom: 20,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 60,
        fontWeight: '400',
        textAlign: 'right',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        fontWeight: '400',
        textAlign: 'right',

    },

    row: {
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: 10,
        paddingRight: 20,
    },

    button: {
        height: 85,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        color: Colors.textPrimary,  
    }
});