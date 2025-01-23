const labels = document.querySelectorAll('.form-control label');
const delay = 50; 

labels.forEach(label => {
    const letters = label.innerText.split('');
    const spans = letters.map((letter, idx) => 
        `<span style="transition-delay: ${delay * idx}ms">${letter}</span>`
    );
    label.innerHTML = spans.join(''); 
});