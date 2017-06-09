import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as genreActions from '../../../actions/genreActions';
import * as movieActions from '../../../actions/movieActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const paddingRight = {"margin-right": "5px"};
const paperStyle = {
  height: 300,
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
					<TextField onChange={(event, name) => this.setState({name})} hintText="Movie Name" style={paddingRight}/>
					<TextField onChange={(event, description) => this.setState({description})} hintText="Movie Description" style={paddingRight}/>
					<br/>
					<DropDownMenu value={this.state.genreId} onChange={this.handleChange}>
				        { 
				        	genres ? 
				        	genres.map((genre) => (<MenuItem value={genre.id} primaryText={genre.name}/>)) :
				        	<MenuItem value={0} primaryText="None" />
				        }
				    </DropDownMenu>
					<br/>
					<RaisedButton onTouchTap={this.saveMovie} label="Save" style={paddingRight}/>
				</Paper>
			</div>
		);
	}

	handleChange = (event, index, genreId) => this.setState({genreId});

	saveMovie = (e) => {
		const {genreId, name, description} = this.state;
		this.props.actions.movie.saveMovie({genreId, name, description});
	}

}

function mapDispatchToProps(dispatch) {
  return {
    actions: {genre: bindActionCreators(genreActions, dispatch), movie: bindActionCreators(movieActions, dispatch)}
  };
}

export default connect(null, mapDispatchToProps)(AddTool)