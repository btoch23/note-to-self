import { Card, Text, Button } from "react-native-paper"; 
import { StyleSheet } from "react-native";

const Note = () => {
    const today = new Date();

    return (
        <Card style={styles.noteCard}>
            <Card.Title title='Note Title' subtitle={today.toLocaleDateString('en-US')} />
            <Card.Content>
                <Text>
                    This is the body of the note. Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                </Text>
            </Card.Content>
            {/* <Card.Actions>
                <Button mode="contained" buttonColor="#d7a9d8">Delete</Button>
            </Card.Actions> */}
        </Card>
    );
}

const styles = StyleSheet.create({
    noteCard: {
        width: '47%',
        margin: 5,
        backgroundColor: '#6A994E',
        maxHeight: 200
    }
})

export default Note;