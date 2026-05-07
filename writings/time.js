function formatPublishTime(publishTime){
    if (!publishTime) return '';

    const publishDate = new Date(publishTime);
    const publishTimestamp = publishDate.getTime();

    const nowTimestamp = Date.now();

    const diffSeconds = Math.floor((nowTimestamp - publishTimestamp) / 1000);

    if (diffSeconds < 5){
        return 'just now';
    }

    const minutes = Math.floor(diffSeconds / 60);
    const hours = Math.floor(diffSeconds / 3600);
    const days = Math.floor(diffSeconds / 86400);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return years + (years === 1 ? ' year ago' : ' years ago');
    if (months > 0) return months + (months === 1 ? ' month ago' : ' months ago');
    if (weeks > 0) return weeks + (weeks === 1 ? ' week ago' : ' weeks ago');
    if (days > 0) return days + (days === 1 ? ' day ago' : ' days ago');
    if (hours > 0) return hours + (hours === 1 ? ' hour ago' : ' hours ago');
    if (minutes > 0) return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');

    return 'just now';
}