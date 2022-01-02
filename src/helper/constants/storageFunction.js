export const getStorage = (string, item) => {
    try {
        if (!localStorage.getItem(string)) {
            localStorage.setItem(string, JSON.stringify(item));
            return item;
        }
        return JSON.parse(localStorage.getItem(string));
    } catch {
        console.log('else');
        console.error(`${string} could not be parsed into JSON`)
        return item
    }
};

export const changeStorage = (string, item) => {
    try {
        localStorage.setItem(string, JSON.stringify(item));
        return item;
    } catch {
        console.error(`${string} could not be parsed into JSON, while changing it`)
        return item
    }
};