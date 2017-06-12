import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as genreActions from '../../../actions/genreActions';
import * as movieActions from '../../../actions/movieActions';
const paddingRight = {"margin-right": "5px"};

class GenreForm extends React.Component {

	constructor(props){
		super(props)
		this.state = {genreId: 1, genres:props.genres}
	}

	render() {
		return (
			<div>
				<TextField onChange={(event, name) => this.setState({name})} hintText="Genre Name" style={paddingRight}/>
				<TextField onChange={(event, description) => this.setState({description})} hintText="Genre Description" style={paddingRight}/>
				<br/>
				<RaisedButton onTouchTap={this.saveGenre} label="Save" style={paddingRight}/>
			</div>
		);
	}

	saveGenre = (e) => {
		const {name, description} = this.state;
		this.props.actions.genre.saveGenre({name, description});
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {genre: bindActionCreators(genreActions, dispatch), movie: bindActionCreators(movieActions, dispatch)}
  };
}

export default connect(null, mapDispatchToProps)(GenreForm);