const screens = [...document.querySelectorAll('.screen')];
const characterData = {
  valentine: {
    name: 'Funny Valentine', part: 'PART 7 · D4C', line: 'Happy birthday, darling.',
    sub: 'May your future be as glorious as your destiny.',
    image: 'assets/karakter/funny-valentine.jpg', audio: 'assets/audio/funny-valentine.mp3',
    color: '#ed5e9a', impact: 'ゴゴゴ'
  },
  kira: {
    name: 'Yoshikage Kira', part: 'PART 4 · KILLER QUEEN', line: 'Happy birthday, darling.',
    sub: 'I hope you have a peaceful and wonderful day.',
    image: 'assets/karakter/yoshikage-kira.jpg', audio: 'assets/audio/yoshikage-kira.mp3',
    color: '#c9b7ed', impact: 'ドドド'
  },
  rohan: {
    name: 'Rohan Kishibe', part: "PART 4 · HEAVEN'S DOOR", line: 'Happy birthday!',
    sub: 'This is going to be a birthday worth writing about!',
    image: 'assets/karakter/rohan-kishibe.jpg', audio: 'assets/audio/rohan-kishibe.mp3',
    color: '#79b7a3', impact: 'ゴゴゴ'
  },
  diavolo: {
    name: 'Diavolo', part: 'PART 5 · KING CRIMSON', line: 'Happy birthday, darling.',
    sub: 'Your future has already been decided. Make it legendary.',
    image: 'assets/karakter/diavolo.jpg', audio: 'assets/audio/diavolo.mp3',
    color: '#e95b9b', impact: 'ドドド'
  }
};
function showScreen(id) {
  screens.forEach(screen => {
    const active = screen.id === id;
    screen.classList.toggle('active', active);
    screen.setAttribute('aria-hidden', String(!active));
  });
}
document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => showScreen(button.dataset.go));
});
document.querySelectorAll('[data-character]').forEach(button => {
  button.addEventListener('click', () => {
    const c = characterData[button.dataset.character];
    document.getElementById('greetingImage').src = c.image;
    document.getElementById('greetingImage').alt = 'Ilustrasi ' + c.name;
    document.getElementById('greetingName').textContent = c.name;
    document.getElementById('greetingPart').textContent = c.part;
    document.getElementById('greetingLine').textContent = c.line;
    document.getElementById('greetingSubline').textContent = c.sub;
    document.getElementById('impactWord').textContent = c.impact;
    document.querySelector('.greeting-art').style.background = `linear-gradient(135deg, ${c.color}, #fff0f4)`;
    const audio = document.getElementById('characterAudio');
    const source = document.getElementById('audioSource');
    source.src = c.audio;
    audio.load();
    showScreen('screen-greeting');
    // Browsers may block automatic audio; the player remains available.
    audio.play().catch(() => {});
  });
});
document.getElementById('openLetter').addEventListener('click', () => {
  window.open('from-me.html', '_blank', 'noopener,noreferrer');
});
// ===== Background music =====
const bgm = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const charAudio = document.getElementById('characterAudio');
bgm.volume = 0.4;

// Mulai saat user klik OPEN (klik pertama, jadi lolos aturan autoplay)
document.querySelector('#screen-home .main-button').addEventListener('click', () => {
  bgm.play().catch(() => {});
});

musicToggle.addEventListener('click', () => {
  if (bgm.paused) bgm.play().catch(() => {});
  else bgm.pause();
});

// Jangan bunyi bareng suara karakter
charAudio.addEventListener('play', () => { bgm.volume = 0.1; });
charAudio.addEventListener('pause', () => { bgm.volume = 0.4; });
charAudio.addEventListener('ended', () => { bgm.volume = 0.4; });
