// libraries
import * as Yup from "yup";

export const EditProfileInformationSchema = Yup.object().shape({
    avatar: Yup.mixed().nullable().test("fileSize", "حجم عکس حداکثر 1 مگابایت باشد", (value) => {
        if (value === null) {
            return true;
        } else {
            return value.size <= 1_024_000;
        }
    }).test("fileType", "فرمت عکس ارسالی باید از نوع (png , jpg , jpeg) باشد", (value) => {
        if (value === null) {
            return true;
        } else {
            return ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type);
        }
    }),
    name: Yup.string().max(20, "نام حداکثر 20 کاراکتری است").required("نام الزامی است"),
    family: Yup.string().max(40, "نام خانوادگی حداکثر 40 کاراکتری است").required("نام خانوادگی الزامی است"),
    email: Yup.string().email("فرمت ایمیل نادرست است").required("ایمیل الزامی است"),
    phoneNumber: Yup.string().matches(/^(\+98|0)?9\d{9}$/g, "شماره تلفن همراه نادرست است").required("شماره تلفن همراه الزامی است"),
    birthDay: Yup.string(),
    birthMonth: Yup.string(),
    birthYear: Yup.string(),
});

export const EditProfileSecuritySchema = Yup.object().shape({
    currentPassword: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور فعلی باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").required("رمز عبور فعلی الزامی است"),
    newPassword: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور جدید باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").notOneOf([Yup.ref('currentPassword'), null], "رمز عبور جدید با تکرار آن یکسان نیست").required("رمز عبور جدید الزامی است"),
    newPasswordRepeat: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "تکرار رمز عبور جدید باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").oneOf([Yup.ref('newPassword'), null], "رمز عبور جدید با تکرار آن یکسان نیست").required("تکرار رمز عبور جدید الزامی است"),
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("فرمت ایمیل نادرست است").required("ایمیل الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است"),
});

export const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("فرمت ایمیل نادرست است").required("ایمیل الزامی است"),
    password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").required("رمز عبور الزامی است"),
    passwordRepeat: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "تکرار رمز عبور باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").oneOf([Yup.ref('password'), null], "رمز عبور با تکرار آن یکسان نیست").required("تکرار رمز عبور الزامی است"),
});

export const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email("فرمت ایمیل نادرست است").required("ایمیل الزامی است"),
});

export const VerifyPasswordSchema = Yup.object().shape({
    password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").required("رمز عبور الزامی است"),
    passwordRepeat: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "تکرار رمز عبور باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").oneOf([Yup.ref('password'), null], "رمز عبور با تکرار آن یکسان نیست").required("تکرار رمز عبور الزامی است"),
});