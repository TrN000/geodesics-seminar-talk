
(() => {
    var variantsList = document.getElementsByClassName('variants');

    for (var variants of variantsList) {
        // modify variants here
        const children = variants.children;
        var variant = [];
        for (const child of children) {
            if (child.id.startsWith('var')) {
                child.className = 'tab';
                child.style.display = 'none';
                variant.push(child);
            }
        }
        variant[0].style.display = 'block';

        for (const vari of variant.reverse()) {
            var btn = document.createElement('button');
            btn.textContent = 'button ' + vari.id;
            btn.className = 'tablink';
            btn.onclick = () => {
                for (var vrr2 of variant) { // name is dumb but deal with it
                    if (vrr2.id === vari.id) {
                        vrr2.style.display = 'block';
                    } else {
                        vrr2.style.display = 'none';
                    }
                }
            }
            variants.insertBefore(btn, variants.firstChild);
        }

    }

    console.log('tabs loaded');
})();
