import React, {Component} from 'react';
import _ from 'underscore';

import './button.styl';

class ButtonComponent extends Component {

	render() {
		var buttonVariant = _.isString(this.props.variant) ? this.props.variant : '';
		var onButtonClick = _.isFunction(this.props.onButtonClick) ? this.props.onButtonClick : _.noop;

		return (
			<div
				onClick={onButtonClick}
				className={"button " + buttonVariant}
			>
				{this.props.label}
			</div>
		)
	}
};

ButtonComponent.propTypes = {
	label: React.PropTypes.string.isRequired,
	onButtonClick: React.PropTypes.func,
	buttonVariant: React.PropTypes.string,
};

export default ButtonComponent;