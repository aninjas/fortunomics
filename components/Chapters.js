import { View, Text, TouchableHighlight } from "react-native";
import { Main, ChapterStyle } from "../Styles";

const AllChapters = [1, 2, 3, 4, 5, 6];

const printChapter = (number) => {
  return (
    <TouchableHighlight>
      <View style={ChapterStyle.button}>
        <Text style={ChapterStyle.number}>{number}</Text>
      </View>
    </TouchableHighlight>
  );
};

export const Chapters = () => {
  return (
    <View>
      <Text style={[Main.textBold]}>Fortunomics chapters</Text>
      <View style={[ChapterStyle.container, Main.wrapper]}>
        {AllChapters.map((x) => printChapter(x))}
      </View>
    </View>
  );
};
