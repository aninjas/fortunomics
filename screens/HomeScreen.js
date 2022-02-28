import { Text, View } from "react-native";
import { WhitepaperButton } from "../components/WhitepaperButton";
import { Chapters } from "../components/Chapters";
import { Planning } from "../components/Planning";
import { Main } from "../Styles";

export const HomeScreen = () => {
  return (
    <View style={Main.container}>
      <Text style={[Main.textGray, Main.wrapper]}>
        Welcome to the Fortunomics NEXT App
      </Text>
      <WhitepaperButton />
      <Chapters />
      <Planning />
    </View>
  );
};
