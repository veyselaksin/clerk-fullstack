import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useEffect } from "react";

export default function App() {
  const authDetails = useAuth();
  console.log("TOKEN: ", authDetails.getToken().then((token) => console.log(token)));

  const user = useUser();
  console.log(user);

  // user list
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <h1 className="text-3xl font-bold">Welcome to Clerk</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
