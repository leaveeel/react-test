export function setCookie(name, value, time) {
    if(time) {
        var deadline
        if(typeof(time) === 'string') {
            deadline = new Date(time).toUTCString()
        }else {
            deadline = new Date();
            deadline.setTime(deadline.getTime() + time * 1000)
        }
        return document.cookie = name + '=' + escape(value) + '; expires=' + deadline
    }
    return document.cookie = name + '=' + escape(value)
}

export function getCookie(name) {
    if(document.cookie.length > 0) {
        let name_start = document.cookie.indexOf(name + "=");
        if(name_start !== -1) {
            name_start = name_start + name.length + 1;
            let name_end = document.cookie.indexOf(";", name_start);
            if(name_end === -1) {
                name_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(name_start, name_end));
        }
    }
    return '';
}

export function delCookie(name) {
    return setCookie(name, '', -1)
}
