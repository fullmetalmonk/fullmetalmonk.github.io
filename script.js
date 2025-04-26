<script>
  document.getElementById('playMusicBtn').addEventListener('click', () => {
    const audio = document.getElementById('bgm');
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0; // 从头开始播放
      audio.play();
    }
  });


 function createFallingStar() {
  const star = document.createElement('div');
  star.classList.add('falling-star');
  star.innerText = '⭐'; // 真·星星！

  star.style.position = 'fixed';
  star.style.top = '-30px'; // 从屏幕外面一点点开始
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.fontSize = (Math.random() * 10 + 14) + 'px';
  star.style.animation = `falling ${Math.random() * 3 + 2}s linear forwards`; // 播放动画

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000); // 5秒后删除
}

setInterval(createFallingStar, 300);
</script>