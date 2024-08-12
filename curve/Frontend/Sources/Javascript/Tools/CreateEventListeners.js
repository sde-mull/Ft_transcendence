export const attachEventListener = (type, selector, event, callback) => {
    if (type === 'Id') {
        const element = document.getElementById(selector);
        if (element) {
            element.removeEventListener(event, callback);
            element.addEventListener(event, callback);
        }
    } else if (type === 'Class') {
        const elements = document.getElementsByClassName(selector);
        Array.from(elements).forEach(element => {
            element.removeEventListener(event, callback);
            element.addEventListener(event, callback);
        });
    } else if (type === 'Query') {
        const element = document.querySelector(selector);
        if (element) {
            element.removeEventListener(event, callback);
            element.addEventListener(event, callback);
        }
    }
};