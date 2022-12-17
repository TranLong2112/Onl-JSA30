const getScrollPosition = (el = window) =>({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};


var x='';
var es6_equation = (a=5,b=8) => {
    return x = -b/a;
}
var result = es6_equation = (a=5,b=8);
console.log(result);