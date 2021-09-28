String.prototype.blarb = function() {
	let result = ""; // end value to return
	for(let i = 0; i < this.length; i++) {
		result +=	// add each letter to the result
			!!Math.round(Math.random()) // random truthy / falsey
				? this[i].toLowerCase() // if true, lowercase
				: this[i].toUpperCase();// if false, uppercase
	}
	return result;
}


function setBlarbs() {
    let editables = document.querySelectorAll("[contenteditable=true]");
    let inputs = document.querySelectorAll("input[type=text]");
    let textareas = document.querySelectorAll("textarea");
    let all = [...editables, ...inputs, ...textareas];

    all.forEach(e => {
        if(!e.previousElementSibling || !e.previousElementSibling.classList.contains("blarb")) {
            let blarb = document.createElement("button");
            blarb.type = "button";
            blarb.textContent = "Blarb";
            blarb.onclick = function() {
                let input = this.nextSibling;
                input.value = input.value.blarb();
            };
            blarb.classList.add("blarb");
            e.before(blarb);
        }
    })
}

setBlarbs();

const observer = new MutationObserver(setBlarbs);
observer.observe(document.body, { childList: true, subtree: true });