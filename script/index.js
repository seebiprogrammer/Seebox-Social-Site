const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageBox = document.querySelector('.message-box')
const messageSearch = document.querySelector('#message-search');


const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector('.notifications-popup').style.display = "none"
        } else {
            document.querySelector('.notifications-popup').style.display = "block";
        }
    });
});

messagesNotification.addEventListener('click', () => {
    messageBox.style.boxShadow = '0 0 20px var(--primary-color)';

    setTimeout(() => {
        messageBox.style.boxShadow = "none";
    }, 1000)
})


// const searchMessage = () => {
//     const val = messageSearch.value.toLowerCase();
//     console.log(val)
//     message.forEach((chat) => {
//         let name = chat.querySelectorAll('h5').textContent
//         console.log(name);
//         // if (name.indexOf(val) != -1) {
//         //     chat.style.display = "flex"
//         // } else {
//         //     chat.style.display = "none"
//         // }
//     })
// }

