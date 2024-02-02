export type copyToClipboardType = {
    title: string,
    text?: string,
    url: string,
}

export type generateQueryParamsType = {
    search: string | null,
    page: number | string | null,
    sort: "newest" | "expensive" | string | null,
    startPrice: number | string | null,
    endPrice: number | string | null,
    categories: string[],
    cities: string[]
}
