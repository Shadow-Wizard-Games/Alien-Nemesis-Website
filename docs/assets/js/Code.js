setTimeout(function() {
    var data = [
        {
            AboutDevTypeText: "<span style='font-family: Alien Invader, sans-serif; font-size: 60px; color: rgb(12, 248, 44);'>Code</span>"
        }
    ];

    var textContainer = document.getElementById("textContainer");
    var cursorRow = document.getElementById("cursorRow");

    var currentElementIdContent = data[0]["AboutDevTypeText"];
    var devTypeText = currentElementIdContent;

    // type code
    var i = 0, isTag, text;
    (function type() {
        text = devTypeText.slice(0, ++i);
        if (text === devTypeText) {
            // Clear blinking cursor when typing animation is done
            cursorRow.style.display = "none";
            return;
        }
        textContainer.innerHTML = text + `<span class='blinker'>&#32;</span>`;
        var char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 100); // Slower typing speed (100 milliseconds delay)
    })();
}, 500); // Delay in milliseconds (2 seconds)
