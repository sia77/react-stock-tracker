import { useAuth } from "@/hooks/useAuth";

const SignInSignOut = () => { 

  const {loginWithPopup, isAuthenticated, logout } = useAuth();

  const handleLogin = async () => {
    await loginWithPopup();  // Authenticates user without redirecting    
  };

  const handleLogout = async () =>{
    await logout();
  } 

  return (
    <div>
      {!isAuthenticated ? (
        <button className="cursor-pointer" onClick={handleLogin}>Sign In</button>
      ) : (
        <button className="cursor-pointer"  onClick={handleLogout}>Sign Out</button>
      )}
    </div>
  );
};

export default SignInSignOut;