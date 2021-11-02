function handleScrollIntoView(entries) {
    CustomElementRegistry.forEach((Entry) => {
        var el = entry.traget;
        if (entry.inserctionRatio >0) {

            console.log('in the view:', el.src)
        } else {
            console.log('out of view', el.src);
        }
        });
    }

var element = document.querySelector("#myImage")
myObserver.observe(element)