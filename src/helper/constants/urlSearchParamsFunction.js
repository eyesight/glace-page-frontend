export const getURLSearchParam = (string, item) => {
    const params = new URLSearchParams(window.location.search);
    if (window.location.href.indexOf('receipt') > -1) {
        if (params.has(string)) {
            return params.get(string);
        } else {
            addURLParameter(string, item);
            return item;
        }
    }
};

export const changeURLSearchParam = (string, item) => {
    if (window.location.href.indexOf('receipt') > -1) {
        try {
            addURLParameter(string, item);
            return item;
        } catch {
            console.error(`${string} could not be parsed into JSON, while changing it`)
            return item
        }
    }
};


//function to remove query params from a URL
const removeURLParameter = (url, parameter) => {
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

const addURLParameter = (key, value) => {
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