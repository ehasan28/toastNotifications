const notifications = document.querySelector(".notifications");

const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icon: "fa-check-circle",
        text: "Success: This is a success toast.",
    },
    error: {
        icon: "fa-times-circle",
        text: "Error: This is an error toast.",
    },
    warning: {
        icon: "fa-exclamation-triangle",
        text: "Warning: This is a warning toast.",
    },
    info: {
        icon: "fa-info-circle",
        text: "Info: This is an info toast.",
    }
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutid) clearTimeout(toast.timeoutid);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="coulmn">
                            <i class="fa ${icon}"></i></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa fa-times" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutid = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
})