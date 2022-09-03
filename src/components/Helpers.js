export function jump_to_display() {
    jump_to_page("./display.html");
}

export function jump_to_login() {
    jump_to_page("./index.html");
}

function jump_to_page(url) {
    window.location.href = url;
}

export function notify_error(str) {
    console.error(str);
}
