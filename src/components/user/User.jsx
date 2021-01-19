import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import PrimaryButton from '../buttons/PrimaryButton';
import ActivePolls from '../polls/active-Poll/ActivePolls'
import ClosedPolls from '../polls/closed-Polls/ClosedPolls'
import { Tabs, Menu } from 'antd';
import './User.css'
import "antd/dist/antd.css";
import '../Common.css';

const { SubMenu } = Menu;

const { TabPane } = Tabs;

export default function User() {

  const [userRequest, setUserRequest] = useState("Sign In");
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  const [compToRender, setCompRenderer] = useState();

  function handleClick(clickHandler) {
    switch (clickHandler.key) {
      case "1":
        setCompRenderer(<ActivePolls />);
        break;
      case "2":
        setCompRenderer(<ClosedPolls />);
        break;
      default:
        break;
    }
  }

  if (userLoggedOut === null || userRequest != "Sign In") {
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
              onClick={handleClick}
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

          {userLoggedOut === false && <div className="right">{compToRender}</div>}

        </div>
      </>
    );
  }
}

