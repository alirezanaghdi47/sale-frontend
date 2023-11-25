// libraries
import * as Yup from "yup";

export const addAdvertiseGallerySchema = Yup.object().shape({
    gallery: Yup.mixed()
        .test("minLength", "حداقل تعداد عکس های ارسالی 1 عدد است", (value) => {
            if (value?.length === 0) return false;
            return true;
        })
        .test("maxLength", "حداکثر تعداد عکس های ارسالی 5 عدد است", (value) => {
            if (value?.length > 5) return false;
            return true;
        })
        .test("fileSize", "حجم هر عکس باید حداکثر 1 مگابایت باشد", (value) => {
            if (value && value?.length > 0) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > 1_024_000) {
                        return false;
                    }
                }
            }
            return true;
        })
        .test("fileType", "فرمت هر عکس باید از نوع ( png , jpg , jpeg ) باشد", (value) => {
                if (value && value.length > 0) {
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].type != "image/png" && value[i].type != "image/jpg" && value[i].type != "image/jpeg") {
                            return false;
                        }
                    }
                }
                return true;
            }
        )
});

export const addAdvertiseDetailSchema = Yup.object().shape({
    category: Yup.string().required("دسته بندی الزامی است"),
    quality: Yup.string().required("کیفیت الزامی است"),
    price: Yup.number().required("قیمت الزامی است"),
    title: Yup.string().max(100, "عنوان حداکثر 100 کاراکتری است").required("عنوان الزامی است"),
    description: Yup.string().max(1000, "توضیحات حداکثر 1000 کاراکتری است").required("توضیحات الزامی است"),
});

export const addAdvertiseLocationSchema = Yup.object().shape({
    city: Yup.string().required("شهر الزامی است"),
    latitude: Yup.number().required("طول جغرافیایی الزامی است"),
    longitude: Yup.number().required("عرض جغرافیایی الزامی است"),
});

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
});

export const EditProfileSecuritySchema = Yup.object().shape({
    currentPassword: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور فعلی باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").required("رمز عبور فعلی الزامی است"),
    newPassword: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "رمز عبور جدید باید حداقل 8 کاراکتر به همراه حروف بزرگ و کوچک و عدد و علائم باشد").notOneOf([Yup.ref('currentPassword'), null], "رمز عبور جدید و قدیم یکسان است").required("رمز عبور جدید الزامی است"),
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