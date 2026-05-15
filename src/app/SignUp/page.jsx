"use client"
import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import { FcGoogle } from "react-icons/fc";


const SignUpLoging = () => {
    const SubmitFrom = async (e) => {
        e.preventDefault()
        const dataGet = new FormData(e.currentTarget)
        const userData = Object.fromEntries(dataGet.entries())
        const { data, error } = await authClient.signUp.email({
            name: userData.Name,
            email: userData.Email,
            password: userData.Password,
        });
        console.log({ data, error })
    }
    return (
        <><div className="py-20">
            <div className="text-center">
                <h1 className='text-5xl font-bold mb-2'>Create Account</h1>
                <p className='text-xl text-[#6C696D]'>Start your adventure with Wanderlust</p>
            </div>

            <Card className="shadow-2xl w-4xl mx-auto p-10  mt-10">
                <form onSubmit={SubmitFrom} className='space-y-4'>
                    {/*  Name */}
                    <div className="">
                        <TextField name="Name" isRequired className={"space-y-2"}>
                            <Label className='text-[18px]'>Full Name</Label>
                            <Input type='text' placeholder="Enter your name" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Email */}
                    <TextField name="Email" isRequired className={"space-y-2"}>
                        <Label className='text-[18px]'>Email Address</Label>
                        <Input type='email' placeholder="Enter your email" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                        <FieldError />
                    </TextField>
                    {/* Password */}
                    <TextField name="Password" isRequired className={"space-y-2"}>
                        <Label className='text-[18px]'>Password</Label>
                        <Input type='password' placeholder="Create a password" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                        <FieldError />
                    </TextField>
                    {/* Password */}
                    <TextField name="Password" isRequired className={"space-y-2"}>
                        <Label className='text-[18px]'>Confirm Password</Label>
                        <Input type='password' placeholder="Confirm your password" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                        <FieldError />
                    </TextField>
                    {/* button */}
                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-full bg-cyan-500 text-white mt-4 font-medium">
                        Create Account
                    </Button>
                </form>
            </Card>

        </div >
        </>
    );
};

export default SignUpLoging;