import create from './create';
import styles from './index.css';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const themes = ['primary', 'success', 'warning', 'danger'];
const variants = ['outline', 'icon', 'flat'];

export default create({ sizes, styles, themes, variants });
