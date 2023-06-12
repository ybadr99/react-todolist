import Clock from './Clock';
const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <p>Items will persist in the browser local storage</p>
      <p>If you want to edit just press on the item</p>
      <Clock />
    </header>
  );
};
export default Header;
