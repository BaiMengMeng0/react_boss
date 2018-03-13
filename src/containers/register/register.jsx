import React from 'react'
import {NavBar,WingBlank,List,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const RadioItem = Radio.RadioItem
class Register extends React.Component{
  state={
    name:'',
    pwd:'',
    pwd2:'',
    type:'boss'
  }
  handleChange=(name,val)=>{
    this.setState({[name]:val})
  }
  toLogin=()=>{
    this.props.history.replace('/Login')
  }
  handleRegister=()=>{
    console.log(this.state);
  }
  render(){
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={(val)=>{this.handleChange('name',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem onChange={(val)=>{this.handleChange('pwd',val)}} type='password'>密 码:</InputItem>
            <WhiteSpace/>
            <InputItem onChange={(val)=>{this.handleChange('pwd2',val)}} type='password'>确认密码:</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type === 'boss'} onChange={(val)=>{this.handleChange('type','boss')}}>Boss</RadioItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type === 'genius'} onChange={(val) => this.handleChange('type', 'genius')}>牛人</RadioItem>
            <Button type='primary' onClick={this.handleRegister}>注 册</Button>
            <Button onClick={this.toLogin}>已经有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default Register