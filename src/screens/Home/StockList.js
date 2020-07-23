import React, { Component } from "react";
import { Picker, View, Text, StyleSheet, Alert } from "react-native";
import { Button } from 'react-native-paper';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';

export default class StockList extends Component {
  state = {
    value: false,
    selectedcat: "",
    tableHead: ['Blood Bags'],
    tableTitle: ['A +', 'A -', 'B +', 'B -', 'AB +', 'AB -', 'O +', 'O -'],
    tableData: [['20'], ['10'], ['5'], ['10'], ['100'], ['0'], ['15'], ['0']],
    BloodBankName: [
      {
        bankName: "Malad Blood Bank"
      },
      {
        bankName: "Parel Blood Bank"
      },
      {
        bankName: "Bandra West Blood Bank"
      },
      {
        bankName: "Kurla Blood Bank"
      }
    ]
  };

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  search = () => {
    if (this.state.value === false) {
      this.setState({ value: !this.state.value })
    } else {
      this.setState({ value: !this.state.value })
    }
  }
  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const state = this.state;
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.viewStyle}>
          <View style={{ flex: 0.4 }}>
            <Text style={styles.textStyle}>Blood Bank:</Text>
          </View>
          <View style={{ flex: 0.7, fontSize: 14 }}>
            <Picker
              itemStyle={styles.itemStyle}
              mode="dropdown"
              style={styles.pickerStyle}
              selectedValue={this.state.selectedcat}
              onValueChange={this.onValueChangeCat.bind(this)}
            >
              {this.state.BloodBankName.map((item, index) => (
                <Picker.Item
                  color="#EC050C"
                  label={item.bankName}
                  value={item.bankName}
                  index={index}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            style={{ backgroundColor: '#EC050C', padding: 5 }}
            mode='contained'
            color='black'
            onPress={this.search}>
            <Text style={{ color: 'white' }}>Serach</Text>
          </Button>
        </View>
        {this.state.value === true ?
          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1 }}>
              <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
              <TableWrapper style={styles.wrapper}>
                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            </Table>
            <View style={{ marginTop: 10 }}>
              <Button
                style={{ backgroundColor: '#EC050C', padding: 5 }}
                mode='contained'
                color='black'
                onPress={this.goBack}
              >
                <Text style={{ color: 'white' }}>Go Back</Text>
              </Button>
            </View>
          </View>
          : <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 15 }}>Please Search for result</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    padding: 8,
  },
  itemStyle: {
    fontSize: 10,
    color: "#EC050C"
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#EC050C",
    fontSize: 14,
  },
  textStyle: {
    fontSize: 17,
    paddingTop: 8,
    fontWeight: 'bold'
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center', fontWeight: 'bold' }
});
