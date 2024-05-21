import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function App() {
  const authDetails = useAuth();
  console.log(authDetails);

  const user = useUser();
  console.log(user);

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
