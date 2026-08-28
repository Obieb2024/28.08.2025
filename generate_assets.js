const fs = require('fs');
const path = require('path');

const images = [
    { name: 'pkkmb-01.jpg', title: 'PKKMB 01' },
    { name: 'pkkmb-02.jpg', title: 'PKKMB 02' },
    { name: 'curug.jpg', title: 'Curug Cibareubeuy' },
    { name: 'timbel.jpg', title: 'Timbel' },
    { name: 'memory-01.jpg', title: 'Memori 01' },
    { name: 'memory-02.jpg', title: 'Memori 02' },
    { name: 'memory-03.jpg', title: 'Memori 03' },
    { name: 'memory-04.jpg', title: 'Memori 04' },
    { name: 'memory-05.jpg', title: 'Memori 05' }
];

const dir = 'c:/xampp/htdocs/28.08.25/assets/images';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

images.forEach(img => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'>
<defs>
    <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#35194A'/>
        <stop offset='50%' stop-color='#6D3BB8'/>
        <stop offset='100%' stop-color='#1B1025'/>
    </linearGradient>
</defs>
<rect width='100%' height='100%' fill='url(#g)'/>
<circle cx='300' cy='320' r='100' fill='#8B5CC7' opacity='0.25'/>
<text x='50%' y='340' font-family='serif' font-size='54' fill='#E2D2F3' text-anchor='middle'>💜</text>
<text x='50%' y='430' font-family='sans-serif' font-size='20' font-weight='600' fill='#F1E9F8' text-anchor='middle' letter-spacing='3'>KENANGAN KITA</text>
<text x='50%' y='475' font-family='serif' font-size='32' font-style='italic' fill='#C8A8E9' text-anchor='middle'>${img.title}</text>
</svg>`;
    fs.writeFileSync(path.join(dir, img.name), svg);
});

console.log('All image assets created!');
