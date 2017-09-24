import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import noop from 'doremi/func/noop';
import { bool, func, node, number, oneOf, oneOfType, string } from 'prop-types';
import cls from 'classnames';

const types = ['text', 'password', 'search', 'number', 'date', 'time', 'datetime', 'tel', 'email', 'url'];

const labelOrErrorPropType = oneOfType([string, node]);

export default function ({ styles = {} }) {
    class Input extends Component {
        static propTypes = {
            id: string,
            name: string.isRequired,
            type: oneOf(types).isRequired,
            value: oneOfType([number, string]),
            label: labelOrErrorPropType,
            placeholder: string,
            error: labelOrErrorPropType,
            maxLength: number,
            tabIndex: number,
            autoFocus: bool,
            onChange: func,
            onFocus: func,
            onBlur: func,
            onKeyDown: func,
            onKeyUp: func,
            onKeyPress: func,
            isDisabled: bool,
            className: string,
            inputClassName: string
        };

        static defaultProps = {
            maxLength: 0,
            autoFocus: false,
            onChange: noop,
            onFocus: noop,
            onBlur: noop,
            onKeyDown: noop,
            onKeyUp: noop,
            onKeyPress: noop,
            isDisabled: false
        };

        constructor(props, context) {
            super(props, context);

            this.state = { value: Input.prepareValue(props) };
        }

        componentWillReceiveProps(nextProps) {
            if (this.state.value !== nextProps.value) {
                this.setState({ value: Input.prepareValue(nextProps) });
            }
        }

        static prepareValue(props) {
            const { value, maxLength } = props;
            let nextValue = value || '';

            if (maxLength > 0) {
                nextValue = nextValue.slice(0, maxLength);
            }

            return nextValue;
        }

        @autobind
        handleChange(event) {
            let value = event.target.value;
            const { name, maxLength, onChange } = this.props;

            if (maxLength > 0) {
                value = value.slice(0, maxLength);
            }

            this.setState({ value }, () => {
                onChange({ name, value: this.state.value, event });
            });
        }

        @autobind
        handleFocus(event) {
            this.props.onFocus({ name: this.props.name, value: this.state.value, event });
        }

        @autobind
        handleBlur(event) {
            this.props.onBlur({ name: this.props.name, value: this.state.value, event });
        }

        @autobind
        handleKeyDown(event) {
            this.props.onKeyDown({ name: this.props.name, value: this.state.value, event });
        }

        @autobind
        handleKeyUp(event) {
            this.props.onKeyUp({ name: this.props.name, value: this.state.value, event });
        }

        @autobind
        handleKeyPress(event) {
            this.props.onKeyPress({ name: this.props.name, value: this.state.value, event });
        }

        render() {
            const classNames = cls(
                styles.field,
                this.props.className
            );

            const inputProps = {
                className: cls(styles.input, this.props.inputClassName),
                id: this.props.id,
                name: this.props.name,
                type: this.props.type,
                placeholder: this.props.placeholder,
                maxLength: this.props.maxLength,
                tabIndex: this.props.tabIndex,
                disabled: this.props.isDisabled,
                value: this.state.value,
                autoFocus: this.props.autoFocus,
                onChange: this.handleChange,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onKeyPress: this.handleKeyPress,
                onKeyDown: this.handleKeyDown,
                onKeyUp: this.handleKeyUp
            };

            return (
                <div className={classNames}>
                    { Boolean(this.props.label) && (
                        <label className={styles.label} htmlFor={this.props.id}>
                            { this.props.label }
                        </label>
                    ) }
                    <input {...inputProps} />
                    { Boolean(this.props.error) && (
                        <div className={styles.error}>
                            { this.props.error }
                        </div>
                    ) }
                </div>
            );
        }
    }

    return Input;
}
