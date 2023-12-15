"use client";
import { Button, Label, Input } from "@course-selling-monorepo/utils";
import { useForm } from "react-hook-form";
import React from "react";
import { SignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

// This is a React Hook Form
export function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  }); // Zod resolver is used to connect zod validations to react hook form

  const onSubmit = async (data: SignUpSchema) => {
    const response = await fetch(`api/auth/signup`, {
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

    //SERVER side errors
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
      router.push("/");
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
        {errors.email && (
          <Label className="text-red-500">{`${errors.email.message}`}</Label>
        )}
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input {...register("password")} id="password" type="password" />
        {errors.password && (
          <Label className="text-red-500">{`${errors.password.message}`}</Label>
        )}
      </div>
      <Button disabled={isSubmitting} className="w-full mt-4">
        Create Account
      </Button>
    </form>
  );
}
