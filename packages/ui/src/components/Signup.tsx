import { Typography, Card, TextField, Button } from "@mui/material";
import { useState } from "react";

export function Signup(props: {
  onClick: (username: string, password: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          paddingTop: 130,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">
          Welcome to Coursehub! Sign up below
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
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
            type="password"
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
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
