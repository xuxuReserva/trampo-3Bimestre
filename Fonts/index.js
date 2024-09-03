import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = creareContext({});

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        

    });

    if (!loaded && !error) {
        return ( 
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontFamily: "bold", fontSize: 28 }}>carregando</Text>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
        
        );
      }
    return <FontContext.Provider value={{loaded}}></FontContext.Provider>;
}



export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context; 
}