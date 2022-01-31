export const getStorage = (string: string, item: string) => {
    try {
        let itemOfstorage = localStorage.getItem(string);
        if (!itemOfstorage) {
            localStorage.setItem(string, JSON.stringify(item));
            return item;
        }
        return JSON.parse(itemOfstorage);
    } catch {
        console.log('else');
        console.error(`${string} could not be parsed into JSON`)
        return item
    }
};

export const changeStorage = (string: string, item: string) => {
    try {
        localStorage.setItem(string, JSON.stringify(item));
        return item;
    } catch {
        console.error(`${string} could not be parsed into JSON, while changing it`)
        return item
    }
};