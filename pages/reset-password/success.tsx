import Success from "@/components/Shared/Success";
import AuthLayout from "@/layouts/authLayout";
import Link from "next/link";

const ResetPasswordSuccessPage = () => {
  return (
    <AuthLayout withHeader={false} hasSuccess contentClass="" formType="other">
      <Success textContent="Password Reset Successful">
        <Link
          href="/signin"
          className="block text-center mt-6 p-3 text-white bg-formBtn w-full rounded-md md:rounded-lg text-sm md:text-base font-semibold"
        >
          Sign in to continue
        </Link>
      </Success>
    </AuthLayout>
  );
};

export default ResetPasswordSuccessPage;
