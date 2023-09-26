const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
    '#55efc4',
    '#81ecec',
    '#74b9ff',
    '#a29bfe',
    '#00b894',
    '#00cec9',
    '#0984e3',
    '#dfe6e9',
    '#b2bec3',
    '#636e72',
    '#2d3436',
    '#e84393',
]

function onClick(event) {
    ctx.beginPath();
    // 초기 점 위치
    ctx.moveTo(0, 0);
    // color 추가
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);