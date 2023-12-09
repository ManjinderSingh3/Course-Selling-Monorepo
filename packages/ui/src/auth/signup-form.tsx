"use client";
import { Button, Label, Input } from "@course-selling-monorepo/utils";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import { SignUpSchema, signUpSchema } from "../lib/signUpSchema";

// This is a React Hook Form
export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({
    
  });

  const onSubmit = async (data: SignUpSchema) => {
    const response = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = response.json()

    if (responseData.errors) {
      if (errors.email) {
        setError("email", {
          type: "server",
          //message: errors.email,
          message: "Empty email",
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: "",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="example@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input {...register("password")} id="password" type="password" />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
      </div>
      <Button className="w-full mt-4">Create Account</Button>
    </form>
  );
}
