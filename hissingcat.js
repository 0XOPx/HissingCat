document.addEventListener("DOMContentLoaded", function() {
    const targetEmoji = "\u200D\u200D";
    const styleElement = document.createElement("style");
    styleElement.textContent = ".HISSINGCAT{display:inline-block;position:relative;font-size:28px!important;line-height:1!important;vertical-align:middle;overflow:visible;filter:grayscale(0%) saturate(150%) hue-rotate(-10deg);animation:hissShake .15s infinite ease-in-out;width:28px;height:28px}.HISSINGCAT::selection{background:rgba(0,120,215,.4)!important}.HISSINGCAT::after{content:'';font-size:20px!important;position:absolute;right:-18px;top:-2px;animation:puffOut .3s infinite ease-out;pointer-events:none;user-select:none}@keyframes hissShake{0%{transform:translate(0,0) rotate(0deg)}20%{transform:translate(-1px,1px) rotate(-1deg)}40%{transform:translate(1px,-1px) rotate(1deg)}60%{transform:translate(-1px,1px) rotate(0deg)}80%{transform:translate(1px,1px) rotate(1deg)}100%{transform:translate(0,0) rotate(0deg)}}@keyframes puffOut{0%{opacity:0;transform:scale(.5) translateX(0)}30%{opacity:1}100%{opacity:0;transform:scale(1) translateX(12px)}}";
    document.head.appendChild(styleElement);
    const walker = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null);
    let textNode;
    const nodesToReplace = [];
    while ((textNode = walker.nextNode())) {
        if (textNode.nodeValue.includes(targetEmoji)) {
            nodesToReplace.push(textNode);
        }
    }
    for (let i = nodesToReplace.length - 1; i >= 0; i--) {
        const node = nodesToReplace[i];
        const parent = node.parentNode;
        if (["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) continue;
        const parts = node.nodeValue.split(targetEmoji);
        const fragment = document.createDocumentFragment();
        parts.forEach((part, index) => {
            if (part) {
                fragment.appendChild(document.createTextNode(part));
            }
            if (index < parts.length - 1) {
                const span = document.createElement("span");
                span.className = "HISSINGCAT";
                span.textContent = targetEmoji;
                fragment.appendChild(span);
            }
        });
        parent.replaceChild(fragment, node);
    }
});
