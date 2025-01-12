const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numberOfDots = 380;
const dots = [];
let mouse = { x: 0, y: 0 };

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createDots();
});

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function createDots() {
    dots.length = 0;
    for (let i = 0; i < numberOfDots; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 3,
            color: '#555',
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        if (distance < 150) {
            dot.color = `rgba(21, 114, 255, ${1 - distance / 150})`;
            dot.radius = 5;
        } else {
            dot.color = 'rgb(18, 18, 31)';
            dot.radius = 3;
        }

        if (distance < 150) {
            ctx.save();
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(21, 114, 255, ${1 - distance / 150})`;

            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(21, 114, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(68, 143, 255, ${1 - distance / 150})`;

            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            for (let i = 0; i < 10; i++) {
                const t = i / 10;
                const randomOffset = (Math.random() - 0.5) * 20;
                const intermediateX = dot.x + t * dx + randomOffset;
                const intermediateY = dot.y + t * dy + randomOffset;
                ctx.lineTo(intermediateX, intermediateY);
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(68, 143, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.restore();
        }
    });

    requestAnimationFrame(draw);
}

createDots();
draw();
