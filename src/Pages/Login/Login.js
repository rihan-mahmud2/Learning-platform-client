import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Form, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ProvideContext/ProvideContext";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignWithEmailPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(email, password);
  };

  const signInWithEmailAndPassword = (email, password) => {
    return userLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => toast(error.message));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <Form onSubmit={handleSignWithEmailPassword}>
          <CardBody
            onSubmit={handleSignWithEmailPassword}
            className="flex flex-col gap-4"
          >
            <Input type="email" name="email" label="Email" size="lg" />
            <Input type="password" name="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography
              variant="small"
              className="mt-6 mb-6 flex justify-center"
            >
              Forget Password?
            </Typography>
            <Button
              onSubmit={handleSignWithEmailPassword}
              type="submit"
              variant="gradient"
              fullWidth
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <NavLink
                to="/register"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign up
              </NavLink>
            </Typography>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
