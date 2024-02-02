export interface IAdvertiseFilter {
    page?: number,
    limit?: 6 | 12 | number,
    sort?: "newest" | "expensive" | string,
    search?: string | null,
    startPrice?: number,
    endPrice?: number,
    city?: string | null,
    category?: string | null,
    cities?: string[],
    categories?: string[]
}

export interface IAdvertise {
    _id: string,
    id?: string,
    slug: string
    gallery: string[],
    title: string,
    description: string,
    price: string,
    quality: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    category: string,
    city: string,
    latitude: number,
    longitude: number,
    userId: IUser
}

export interface IUser {
    _id: string,
    name: string | null,
    family: string | null,
    avatar: string | null,
    age: string | null,
    password: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
}