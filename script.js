const notifications = document.querySelector(".notifications");

const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icon: "fa-check-circle",
        capName: "Success: ",
        text: "This is a success toast.",
    },
    error: {
        icon: "fa-times-circle",
        capName: "Error: ",
        text: "This is an error toast.",
    },
    warning: {
        icon: "fa-exclamation-triangle",
        capName: "Warning: ",
        text: "This is a warning toast.",
    },
    info: {
        icon: "fa-info-circle",
        capName: "Info: ",
        text: "This is an info toast.",
    }
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutid) clearTimeout(toast.timeoutid);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {
    const { icon, capName, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="coulmn">
                            <i class="fa ${icon}"></i></i>
                            <span><b>${capName}</b> ${text}</span>
                        </div>
                        <i class="fa fa-times" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutid = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
})