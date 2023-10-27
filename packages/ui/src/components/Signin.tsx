import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function Signin(props: {
  onClick: (username: string, password: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          paddingTop: 120,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h5"}> Welcome back. Please Sign In</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={async () => {
                props.onClick(username, password);
              }}
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
