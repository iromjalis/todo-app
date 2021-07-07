import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
//import { Test } from './Profile.styles';

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    const { name, tag, location, avatar, stats } = this.props.user;
    return (
      <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            width="150"
          />
          <p className="name">{name}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <UserItem stats={stats} />
          {/* {stats.map((stat) => (
            <li>
              <span className="label">Followers</span>
              <span className="quantity">stat.followers</span>
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
