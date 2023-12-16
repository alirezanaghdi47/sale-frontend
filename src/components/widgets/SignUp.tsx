'use client';

// libraries
import {useRef} from "react";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {useFormik} from "formik";
import {LuArrowLeft, LuUserPlus} from "react-icons/lu";
import {CSSTransition} from "react-transition-group";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";
import PasswordInput from "@/components/modules/PasswordInput";

// hooks
import {useSegment} from "@/hooks/useSegment";

// services
import {confirmRegisterService, registerService} from "@/services/authService";

// utils
import {ConfirmSignUpSchema, SignUpSchema} from "@/utils/validations";

const Heading = () => {

    return (
        <div className="flex justify-between items-center gap-x-2 w-full">

            <h3 className="text-lg text-gray font-bold">
                عضویت
            </h3>

        </div>
    )
}

const RegisterForm = ({data, setData, onNext}) => {

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => registerService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
                onNext();
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: async (result) => {
            setData({email: result.email});
            mutate(result);
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        ایمیل
                    </span>

                    <TextInput
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.email && formik.touched.email && (
                            <p className='text-red text-xs'>
                                {formik.errors.email}
                            </p>
                        )
                    }

                </div>

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        رمز عبور
                    </span>

                    <PasswordInput
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.password && formik.touched.password && (
                            <p className='text-red text-xs'>
                                {formik.errors.password}
                            </p>
                        )
                    }

                </div>

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        تکرار رمز عبور
                    </span>

                    <PasswordInput
                        name="passwordRepeat"
                        value={formik.values.passwordRepeat}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.passwordRepeat && formik.touched.passwordRepeat && (
                            <p className='text-red text-xs'>
                                {formik.errors.passwordRepeat}
                            </p>
                        )
                    }

                </div>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    endIcon={
                        <LuArrowLeft
                            size={16}
                            className="text-current"
                        />
                    }
                    disabled={isPending}
                    onClick={() => formik.handleSubmit()}
                >
                    بعدی
                </Button>

            </div>

        </div>
    )
}

const ConfirmForm = ({data, setData, onSubmit}) => {

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => confirmRegisterService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                notification(data.message, "success");
                onSubmit();
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: ConfirmSignUpSchema,
        onSubmit: async (result) => {
            mutate({...data, ...result});
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full">

                <div className='flex flex-col justify-start items-start gap-y-2 w-full'>

                    <span className="text-gray text-xs font-bold">
                        کد اعتبارسنجی
                    </span>

                    <TextInput
                        name="code"
                        value={formik.values.code}
                        onChange={formik.handleChange}
                    />

                    {
                        formik.errors.code && formik.touched.code && (
                            <p className='text-red text-xs'>
                                {formik.errors.code}
                            </p>
                        )
                    }

                </div>

            </div>

            <div className="flex justify-end items-center gap-x-2 w-full mt-4">

                <Button
                    variant="contained"
                    color="blue"
                    size="full"
                    startIcon={
                        <LuUserPlus
                            size={16}
                            className="text-current"
                        />
                    }
                    disabled={isPending}
                    onClick={() => formik.handleSubmit()}
                >
                    عضویت
                </Button>

            </div>

        </div>
    )
}

const Links = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 w-full'>

            <div className='flex justify-center items-center gap-x-2 w-full'>

                <p className="text-gray font-bold text-xs">
                    اگر حساب کاربری دارید
                </p>

                <LinkButton
                    variant="text"
                    color="blue"
                    href="/auth/sign-in"
                >
                    وارد شوید
                </LinkButton>

            </div>

        </div>
    )
}

const Section = ({children, activeSection}) => {

    const nodeRef = useRef(null);

    return (
        <div
            className={`${activeSection ? 'flex' : 'hidden'} w-full h-full`}
            ref={nodeRef}
        >

            <CSSTransition
                nodeRef={nodeRef}
                in={activeSection}
                timeout={300}
                classNames="fade-in"
                mountOnEnter
                unmountOnExit
            >

                <div
                    className="flex flex-col justify-start items-start gap-y-4 w-full h-full"
                    ref={nodeRef}
                >
                    {children}
                </div>

            </CSSTransition>

        </div>
    )
}

export const SignUp = () => {

    const router = useRouter();

    const {segment, _handlePrevSegment, _handleNextSegment, _handleSegment} = useSegment();

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <Heading/>

            <Section activeSection={segment.active === 0}>

                <RegisterForm
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onNext={_handleNextSegment}
                />

            </Section>

            <Section activeSection={segment.active === 1}>

                <ConfirmForm
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onSubmit={() => router.push("/auth/sign-in")}
                />

            </Section>

            <Links/>

        </div>
    )
}