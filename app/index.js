import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View } from "react-native";

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>App pronto</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "regular",
        fontSize: 20,
    },
})