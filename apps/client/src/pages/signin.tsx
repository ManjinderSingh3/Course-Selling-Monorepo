import { Signin } from "ui";
import axios from "axios";

export default function SigninPage() {
  return (
    <div>
      <Signin
        onClick={async (username, password) => {
          const response = await axios.post("/api/signin", {
            username,
            password,
          });
          console.log(response);
        }}
      />
    </div>
  );
}
