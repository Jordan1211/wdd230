var myObserver = new IntersectionObserver(handleScrollIntoView);

function handleScrollIntoView(entries) {
    entries.forEach((entry) => {
        var el = entry.target;
        if (entry.inserctionRatio > 0) {

            console.log('in the view:', el.src)
        } else {
            console.log('out of view', el.src);
        }
        });
    }

var element = document.querySelector("#myImage");
myObserver.observe(element)