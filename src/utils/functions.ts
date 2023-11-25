export const copyToClipboard = (text) => {
    return new Promise((resolve, reject) => {
        return navigator.clipboard.writeText(text)
            .then(res => resolve("کپی شد"))
            .catch(err => reject("کپی نشد"));
    })
}