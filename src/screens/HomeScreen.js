import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 10, alignItems: "center", justifyContent: "center" ,top:10,right:'auto'}}>
      <Text>Ana Ekran</Text>
      <Button
      style={styles.n}
        title=" Kurslarım"
        onPress={() => navigation.navigate("Kurslarım")}
      />
       <Button
        title=" Kurs bilgilerim"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        title=" Sayac Uygulaması"
        onPress={() => navigation.navigate("Sayac")}
      />
      <Button
        title=" Kutu Uygulaması "
        onPress={() => navigation.navigate("Kutu Uygulaması")}
      />
        <Button
        title=" Renk Degistir "
        onPress={() => navigation.navigate("Renk Degistir")}
      />
      <Button
        title=" Şifre Ekranı "
        onPress={() => navigation.navigate("Şifre Ekranı")}
      />
        <Button
        title=" Design Ekranı "
        onPress={() => navigation.navigate("Design Ekranı")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  n:{
    margin:10,
    height:700,
     alignItems:'flex-start',
     flexDirection:'row',
     justifyContent:'flex-end'
  }
});
