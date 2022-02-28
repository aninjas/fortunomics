import { View, Text } from "react-native";
import { Main, TokenStyle } from "../Styles";

export const Token = (props) => {
  return (
    <View style={TokenStyle.container}>
      <View style={TokenStyle.logoPlaceholder}>
        <Text>LOGO</Text>
      </View>
      <View style={TokenStyle.textBlock}>
        <View style={TokenStyle.row}>
          <Text style={[Main.textBold, Main.textBlue, Main.text]}>
            {props.token.name + " - " + props.token.description}
          </Text>
          <Text style={[Main.textBold, Main.textBlue, Main.text]}>
            €{props.token.volume}
          </Text>
        </View>
        <View style={TokenStyle.row}>
          <Text style={[Main.textGray, Main.text]}>{props.token.type}</Text>
          <Text style={[Main.textGray, Main.text]}>
            €{props.token.available}
          </Text>
        </View>
      </View>
    </View>
  );
};
