export type AddAdvertiseDetailFormType = {
    title: string,
    category: string,
    quality: string,
    price: number,
    description: string,
}

export type AddAdvertiseGalleryFormType = {
    gallery: File | File[] | null,
}

export type AddAdvertiseVendorFormType = {
    city: string,
    latitude: number,
    longitude: number,
}

export type EditAdvertiseDetailFormType = {
    title: string,
    category: string,
    quality: string,
    price: number,
    description: string,
}

export type EditAdvertiseGalleryFormType = {
    gallery: File | File[] | null,
}

export type EditAdvertiseVendorFormType = {
    city: string,
    latitude: number,
    longitude: number,
}

export type ProfileEditFormType = {
    avatar: File | null,
    name: string | "",
    family: string | "",
    phoneNumber: string,
    age: string | "",
}

export type ProfileSecurityFormType = {
    currentPassword: string,
    newPassword: string,
    newPasswordRepeat: string,
}

export type SignInFormType = {
    phoneNumber: string,
    password: string,
}

export type SignUpFormType = {
    phoneNumber: string,
    password: string,
    passwordRepeat: string,
}

