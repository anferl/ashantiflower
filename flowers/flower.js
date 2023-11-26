onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

var audio = document.getElementById("backgroundAudio");
audio.volume = 0.5;