import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import cls from 'classnames';

export default function ({ sizes, styles = {}, themes, variants }) {
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
        const { children, className, isDisabled, href, target } = props;

        return isDisabled
            ? <span className={className} role="button">{ children }</span>
            : <a className={className} href={href} role="button" target={target}>{ children }</a>;
    };

    Link.propTypes = {
        children: node.isRequired,
        className: string,
        isDisabled: bool,
        href: string,
        target: string
    };

    const Button = props => {
        const classNames = cls(
            styles.button,
            props.className,
            { [styles.isPending]: props.isPending },
            { [styles.isDisabled]: props.isDisabled },
            { [styles[props.size]]: props.size },
            { [styles[props.variant]]: props.variant },
            { [styles[props.theme]]: props.theme }
        );

        const isDisabled = props.isPending || props.isDisabled;
        const children = <span>{ props.children }</span>;

        return props.href.length !== 0
            ? <Link onClick={props.onClick} className={classNames} href={props.href} isDisabled={isDisabled}>{ children }</Link>
            : <button type={props.type} onClick={props.onClick} className={classNames} disabled={isDisabled}>{ children }</button>;
    };

    Button.propTypes = {
        ...propTypes,
        ...Link.propTypes,
        type: oneOf(['button', 'submit', 'reset']),
        isPending: bool
    };

    Button.defaultProps = {
        href: '',
        type: 'button',
        isDisabled: false,
        isPending: false
    };

    return Button;
}
