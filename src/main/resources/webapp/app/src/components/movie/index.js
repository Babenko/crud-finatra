import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import * as movieActions from '../../actions/movieActions';
import {Link, Route, withRouter} from 'react-router-dom';
const containerStyle = {"display":"flex"};
import AddTool from '../tool-pane/add/';

class MovieComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movies:[]};
  }

  componentDidMount() {
  	this.props.actions.loadMovies().then((data) => data.movies).then((movies) => this.setState({movies}));
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
  	const {movies} = this.state;
  	return (
  		<div style={containerStyle}>
			<List>
			{
				movies ? 
				(movies.map(movie => (<ListItem primaryText={movie.name}/>))) :
				(<div>"Loading..."</div>)
			}
		    </List>
	    </div>
  	);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
	return {movie: state.movie};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieComponent))