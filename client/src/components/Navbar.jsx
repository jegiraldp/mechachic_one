import SignOutBtn from '../components/SignOutBtn';
import "../css/Navbar.css"

function Navbar() {
  const path = window.location.pathname;
  const nombre = path.substring(1);
  const nombreRuta = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return (
    <section className="navbar">
     <SignOutBtn/>
    </section>
  );
}

export default Navbar;
