import React, { PropTypes } from 'react';
import cls from 'classnames';
import basicStyles from './styles.css';

const { bool, node, oneOf, string } = PropTypes;

export default function ({ sizes, styles, themes, variants }) {
    const propTypes = {};

    if (sizes) {
        propTypes.size = oneOf(sizes);
    }

    if (variants) {
        propTypes.variant = oneOf(variants);
    }

    if (themes) {
        propTypes.theme = oneOf(themes);
    }

    const Link = props => {
        const { children, className, disabled, href, target } = props;

        return disabled
            ? <span className={className} role="button">{children}</span>
            : <a className={className} href={href} role="button" target={target}>{children}</a>;
    };

    Link.propTypes = {
        children: node.isRequired,
        className: string,
        disabled: bool,
        href: string,
        target: string
    };

    const Button = props => {
        const classNames = [basicStyles.button, props.className];

        if (props.pending) {
            classNames.push(basicStyles.pending);
        }

        const disabled = props.disabled || props.pending;

        if (!!props.href && disabled) {
            classNames.push(basicStyles.disabled);
        }

        if (props.size) {
            classNames.push(styles[props.size]);
        }

        if (props.variant) {
            classNames.push(styles[props.variant]);
        }

        if (props.theme) {
            classNames.push(styles[props.theme]);
        }

        const className = cls(...classNames);

        return props.href.length !== 0
            ? <Link onClick={props.onClick} className={className} href={props.href} disabled={disabled}>{ props.children }</Link>
            : <button onClick={props.onClick} className={className} disabled={disabled}>{ props.children }</button>;
    };

    Button.propTypes = {
        ...propTypes,
        ...Link.propTypes,
        pending: bool
    };

    Button.defaultProps = {
        disabled: false,
        href: '',
        pending: false
    };

    return Button;
}
