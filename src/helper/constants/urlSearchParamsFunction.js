export const getURLSearchParam = (string, item) => {
    const params = new URLSearchParams(window.location.search);
    if (window.location.href.indexOf('receipt') > -1) {
        if (params.has(string)) {
            return params.get(string);
        } else {
            params.set(string, item);
            params.toString();
            window.location.search = params;
            console.log(params);
            return item;
        }
    }
};

export const changeURLSearchParam = (string, item) => {
    const params = new URLSearchParams(window.location.search);
    if (window.location.href.indexOf('receipt') > -1) {
        try {
            localStorage.setItem(string, JSON.stringify(item));
            params.set(string, item);
            params.toString();
            console.log(params);
            window.location.search = params;
            return item;
        } catch {
            console.error(`${string} could not be parsed into JSON, while changing it`)
            return item
        }
    }
};


const addQueryParam = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
};

const getQueryParam = (key, value) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key) || value;
};

//function to remove query params from a URL
function removeURLParameter(url, parameter) {
    //better to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
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

//function to add/update query params
export const insertParam = (key, value) => {
    if (window.history.pushState) {
        // var newurl = window.location.protocol + "//" + window.location.host + search.pathname + '?myNewUrlQuery=1';
        var currentUrlWithOutHash = window.location.origin + window.location.pathname + window.location.search;
        // var hash = window.location.hash
        //remove any param for the same key
        var currentUrlWithOutHash = removeURLParameter(currentUrlWithOutHash, key);

        //figure out if we need to add the param with a ? or a &
        var queryStart;
        if (currentUrlWithOutHash.indexOf('?') !== -1) {
            queryStart = '&';
        } else {
            queryStart = '?';
        }

        var newurl = currentUrlWithOutHash + queryStart + key + '=' + value
        window.history.pushState({ path: newurl }, '', newurl);
    }
}