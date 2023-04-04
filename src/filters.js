
const types = ['def', 'thm', 'proof', 'lemm*']
const tags = ['p']

function oneOnly(name) {
    for (const type of types) {
        alltype = document.getElementsByClassName(type);
        if (type === name) {
            for (var onetype of alltype) { onetype.style.display = 'block'; }
        } else {
            for (var onetype of alltype) { onetype.style.display = 'none'; }
        }
    }
    for (const element of document.body.children) {
        if (element.tagName === 'P') {
            element.style.display = 'none';
        }
        //     element.style.display = 'block';
        // }
    }
}

function showAll() {
    for (const type of types) {
        alltype = document.getElementsByClassName(type);
        for (var onetype of alltype) { onetype.style.display = 'block'; }
    }
    for (const tag of tags) {
        alltag = document.getElementsByTagName(tag);
        for (var onetag of alltag) { onetag.style.display = 'block'; }
    }
}

console.log("filters loaded");
