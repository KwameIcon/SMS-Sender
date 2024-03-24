import React from "react";
import USER_DATA from "../user-data/user-data";

class AuthenticateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const currentUser = USER_DATA.find((user) => user.id === 5);
    if (currentUser) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

}

export default AuthenticateUser;