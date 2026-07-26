import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login(){

    return(

        <AuthLayout
            title="Welcome Back 👋"
            subtitle="Login to continue using NoteNest."
        >

            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
            />

            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
            />

            <Button className="w-full mt-2">

                Login

            </Button>

            <p className="mt-6 text-center text-slate-600">

                Don't have an account?{" "}

                <Link
                    to="/signup"
                    className="font-semibold text-indigo-600 hover:underline"
                >

                    Create one

                </Link>

            </p>

        </AuthLayout>

    );

}

export default Login;