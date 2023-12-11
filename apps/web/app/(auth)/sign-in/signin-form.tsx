"use client";
import { Button, Label, Input } from "@course-selling-monorepo/utils";
import { useForm } from "react-hook-form";
import React from "react";
import { SignInSchema, signInSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

// This is a React Hook Form
export function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInSchema) => {
    const response = await fetch("api/signin", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();

    // SERVER side errors
    if (responseData.errors) {
      const error = responseData.errors;
      if (error.email) {
        setError("email", {
          type: "server",
          message: error.email,
        });
      } else if (error.password) {
        setError("password", {
          type: "server",
          message: error.password,
        });
      }
    } else {
      // TODO : If user signed up successfully redirect them to their dasboard
      reset();
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
      </div>
      {errors.email && (
        <Label className="text-red-400">{`${errors.email.message}`}</Label>
      )}
      <div className="grid gap-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input {...register("password")} id="password" type="password" />
        {errors.password && (
          <Label className="text-red-400">{`${errors.password.message}`}</Label>
        )}
      </div>
      <Button disabled={isSubmitting} className="w-full mt-4">
        Sign In
      </Button>
    </form>
  );
}
