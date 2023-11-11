import { Suspense } from "react";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Create your CourseHub account</h3>
        <p className="text-sm text-gray-500">
          Get started for free. No credit card required.
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
        <Suspense
        //   fallback={
        //     <>
        //       <Button disabled={true} text="" variant="secondary" />
        //       <Button disabled={true} text="" variant="secondary" />
        //       <div className="mx-auto h-5 w-3/4 rounded-lg bg-gray-100" />
        //     </>
        //   }
        >
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
