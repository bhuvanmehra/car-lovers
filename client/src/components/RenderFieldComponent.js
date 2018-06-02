import React, {Component} from 'react';

class RenderFieldComponent extends Component {
    render(){
        const { meta: { touched, error } } = this.props.field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{this.props.field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...this.props.field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
}

export default RenderFieldComponent;