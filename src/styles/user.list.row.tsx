import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  rowAlign: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fbId: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#767676",
    marginVertical: 2,
  },
  details: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 0.96,
  },
  line: {
    height: 0.6,
    width: "100%",
    backgroundColor: "#767676",
    marginTop: 8,
  },
  imgArrow: {
    width: 15,
    height: 15,
    tintColor: "#767676",
  },
});

export default styles;
