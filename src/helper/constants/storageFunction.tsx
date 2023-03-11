export const getStorage = (string: string) => {
    try {
        let itemOfstorage = localStorage.getItem(string);
        if (!itemOfstorage) {
            return null;
        }
        return JSON.parse(itemOfstorage);
    } catch {
        console.error(`${string} could not be parsed into JSON`)
        return null
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

export const clearStorageExpirationTime = (string: string) => {
    const hours = 1; // to clear the localStorage after 1 hour
    const now = new Date().getTime();
    const setupTime = localStorage.getItem('setupTime');
    const setupTimeNum = Number(setupTime);
    if (setupTime === null) {
        localStorage.setItem('setupTime', now.toString())
    } else {
        if(now - setupTimeNum > hours*60*60*1000) {
            localStorage.removeItem(string);
            localStorage.setItem('setupTime', now.toString());
        }
    }
}

export const clearStorageExpirationTime2 = () => {
    const data = []; 
    const myHour = new Date();
    myHour.setHours(myHour.getHours() + 1); //one hour from now
    data.push(myHour);
    localStorage.setItem('storedData', JSON.stringify(data))

    function checkExpiration (){ 
        //check if past expiration date
        let storageValue = localStorage.getItem('storedData');
        if(storageValue === null) {
            storageValue = ''
        }
        const values = JSON.parse(storageValue);
        //check "my hour" index here
        if (values[1] < new Date()) {
            localStorage.removeItem("storedData")
        }
    }

    function intervalFunction() {
        var myinterval = 15*60*1000; // 15 min interval
        setInterval(function(){ checkExpiration(); }, myinterval );
    }
}