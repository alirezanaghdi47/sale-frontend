export interface IRegisterService {
    phoneNumber: string,
    password: string,
    passwordRepeat: string,
}

export interface ILoginService {
    phoneNumber: string,
    password: string,
}

export interface IAddMyAdvertise {
    gallery: any,
    category: string,
    quality: string,
    price: number,
    title: string,
    description: string,
    city: string,
    latitude: number,
    longitude: number
}

export interface IEditMyAdvertise {
    data: {
        gallery: any,
        category: string,
        quality: string,
        price: number,
        title: string,
        description: string,
        city: string,
        latitude: number,
        longitude: number
    }
    id: string | string[]
}

export interface IEditProfileService {
    preview?: string | null,
    avatar: File | null,
    name: string | null,
    family: string | null,
    age: string | null
}

export interface IEditPasswordService {
    currentPassword: string,
    newPassword: string,
    newPasswordRepeat: string
}