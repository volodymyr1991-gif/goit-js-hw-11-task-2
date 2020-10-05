const refs = {
  days: document.querySelector("span[data-value=days]"),
  hours: document.querySelector("span[data-value=hours]"),
  minutes: document.querySelector("span[data-value=mins]"),
  seconds: document.querySelector("span[data-value=secs]"),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    const startTime = new Date("Jul 17, 2021");

    updateClockFace(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      updateClockFace(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
