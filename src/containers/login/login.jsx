import React from 'react'
import {NavBar,WingBlank,List,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const RadioItem = Radio.RadioItem
class Login extends React.Component{
  state={
    name:'',
    pwd:'',

  }
  handleChange=(name,val)=>{
    this.setState({[name]:val})
  }
  toRegister=()=>{
    this.props.history.replace('/Register')
  }
  handleLogin=()=>{
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

            <Button type='primary' onClick={this.handleLogin}>登录</Button>
            <Button onClick={this.toRegister}>还没有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default Login