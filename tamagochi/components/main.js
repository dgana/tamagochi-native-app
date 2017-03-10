import React, { Component } from 'react';

import { Image, Dimensions, View, ProgressBar } from 'react-native'
import { Container, Icon, Card, CardItem, Toast, Header, Content, Form, Item, Input, Text, Title, Button, Left, Right, Body } from 'native-base';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from 'react-native-easy-grid';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      petName: ''
    }
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

          <Image
            source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/a6/94/15/a6941533a989b3b4ee7ff00891f97107.jpg'}}
            style={{height: deviceHeight, width: deviceWidth}}
          >

          <View style={{marginTop:50}}>
            <Grid>
              <Col style={{height: 200}}>
                <Image
                  source={{uri:'https://pbs.twimg.com/media/Bm6iLlECMAAS__v.png'}}
                  style={{height: 100, width: 100}}
                >
                </Image>
              </Col>
              <Col style={{height: 200  }}>
                <Progress.Bar progress={1} width={150} />
                <Progress.Bar progress={0.8} width={150} />
                <Progress.Bar progress={1} width={150} />
              </Col>
            </Grid>
          </View>


          </Image>
        </Content>
      </Container>
    );
  }
}
