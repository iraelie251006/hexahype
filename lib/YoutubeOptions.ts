
function getWidth() {
    let width;
    if (window.innerWidth <= 425) {
        width = "330";
    } else if (window.innerWidth < 768 && window.innerWidth > 425) {
        width = "550";
    } else if (window.innerWidth === 768) {
        width = "300";
    } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        width = "300";
    } else if (window.innerWidth < 1090 && window.innerWidth >= 1024) {
        width = "500";
    } else {
        width = "600";
    }
    return width;
}
const width = getWidth();

export const VideoOptions = {
    playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 0,
        loop: 1,
    },
    width: width,
    height: '300',
    className: 'rounded-2xl'
}