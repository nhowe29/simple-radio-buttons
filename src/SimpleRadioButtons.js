import PropTypes from 'prop-types';
import React from 'react';

export class Radio extends React.Component {
    render() {
        const {name, selectedValue, onChange} = this.props;
        const optional = {};
        if (selectedValue !== undefined) {
            optional.checked = (this.props.value === selectedValue);
        }
        if (typeof onChange === 'function') {
            optional.onChange = onChange.bind(null, this.props.value);
        }

        return (
            <input 
                {...this.props}
                type="radio"
                name={name}
                {...optional} />
        );
    }
};

export class RadioGroup extends React.Component {
    render() {
        const {Component, name, selectedValue, onChange, valueNameDictionary, children, ...rest} = this.props;
        const radioChildren = this.props.valueNameDictionary.map((child) =>
            <label>
                <Radio name={child[0]} value={child[1]} selectedValue={selectedValue} onChange={onChange}/>
                {child[1]}
            </label>
        );
        return <Component {...rest}>{radioChildren}</Component>;
    }
};

RadioGroup.defaultProps = {
  Component: "div"
};
RadioGroup.propTypes = {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    valueNameDictionary: PropTypes.array,
    children: PropTypes.node.isRequired,
    Component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ])
};