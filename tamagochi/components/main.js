import React, { Component } from 'react';

import { Image, Dimensions, View, ProgressBar, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Icon, Card, CardItem, Toast, Header, Content, Form, Item, Input, Text, Title, Button, Left, Right, Body } from 'native-base';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from 'react-native-easy-grid';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      petName: '',
      experience: 0,
      hunger: 1,
      thirst: 1
    }
  }

  loop(){
    var hungerRandom = Math.random() / 40
    var thirstRandom = Math.random() / 20
    if(this.state.hunger <= 0) {
      this.setState({
        hunger: 0
      })
    }
    if(this.state.thirst <= 0) {
      this.setState({
        thirst: 0
      })
    }
    if(this.state.hunger <= 0 || this.state.thirst <= 0) {
      this.props.goToLose()
    }
    if(this.state.experience >= 1) {
      this.props.goToWin()
    }
    this.setState({
      hunger: this.state.hunger - (hungerRandom),
      thirst: this.state.thirst - (thirstRandom)
    })
  }

  componentDidMount(){
    setInterval(() => this.loop(), 1000);

    // console.log(typeof this.props.goToLose());
    console.log(this.state.hunger);
    console.log(this.state.thirst);


  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Tamagochi</Title>
          </Body>
        </Header>
        <Content>
          <Image source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/a6/94/15/a6941533a989b3b4ee7ff00891f97107.jpg'}} style={{height: deviceHeight, width: deviceWidth}}>
          <View style={{marginTop:45}}>
            <Grid>
              <Col style={{height: 120, alignItems:'center'}}>
                <Image source={{uri:'https://pbs.twimg.com/media/Bm6iLlECMAAS__v.png'}} style={{height: 100, width: 100}}>
                </Image>
              </Col>
              <Col style={{height: 120}}>
                <Text style={{color:'lightblue'}}>Experience</Text>
                <Progress.Bar progress={this.state.experience} width={150} style={{marginBottom:10}} />
                <Text style={{color:'lightblue'}}>Hunger</Text>
                <Progress.Bar progress={this.state.hunger} width={150} style={{marginBottom:10}} />
                <Text style={{color:'lightblue'}}>Thirst</Text>
                <Progress.Bar progress={this.state.thirst} width={150} style={{marginBottom:10}} />
              </Col>
            </Grid>
          </View>

          <View style={{marginTop:200}}>
            <Grid>
              <Col style={{height: 120, alignItems:'center'}}>
                <TouchableOpacity
                  onPress={() => this.setState({
                    experience: this.state.experience + 0.1,
                    hunger: this.state.hunger - 0.3,
                    thirst: this.state.thirst - 0.3,
                  })}>
                  <View style={styles.button}>
                    <Text style={{marginLeft:5, marginTop:5}}>
                      <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/black-easy/512/535112-game_512x512.png'}} style={{height: 50, width: 50}}></Image>
                    </Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col style={{height: 120, alignItems:'center'}}>
                <TouchableOpacity
                  onPress={() => this.setState({
                    hunger: this.state.hunger + 0.3
                  })}>
                  <View style={styles.button}>
                    <Text style={{marginLeft:5, marginTop:5}}>
                      <Image source={{uri:'https://maxcdn.icons8.com/Share/icon/Food//cherry1600.png'}} style={{height: 50, width: 50}}></Image>
                    </Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col style={{height: 120, alignItems:'center'}}>
                <TouchableOpacity
                  onPress={() => this.setState({
                    thirst: this.state.thirst + 0.3
                  })}>
                  <View style={styles.button}>
                    <Text style={{marginLeft:5, marginTop:5}}>
                      <Image source={{uri:'https://cdn.iconscout.com/public/images/icon/free/png-512/coffee-tea-maker-kitchen-equipment-food-drink-3e52326e984cac6c-512x512.png'}} style={{height: 50, width: 50}}></Image>
                    </Text>
                  </View>
                </TouchableOpacity>
              </Col>
            </Grid>
          </View>

          </Image>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#33AAFF',
    borderWidth: 10,
    borderRadius: 50,
    borderColor: '#33AAFF',
    padding: 5,
    width: 90,
    height: 90,
  }
})
