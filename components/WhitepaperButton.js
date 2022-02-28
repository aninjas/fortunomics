import { View, Text, Image, TouchableHighlight } from "react-native";
import { Main, WhitepaperStyle } from "../Styles";

export const WhitepaperButton = () => {
  return (
    <TouchableHighlight
      onPress={() => alert("You pressed the Whitepaper button")}
    >
      <View style={[WhitepaperStyle.container, Main.wrapper]}>
        <Image
          style={WhitepaperStyle.image}
          source={require("../assets/Ipad-Mockup-front-whitepaper.png")}
        />
        <View style={WhitepaperStyle.textContainer}>
          <Text style={[Main.textBold, Main.text]}>Whitepaper V1.2</Text>
          <Text style={[Main.textGray, Main.text]}>
            Click to read te Whitepaper
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
