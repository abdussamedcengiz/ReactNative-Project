import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../Components/Informationn";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title=" Eğitim1"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamlı yazılım Eğitimi"
      />
      <Information
        title="Eğitim2"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamlı yazılım Eğitimi"
      />
      <Information
        title=" Eğitimi3"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamlı yazılım Eğitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
