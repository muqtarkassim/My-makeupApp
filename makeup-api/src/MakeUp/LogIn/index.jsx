import { useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const toLayout = () => {
    navigate("layout");
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={toLayout}>TO DASHBOARD </button>
    </div>
  );
}

export default Login;