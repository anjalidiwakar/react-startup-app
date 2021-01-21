import React, { useState } from 'react';
import { connect, useSelector }from 'react-redux';
import SignIn from '../signIn/SignIn';
import PrimaryButton from '../buttons/PrimaryButton';
import ActivePolls from '../polls/active-Poll/ActivePolls'
import ClosedPolls from '../polls/closed-Polls/ClosedPolls'
import { Tabs, Menu } from 'antd';
import './User.css'
import "antd/dist/antd.css";
import '../Common.css';

const { SubMenu } = Menu;

 class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRequest : "Sign In",
      compToRender : null,
      role : sessionStorage.getItem("role")
    };
    this.handleClick = this.handleClick.bind(this);
  }
   handleClick(clickHandler) {
    switch (clickHandler.key) {
      case "1":
        this.setState({ compToRender:<ActivePolls /> });
        console.log(this.state.compToRender)
        break;
      case "2":
        this.setState({compToRender:<ClosedPolls />})
        break;
      default:
        break;
    }
  }

  render() {
    if(this.props.ifLoggedIn.state_User_Logged_In!==true || this.state.role!=="User") { 
    return (
      <>    
        <SignIn />
      </>
    ) 
  }

    else {
      return (
        <>
          <div className="container">
            <div className="left">
              <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['pollMenu']}
                mode="inline">
                <SubMenu key="employeeMenu" title="My Profile">
                  <Menu.Item key="3">Personal Details</Menu.Item>
                  <Menu.Item key="4">Team</Menu.Item>
                </SubMenu>
                <SubMenu key="pollMenu" title="Polls">
                  <SubMenu title="Check Status">
                    <Menu.Item key="1">Active Polls</Menu.Item>
                    <Menu.Item key="2">Closed Polls</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
  
            {this.props.ifLoggedIn.state_User_Logged_In === true && <div className="right">{this.state.compToRender}</div>}
  
          </div>
        </>
      );
  }
  } 
}

const mapStateToProps = (state) => {
  return {
    ifLoggedIn : state.checkLogin,
    
  }
}

export default connect(mapStateToProps, undefined)(User);

