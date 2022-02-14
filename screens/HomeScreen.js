import { SafeAreaView, Image, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const HomeScreen = () => {

  console.log(GOOGLE_MAPS_API_KEY)
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            }, 
            textInput: {
              fontSize: 18
            }
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY, 
            language: "en"
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          onFail={(error) => console.log(error)}
          debounce={400}/>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
