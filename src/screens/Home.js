import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import * as selectors from "../selector";

function mapStateToProps(state) {
  const count = selectors.getCountFromState(state);
  return {
    count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increse: actions.increaseCount,
      increseAsync: actions.increaseCountAsync,
      decrese: actions.decreaseCount,
      decreseAsync: actions.decreaseCountAsync
    },
    dispatch
  );
}

function TestHome(props) {
  const { count = 0, increse, decrese, increseAsync, decreseAsync } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexGrow: 1,
          padding: 24
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              increse(0);
            }}
          >
            <Text>Plus +</Text>
          </TouchableOpacity>
          <View>
            <Text>{count}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (count === 0) {
                return;
              }
              decrese(count);
            }}
          >
            <Text>Minus -</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              increseAsync(0);
            }}
          >
            <Text>Plus Async +</Text>
          </TouchableOpacity>
          <View>
            <Text>{count}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (count === 0) {
                return;
              }
              decreseAsync(count);
            }}
          >
            <Text>Minus Async -</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TestHome);
