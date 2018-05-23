module.exports = bump = (x, bumpCount = 0) => {
    for(let i=0; i < x.length; i++) {
        if (x.charAt(i) === "n") bumpCount++;
    }
    return (bumpCount <= 15) ? "Woohoo!" : "Car Dead";
};