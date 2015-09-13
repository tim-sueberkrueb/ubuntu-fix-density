
oxide.addMessageHandler("PASTE", function (msg) {
    var event = new CustomEvent("QMLmessage", {detail: msg.args});
    document.dispatchEvent(event);
    document.getElementById("id_poster").value = msg.args["title"]
    document.getElementById("id_syntax").value = "js"
    document.getElementById("id_content").value = msg.args["content"]
    document.getElementById("pasteform").submit()

    msg.reply({});
});
