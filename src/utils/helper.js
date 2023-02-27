export const getViews = (views) => {
    try{
        if(views < 1000)
            return views + ' views';
        if(views > 999 && views < 1000000){
            return (views/1000).toPrecision(3) + 'K'
        }
        if(views > 999999 && views < 100000000){
            return (views/1000000).toPrecision(3) + 'M'
        }
        return (views/10000000).toPrecision(3) + 'B'
    }catch{
        return null;
    }
}

export function timeAgo (value) {
    const seconds = Math.floor((new Date().getTime() - new Date(value).getTime()) / 1000)
    let interval = seconds / 31536000
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: 'auto' })
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'year') }
    interval = seconds / 2592000
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'month') }
    interval = seconds / 86400
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'day') }
    interval = seconds / 3600
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'hour') }
    interval = seconds / 60
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'minute') }
    return rtf.format(-Math.floor(interval), 'second')
}

export const restrictText = (text, len) => {
    try{
        if(text.length < len)
            return text;
        
        return text.substring(0, len) + '...';
    }
    catch{
        return false;
    }
}