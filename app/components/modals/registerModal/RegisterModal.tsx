"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "../Modal";
import Heading from "../../heading/Heading";
import Input from "../../input/Input";
import { toast } from "react-hot-toast";
import Button from "../../button/Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err) => {
        toast.error("Banana");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const body = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome To Airbnb" subtitle="Create An Account" />
      <Input
        disabled={isLoading}
        register={register}
        label="Email"
        id="email"
        errors={errors}
        type="text"
        required
      />
      <Input
        disabled={isLoading}
        register={register}
        label="Name"
        id="name"
        errors={errors}
        type="text"
        required
      />
      <Input
        disabled={isLoading}
        register={register}
        label="Password"
        id="password"
        errors={errors}
        type="password"
        required
      />
    </div>
  );
  const footer = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue With Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue With Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light ">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already Have An Account?</div>
          <div
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={body}
      footer={footer}
    />
  );
};

export default RegisterModal;
