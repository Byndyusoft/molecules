import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styles from '../../storybook/table.css';
import Button from '.';

const colors = ['primary', 'success', 'info', 'danger', 'warning', 'inverse'];
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Basic', () => {
    const text = 'Button';

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>SM</th>
                    <th>MD</th>
                    <th>LG</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button size="sm">{ text }</Button></td>
                    <td><Button size="md">{ text }</Button></td>
                    <td><Button size="lg">{ text }</Button></td>
                </tr>
            </tbody>
        </table>
    );
});

stories.add('Themes and states', () => {
    const text = 'Button';

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th />
                    <th>default</th>
                    <th>disabled</th>
                    <th>pending</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>default</td>
                    <td><Button size="md">{ text }</Button></td>
                    <td><Button size="md" isDisabled>{ text }</Button></td>
                    <td><Button size="md" isPending>{ text }</Button></td>
                </tr>
                { colors.map((color, i) => (
                    <tr key={`row-themes-${i}`}>
                        <td>{ color }</td>
                        <td><Button size="md" theme={color}>{ text }</Button></td>
                        <td><Button size="md" theme={color} isDisabled>{ text }</Button></td>
                        <td><Button size="md" theme={color} isPending>{ text }</Button></td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
});

stories.add('Variants', () => {
    const text = 'Button';

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th />
                    <th>default</th>
                    <th>outline</th>
                    <th>rounded</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>default</td>
                    <td><Button size="md">{ text }</Button></td>
                    <td><Button size="md" variant="outline">{ text }</Button></td>
                    <td><Button size="md" variant="rounded">{ text }</Button></td>
                </tr>
                { colors.map((color, i) => (
                    <tr key={`row-themes-${i}`}>
                        <td>{ color }</td>
                        <td><Button size="md" theme={color}>{ text }</Button></td>
                        <td><Button size="md" theme={color} variant="outline">{ text }</Button></td>
                        <td><Button size="md" theme={color} variant="rounded">{ text }</Button></td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
});
