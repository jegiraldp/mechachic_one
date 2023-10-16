import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt  } from "react-icons/fa";

function SignOutBtn() {
  const { signOut } = useAuth();
  return (
    
    <button className="navbar__boton" onClick={signOut}>
      <FaSignOutAlt />LogOut
    </button>
    
  );
}

export default SignOutBtn;
