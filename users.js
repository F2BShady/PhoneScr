document.addEventListener("DOMContentLoaded", function() {
    var apps = document.getElementsByClassName("app");
    var messageContainer = document.getElementById("message-container");
    var messageBox = document.getElementById("message-box");
    var whatsappMessages = document.getElementById("chat-messages");
    var inputBox = document.getElementById("input-box");
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");
    var instagramModal = document.getElementById("instagram-modal");

    for (var i = 0; i < apps.length; i++) {
        apps[i].addEventListener("click", function() {
            var appName = this.id;
            if (appName === "whatsapp") {
                messageContainer.style.display = "block";
                instagramModal.style.display = "none";
                console.log("WhatsApp açıldı");
            } else if (appName === "instagram") {
                messageContainer.style.display = "none";
                instagramModal.style.display = "flex";
                console.log("Instagram açıldı");
            }
        });
    }

    sendButton.addEventListener("click", function() {
        var messageText = messageInput.value;
        if (messageText.trim() !== "") {
            var messageElement = document.createElement("div");
            messageElement.innerText = messageText;
            whatsappMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    });
});
