export const copyToClipboard = (data) => {

    const {title, text, url} = data;

    if (navigator.share) {
        return navigator.share({title, text, url})
            .then(res => "supported");
    } else {
        return navigator.clipboard.writeText(url)
            .then(res => "unSupported");
    }

}

export const generateQueryParams = (data) => {

    const {search, page, sort, startPrice, endPrice, categories, cities} = data;

    let searchQuery = "";
    let resultQuery = ""
    let pageQuery = "";
    let sortQuery = "";
    let startPriceQuery = "";
    let endPriceQuery = "";
    let categoriesQuery = "";
    let citiesQuery = "";

    if (search) searchQuery = `&search=${search}`;
    if (page) pageQuery = `&page=${page}`;
    if (sort) sortQuery = `&sort=${sort}`;
    if (startPrice) startPriceQuery = `&startPrice=${startPrice}`;
    if (endPrice) endPriceQuery = `&endPrice=${endPrice}`;
    if (categories?.length > 0) categoriesQuery = categories.map(category => `&category=${category}`).join("");
    if (cities?.length > 0) citiesQuery = cities.map(city => `&city=${city}`).join("");

    resultQuery = searchQuery + pageQuery + sortQuery + startPriceQuery + endPriceQuery + categoriesQuery + citiesQuery;

    return resultQuery.startsWith("&") ? resultQuery.substring(1).trim() : resultQuery.trim();

}