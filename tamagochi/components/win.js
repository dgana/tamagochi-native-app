import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native'
import { Container, Header, Content, H2, Body, Title } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Win extends Component {
  constructor(props){
    super(props)
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
            <H2 style={{textAlign:'center', marginTop:50}}>Your pet have full experience!</H2>
          </Image>
        </Content>
      </Container>
    );
  }
}
