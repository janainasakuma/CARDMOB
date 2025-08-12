import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen() {
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[ color: theme.colors.text, marginBottom: theme.spacing(1) ]}>
                Home Screen
                </Text>
            <Button title="Alteranar Tema" color={theme.colors.primary} onPress={toggleTheme}/>
        </View>
    );
}
export default HomeScreen;