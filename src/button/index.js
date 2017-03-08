import create from './create';
import styles from './index.css';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const themes = ['red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
const variants = ['outline', 'icon', 'flat'];

export default create({ sizes, styles, themes, variants });
