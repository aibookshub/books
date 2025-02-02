import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
    },
    albumContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    albumCover: {
        width: screenWidth * 0.44,
        height: screenWidth * 0.45,
        borderRadius: 10,
    },
    albumTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    galleryGrid: {
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 2,
    },
    galleryItemContainer: {
        alignItems: 'center',
        width: '50%',
        aspectRatio: 9 / 16,
        marginBottom: 10,
    },
    galleryItemImage: {
        height: '88%',
        width: '100%',
        aspectRatio: 10 / 16,
        borderRadius: 8,
    },
    galleryItemTitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },

});

export default styles;

