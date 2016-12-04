import React, { Component } from 'react';

class ManagedForm extends Component {

	constructor(args) {
		super(args);
		let {model} = this.props;
		this.state = {
			model: model
		};
		this.requestModel = {}
	}

	onModelChange = (e) => {
		try {
			var tempModel = Object.assign({}, this.state.model);
			tempModel[e.target.name] = e.target.value;
			this.setState({
				model: tempModel
			});
		} catch (err) {
			throw new Error(err)
		}
	};

	onSubmitFunc = (e) => {
		e.preventDefault();
		let {children} = this.props;
		let obj = {};
		React.Children.toArray(children).map((child) => this.createRequestModel(child, obj));
		this.props.onSubmit(obj)
	};

	createRequestModel = (child, obj) => {
		if (child.props.children === undefined || typeof child.props.children === 'string') {
			if (child.props.name !== undefined) {
				obj[child.props.name] = this.refs[child.props.name].value;
			}
			return obj;
		}
		else {
			return child.props.children.map((insideChild) => this.createRequestModel(insideChild, obj));
		}
	};

	renderChildren = (child) => {
		if (child.props.children === undefined || typeof child.props.children === 'string') {
			if ((child.props.type !== 'submit' && child.props.name !== undefined) || (child.type === 'textarea' && child.props.name !== undefined)) {
				return React.cloneElement(child, {
					value: this.state.model[child.props.name] ? this.state.model[child.props.name] : '',
					onChange: this.onModelChange,
					ref: child.props.name
				});
			}
			return React.cloneElement(child, {
				ref: child.props.name
			});
		}
		else {
			return React.cloneElement(child, {
				children: child.props.children.map((insideChild) => this.renderChildren(insideChild))
			});
		}
	};

	render() {
		let {children} = this.props;
		return (
			<form onSubmit={this.onSubmitFunc}>
				{React.Children.toArray(children).map((child) => this.renderChildren(child))}
			</form>
		)
	}

}

export default ManagedForm;