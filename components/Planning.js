import { View, Text } from "react-native";
import { Main, PlanningStyle } from "../Styles";
import { Token } from "./Token";

//temporary data
const activePhase = 1;

const token = {
  name: "RA",
  description: "Cloud hosting token",
  type: "Security Token Offering",
  volume: 1000000,
  available: 1000000,
  phase1value: 0.25,
};

const token2 = {
  name: "Test",
  description: "Token",
  type: "Security Token Offering",
  volume: 1000000,
  available: 1000000,
  phase1value: 0.25,
};

export const Planning = () => {
  return (
    <View>
      <Text style={Main.textBold}>
        Get involved in the fortunity opportunity
      </Text>
      <View style={PlanningStyle.container}>
        <Text style={[Main.textBold, PlanningStyle.textHeader, Main.text]}>
          Planning voor Fortunity token launch
        </Text>
        {/* Phase container */}
        <View style={PlanningStyle.phaseContainer}>
          <Text style={[Main.textBold, Main.textBlue, Main.text]}>
            PHASE {activePhase}
          </Text>
          <Text style={[Main.textBold, Main.textBlue, Main.text]}>
            VALUE = €{token.phase1value}
          </Text>
        </View>
        {/* Token container */}
        <View style={PlanningStyle.tokenContainer}>
          {/* Column headers */}
          <View style={PlanningStyle.columnContainer}>
            <View style={PlanningStyle.columnWhitespace} />
            <View style={PlanningStyle.columnHeader}>
              <View style={Main.textGroup}>
                <Text style={[Main.textBold, Main.textBlue, Main.paddingLeft]}>
                  TOKEN/
                </Text>
                <Text style={[Main.textGray]}>TYPE</Text>
              </View>
              <View style={Main.textGroup}>
                <Text style={[Main.textBold, Main.textBlue]}>VOLUME/</Text>
                <Text style={[Main.textGray, Main.paddingRight]}>
                  AVAILABLE
                </Text>
              </View>
            </View>
          </View>
          <Token token={token} />
          <Token token={token2} />
        </View>
      </View>
    </View>
  );
};
