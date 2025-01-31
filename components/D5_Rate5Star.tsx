import {View, StatusBar, SafeAreaView, useWindowDimensions } from "react-native";
import PDF from "react-native-pdf";
import 'expo-dev-client';
import React from "react";

const source = {
    uri: "https://bbarrettchs.weebly.com/uploads/3/7/7/8/37782575/lvp_java_text.pdf",
    uri3: "https://assets.withfra.me/pdf/sample.pdf",
    cache: true,
};


function RateTheApp() {
    const { width, height } = useWindowDimensions();
    return (
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <PDF
                source={source}
                trustAllCerts={false}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{ flex: 1, width, height }}
            />
        </View>
    );
}

export default RateTheApp;