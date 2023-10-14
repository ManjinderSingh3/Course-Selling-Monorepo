"use client";
import * as React from "react";

export const Button = () => {
  return (
    <button
      onClick={() => {
        alert("Boop");
      }}
    >
      Boop
    </button>
  );
};
