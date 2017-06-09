import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Route, Link, withRouter} from 'react-router-dom';
import * as movieActions from '../../actions/movieActions';
import {bindActionCreators} from 'redux';
import MovieComponent from '../movie/';
import MenuComponent from '../menu/';
import AddTool from '../tool-pane/add/';
import PropTypes from 'prop-types';

const divderStyle = {margin: "10px 0px"};

class Home extends React.Component {

  constructor(props, second) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (      
      <div>
        <AppBar
            title="Movie Library" titleStyle={{cursor: "pointer"}} iconElementLeft={<div></div>} onTitleTouchTap={(e) => this.context.router.history.push("/")} iconElementRight={<MenuComponent/>}/>
            <Divider style={divderStyle}/>
      <MovieComponent/>
      <Route path="/add" component={AddTool}/>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}
        // <Route path="/1" component={MovieComponent}/>
export default withRouter(connect(null, mapDispatchToProps)(Home))