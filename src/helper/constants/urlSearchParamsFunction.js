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


export const getURLSearchParam = (string, item) => {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    if (params.has(string)) {
        console.log(params.get);
        return params.get(string);
    } else {
        console.log('else');
        console.log(params);
        console.log(item);
        console.log(string);
        params.set(string, item);
        params.toString();
        return item;
    }
};