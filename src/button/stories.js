import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import styles from '../../storybook/table.css';
import Button from '.';

const colors = ['Red', 'Pink', 'Grape', 'Violet', 'Indigo', 'Blue', 'Cyan', 'Teal', 'Green', 'Lime', 'Yellow', 'Orange'];
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Basic', () => {
    const text = 'Button';

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>XS</th>
                    <th>SM</th>
                    <th>MD</th>
                    <th>LG</th>
                    <th>XL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button size="xs">{ text }</Button></td>
                    <td><Button size="sm">{ text }</Button></td>
                    <td><Button size="md">{ text }</Button></td>
                    <td><Button size="lg">{ text }</Button></td>
                    <td><Button size="xl">{ text }</Button></td>
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
                    <th>Default</th>
                    <th>Disabled</th>
                    <th>Pending</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Default</td>
                    <td><Button size="md">{ text }</Button></td>
                    <td><Button size="md" disabled>{ text }</Button></td>
                    <td><Button size="md" pending>{ text }</Button></td>
                </tr>
                { colors.map((color, i) => (
                    <tr key={`row-themes-${i}`}>
                        <td>{ color }</td>
                        <td><Button size="md" theme={color.toLowerCase()}>{ text }</Button></td>
                        <td><Button size="md" theme={color.toLowerCase()} disabled>{ text }</Button></td>
                        <td><Button size="md" theme={color.toLowerCase()} pending>{ text }</Button></td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
});
