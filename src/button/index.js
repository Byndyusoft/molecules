import create from './create';
import styles from './index.css';

const sizes = ['sm', 'md', 'lg'];
const themes = ['primary', 'success', 'danger', 'warning', 'info', 'inverse'];
const variants = ['outline', 'icon'];

export default create({ sizes, styles, themes, variants });
