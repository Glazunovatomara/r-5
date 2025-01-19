# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

переписать классовый компонент Counter, используя хуки:
class Counter extends Component {
state = {
count: 0
};
handleClick = () => {
this.setState(({ count }) => ({
count: count + 1
}));
};
render() {
return <button onClick={this.handleClick}>{this.state.count}</button>;
}
}
