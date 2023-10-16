import { Signup } from "ui";
import axios from "axios";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          const response = await axios.post("/api/signup", {
            username,
            password,
          });
        }}
      />
    </div>
  );
}
