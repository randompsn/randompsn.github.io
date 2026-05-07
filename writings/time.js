function formatPublishTime(publishTime){
    if (!publishTime) return '';

    const publishDate = new Date(publishTime);
    const publshTimestamp = publishDate.getTime();
    
    const nowTimestamp = Date.now();

    const diffSeconds = Math.floor((nowTimestamp - publshTimestamp /1000));

    if (diffSeconds < 0){
        return 'just now';
    }

    const minutes = Math.floor(diffSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years =  Math.floor(days / 365);

 
}