import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './dummy';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import { auth } from '../../firebase';


class Overview extends Component {
  constructor(props) {
    super(props);
    db.getTitle(1).then(snapshot =>
      this.title = snapshot.val()
    );
    db.getDistance(1).then(snapshot =>
      this.distance = snapshot.val()
    );
    db.getImage(1).then(snapshot =>
      this.image = snapshot.val()
    );
    db.getDescp(1).then(snapshot =>
      this.descp = snapshot.val()
    );
    db.getCat(1).then(snapshot =>
      this.cat = snapshot.val()
      );
    db.addVol(8);
    db.addCat("Education");
  }

  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );   
  }

  render() {
    const { users } = this.props;


    return (
      <div> 
        <GridList cellHeight={180} className="gridList">
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Volunteer Opportunities</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
        
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Overview);
