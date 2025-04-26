document.getElementById('playMusicBtn').addEventListener('click', () => {
  window.open("https://codepen.io/YOSHIKAGE-KIRA-the-sans/pen/YPPVWrR", "_blank");
});
<script>
  function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    star.innerText = '⭐'; // 真·星星！
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.fontSize = (Math.random() * 10 + 14) + 'px';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  setInterval(createFallingStar, 300); // 每 300 毫秒掉一颗星
</script>
