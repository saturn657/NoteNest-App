import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Signup(){

    return(

        <AuthLayout
            title="Create Account 🚀"
            subtitle="Start organizing your ideas today."
        >

            <Input
                label="Name"
                placeholder="Enter your name"
            />

            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
            />

            <Input
                label="Password"
                type="password"
                placeholder="Create password"
            />

            <Button className="w-full mt-2">

                Create Account

            </Button>

            <p className="mt-6 text-center text-slate-600">

                Already have an account?{" "}

                <Link
                    to="/login"
                    className="font-semibold text-indigo-600 hover:underline"
                >

                    Login

                </Link>

            </p>

        </AuthLayout>

    );

}

export default Signup;