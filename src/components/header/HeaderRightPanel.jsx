import { signOutUser } from '../../redux/signOut/signOutAction'
import { connect } from 'react-redux';
import LoggedInUser from './LoggedInUser'
import { GuestUser } from './Header'
function HeaderRightPanel(props) {
    let userSignedOut = useSelector((state) => state.signOut.state_User_Logged_In), compToRender = null;
    function signOutUser() {
        sessionStorage.removeItem("email");
        props.signOutUser(true);
    }
    switch (userSignedOut) {
        case true:
            compToRender = <LoggedInUser />
            break;
        case false:
            compToRender = <GuestUser />

        default:
            break;
    }
    return (
        compToRender
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (state) => dispatch(signOutUser(state))
    }
}

export default connect(undefined, mapDispatchToProps)(HeaderRightPanel)