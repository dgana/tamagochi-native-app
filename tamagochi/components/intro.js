import React, { Component } from 'react';

import { Image, Dimensions, View } from 'react-native'
import { Container, Icon, Card, CardItem, Toast, Header, Content, Form, Item, Input, Text, Title, Button, Left, Right, Body } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Intro extends Component {
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

          <Form style={{ marginTop:'30%', marginRight:25, marginLeft:20, flex:1 }}>
            <Item>
              <Input
              style={{color:'lightblue'}}
              placeholderTextColor="lightblue"
              placeholder="Your Pet Name"
              onChangeText={(petName) => this.setState({petName})}
              value={this.state.petName}/>
            </Item>

            <Button rounded style={{marginTop:15}} onPress={()=> (!this.state.petName) ? Toast.show({
              text: 'Input your pet name!',
              position: 'bottom',
              buttonText: 'Okay'
            }) : this.props.goToMain()}>


            <Icon size={20} color={"#384850"} name={'ios-refresh'} />
              <Text>Submit</Text>
            </Button>

          </Form>

          </Image>
        </Content>
      </Container>
    );
  }
}
