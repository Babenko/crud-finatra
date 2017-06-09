import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PropTypes from 'prop-types';

class MenuComponent extends React.Component {

  constructor(props, context) {
    super(props);
    this.type = {muiName: 'IconMenu'};
  }

  render() {
  	return (
    <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }      
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        
        <MenuItem onTouchTap={(e) => this.context.router.history.push("/add")} primaryText="Add" />
        
        <MenuItem primaryText="Edit" />
        <MenuItem primaryText="Remove" />
    </IconMenu>
  	);
  }

  static contextTypes = {
    router: PropTypes.object
  }

}

export default MenuComponent;