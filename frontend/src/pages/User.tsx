import { useAuth, useUser } from "@clerk/clerk-react";

function User() {
  const auth = useAuth();
  const user = useUser();
  return (
    <div>
      <h1>
        Welcome, {user.user?.fullName}!{" "}
        <button onClick={() => auth.signOut()}>Sign out</button>
      </h1>
    </div>
  );
}

export default User;
