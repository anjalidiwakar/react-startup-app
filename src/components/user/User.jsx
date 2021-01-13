import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import PrimaryButton from '../buttons/PrimaryButton';
import ActivePolls from '../polls/active-Poll/ActivePolls'
import ClosedPolls from '../polls/closed-Polls/ClosedPolls'
import { Modal, Button, notification, Tabs, Menu } from 'antd';
import './User.css'
import "antd/dist/antd.css";
import '../Common.css';
const { SubMenu } = Menu;

const { TabPane } = Tabs;
// function Button(props) {
//   const handleClick = () => NavigateToPortal();
//   return <button onClick={handleClick}> {props.role}</button>
// }
export default function User() {

  const [userRequest, setUserRequest] = useState("Sign In");
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  const [compToRender, setCompRenderer] = useState(<SignIn />);

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

  // if (userLoggedOut == null || userRequest != "Sign In") {
  //   return (
  //     compToRender
  //   )
  // }
  // else {
  //   return (
  //     <>
      {/* <ul >
        <li className="padding">
        <PrimaryButton text="Check Active Polls" callBack={ShowActivePolls}>
        </PrimaryButton></li>
        <li className="padding">
        <PrimaryButton text="Check Closed Polls" callBack={ShowClosedPolls}>
        </PrimaryButton></li>
        </ul>
        <Modal className="padding"
          visible={activePoll || closedPoll}
          title="Title"
          onOk={HandleCancel}
          onCancel={HandleCancel}
          footer={[
            // <Button key="back" type="primary" onClick={HandleCancel}>
            //   Close
            // </Button>
          ]}
        >
          {activePoll == true && <ActivePolls />}
          {closedPoll == true && <ClosedPolls />}
        </Modal> */}
        {/* <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Active Polls" key="1">
    <ActivePolls />
    </TabPane>
    <TabPane tab="Closed Polls" key="2">
    <ClosedPolls />
    </TabPane>
  </Tabs> */}
  
      {/* </>
    );
  } */}

  if (userLoggedOut == null && userRequest != "Sign In") {
    return (
      compToRender
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
              <SubMenu key="pollMenu"  title="Polls">
                <SubMenu title="Check Status">
                  <Menu.Item key="1">Active Polls</Menu.Item>
                  <Menu.Item key="2">Closed Polls</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="employeeMenu" title="Employee">
                <Menu.Item key="3">Create Profile</Menu.Item>
                <Menu.Item key="4">Manage Profile</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          
          { userLoggedOut == false &&  <div className="right">{compToRender}</div> }
  
        </div>
      </>
    );
  }
}

