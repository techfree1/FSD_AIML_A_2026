
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/cart">My Cart 🛒</a>
      <a href="/orders">My Orders 📦</a>
      <a href="/settings">Settings ⚙️</a>
      <a href="/profile">My Profile 👤</a>
      <a href="/logout">Logout 🚪</a>
    </nav>
  );
};

export default Navbar;