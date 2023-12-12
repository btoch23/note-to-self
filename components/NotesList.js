import Note from "./Note";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, FAB } from "react-native-paper";

const NotesList = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#F2E8CF'}}>
            <View>
                <Text 
                    style={styles.listTitle} 
                    variant="displayMedium"
                >
                    Note to Self
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.listView}>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </ScrollView>
            <FAB 
                icon='plus'
                style={styles.fab}
                theme={{ colors: {primaryContainer: '#BC4749'} }}
                color='#F2E8CF'
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    listView: {
        marginVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 20     
    },
    listTitle: {
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 50,
    },
    fab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16,
    }
})

export default NotesList;