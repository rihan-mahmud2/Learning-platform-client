import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../ProvideContext/ProvideContext";

function Register() {
  const { error, setError } = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignWithEmailPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.PhotoUrl.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
            Sign Up
          </Typography>
        </CardHeader>
        <Form onSubmit={handleSignWithEmailPassword}>
          <CardBody className="flex flex-col gap-4">
            <Input name="name" type="text" label="Name" size="lg" />
            <Input name="PhotoUrl" type="text" label="Photo url" size="lg" />
            <Input name="email" type="email" label="Email" size="lg" />
            <Input name="password" type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Accept Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link
                variant="small"
                to={"/login"}
                color="blue"
                className="ml-1 font-bold"
              >
                Login
              </Link>
            </Typography>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
}

export default Register;