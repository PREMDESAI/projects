const $lupa = document.querySelector('.lupa');
const $bg = document.querySelector('.bg');
let { width: widthHTML, height: heightHTML } =
  document.documentElement.getBoundingClientRect();

function updateSize() {
  const { width, height } = document.documentElement.getBoundingClientRect();
  widthHTML = width;
  heightHTML = height;
}

function getLimitedPosition(clientX, clientY) {
  const ballRadius = 75;
  return {
    x: Math.min(Math.max(clientX - ballRadius, 0), widthHTML - 2 * ballRadius),
    y: Math.min(Math.max(clientY - ballRadius, 0), heightHTML - 2 * ballRadius)
  };
}

function updateBgAndLupaPosition(clientX, clientY) {
  const { x, y } = getLimitedPosition(clientX, clientY);
  $lupa.style.left = `${x}px`;
  $lupa.style.top = `${y}px`;
  const backgroundX = (clientX / window.innerWidth) * 100;
  const backgroundY = (clientY / window.innerHeight) * 100;
  $lupa.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
  $bg.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
}

document.addEventListener('mousemove', ({ clientX, clientY }) => {
  updateBgAndLupaPosition(clientX, clientY);
});

document.addEventListener('touchstart', e => {
  const handleTouchMove = e => {
    const { clientX, clientY } = e.touches[0];

    updateBgAndLupaPosition(clientX, clientY);
  };

  document.addEventListener('touchmove', handleTouchMove, { passive: true });

  const handleEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleEnd);
  };

  document.addEventListener('touchend', handleEnd, { passive: true });
});

window.addEventListener('resize', () => {
  updateSize();
});
