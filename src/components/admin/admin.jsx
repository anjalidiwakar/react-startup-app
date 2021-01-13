import React, { useState } from 'react';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';
import { useSelector } from 'react-redux';
import PollForm from '../polls/add-Poll/AddPollContainer'
import AdminPolls from '../polls/adminView_Poll/AdminViewPolls'
import ClosedPolls from '../polls/closed-Polls/ClosedPolls';
import { Modal, Tabs, Menu } from 'antd';
import "antd/dist/antd.css";
import '../Common.css';

const { SubMenu } = Menu;

export default function Admin() {
  const [adminRequest, setAdminRequest] = useState("Sign In");
  const [createPoll, setCreatePoll] = useState(false);
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  const [compToRender, setCompRenderer] = useState(<SignIn />);


  function HandleCancel() {
    setCreatePoll(false);
  };

  function handleClick(clickHandler) {
    switch (clickHandler.key) {
      case "1":
        setCreatePoll(true);
        break;
      case "2":
        setCompRenderer(<AdminPolls />);
        break;
      case "3":
        setCompRenderer(<ClosedPolls />);
        break;
      default:
        break;
    }
  }

  if (userLoggedOut == null || adminRequest != "Sign In") {
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
                <Menu.Item key="1">Create poll</Menu.Item>
                <SubMenu title="Check Status">
                  <Menu.Item key="2">Active Polls</Menu.Item>
                  <Menu.Item key="3">Closed Polls</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="employeeMenu" title="Employee">
                <Menu.Item key="5">Create Profile</Menu.Item>
                <Menu.Item key="6">Manage Profile</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <Modal className="padding"
            visible={createPoll}
            title="Title"
            onOk={HandleCancel}
            onCancel={HandleCancel}
            footer={[
            ]}
          >
            {createPoll == true && <PollForm close={setCreatePoll} />}
          </Modal>
          { userLoggedOut == false && createPoll == false &&  <div className="right">{compToRender}</div> }
  
        </div>
      </>
    );
  }

};