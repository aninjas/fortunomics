import { StyleSheet } from "react-native";

export const Main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f0ec",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    paddingHorizontal: 10,
  },
  textBold: {
    fontWeight: "bold",
    color: "#282828",
  },
  textGray: {
    color: "#808080",
  },
  textBlue: {
    color: "#213C66",
  },
  wrapper: {
    marginBottom: 10,
  },
  textGroup: {
    flexDirection: "row",
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
});

export const WhitepaperStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF00",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 120,
    aspectRatio: 1,
  },
  textContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export const ChapterStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#00008b",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    aspectRatio: 1,
    marginVertical: 5,
  },
  number: {
    fontSize: 35,
    fontWeight: 1000,
    color: "#fff",
  },
});

export const PlanningStyle = StyleSheet.create({
  container: {
    backgroundColor: "#213C66",
    borderRadius: 25,
  },
  textHeader: {
    color: "#fff",
  },
  phaseContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tokenContainer: {
    backgroundColor: "#fff",
  },
  columnContainer: {
    flexDirection: "row",
  },
  columnHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnWhitespace: {
    width: 65,
  },
});

export const TokenStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logoPlaceholder: {
    width: 65,
    aspectRatio: 1,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBlock: {
    flex: 1,
  },
});
