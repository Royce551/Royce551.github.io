let pressCount = 0;
document.querySelector('img').onclick = function () {
    pressCount++;
    test.textContent = `Hello World! Tenshi was clicked on ${pressCount} times.`;
}