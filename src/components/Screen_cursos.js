import React from "react";
import { Button, Text, View } from "react-native";

export default function Screen_cursos(){
    return(
        <View>
            <Button title="E.P.E.T.20" onPress={() => console.log("Redireccionado")}></Button>
            <Button title="5°" onPress={() => console.log("Quinto")}></Button>
        </View>
    );
}
