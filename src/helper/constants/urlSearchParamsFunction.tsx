export const getURLSearchParam = (string: string, item: string, page: string) => {
    const params = new URLSearchParams(window.location.search);
    if (window.location.href.indexOf(page) > -1) {
        if (params.has(string)) {
            return params.get(string);
        } else {
            //change searchparam only when item not empty
            if (item) {
                addURLParameter(string, item);
            }
            return item;
        }
    }
};

export const changeURLSearchParam = (string: string, item: string, page: string) => {
    if (window.location.href.indexOf(page) > -1) {
        try {
            addURLParameter(string, item);
            return item;
        } catch {
            console.error(`${string} could not be parsed into JSON, while changing it`)
            return item;
        }
    }
};

//function to remove query params from a URL
const removeURLParameter = (url: string, parameter: string) => {
    let urlparts = url.split('?');
    if (urlparts.length >= 2) {

        let prefix = encodeURIComponent(parameter) + '=';
        let pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (let i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

const addURLParameter = (key: string, value: string) => {
    let currentUrlWithSearchParams = window.location.origin + window.location.pathname + window.location.search;
    currentUrlWithSearchParams = removeURLParameter(currentUrlWithSearchParams, key);

    //figure out if we need to add the param with a ? or a &
    let queryStart;
    if (currentUrlWithSearchParams.indexOf('?') !== -1) {
        queryStart = '&';
    } else {
        queryStart = '?';
    }

    let newurl = currentUrlWithSearchParams + queryStart + key + '=' + value;
    window.history.pushState({ path: newurl }, '', newurl);
}