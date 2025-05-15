import { Dimensions, StyleSheet } from "react-native";
import { th } from "vuetify/locale";
import { themas } from "../../global/themes";
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,

    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        // backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        // backgroundColor: 'blue',
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        // backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
    },
    titleInput: {
        marginTop: 20,
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: themas.colors.gray,
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 40,
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
    },
    input: {
        width: '90%',
        height: '100%',
        borderRadius: 40,
        paddingLeft: 5,
    },
    button: {
        width: 250,
        height: 50,
        marginTop: 30,
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,

    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray,

    },
});