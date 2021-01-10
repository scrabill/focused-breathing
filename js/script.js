const input = document.querySelector("input[type='number']")

document.querySelector("input[type='number']").addEventListener('change', (event) => {
    document.documentElement.style.setProperty('--timing', input.value + "s");
})