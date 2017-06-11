import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import * as genreActions from '../../../actions/genreActions';
import * as movieActions from '../../../actions/movieActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MovieForm from './movieForm';

const paddingRight = {"margin-right": "5px"};
const paperStyle = {
  height: 400,
  width: 500,
  margin: 'auto',
  textAlign: 'center',
  padding: '10px'
};


class AddTool extends React.Component {

	constructor(props){
		super(props)
		this.state = {genreId: 1, genres:[]}
	}

	componentDidMount() {
		this.props.actions.genre.loadGenres().then((data) => data.genres).then((genres) => this.setState({genres}));
	}

	render() {
		const {genres} = this.state;
		return (
			<div>
				<Paper style={paperStyle} zDepth={5}>
					<h5>New movie form</h5>
				    <Toggle/>
				    <MovieForm genres={genres}/>
				</Paper>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {genre: bindActionCreators(genreActions, dispatch), movie: bindActionCreators(movieActions, dispatch)}
  };
}

export default connect(null, mapDispatchToProps)(AddTool)