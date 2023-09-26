function setupNotice() {
  const speedNoticeWrapper = document.createElement("div");
  const speedNotice = document.createElement("div");

  speedNoticeWrapper.className = "NS_speedNoticeWrapper";
  speedNotice.className = "NS_speedNotice";

  speedNoticeWrapper.append(speedNotice);
  document.body.append(speedNoticeWrapper);

  return speedNotice;
}

(async function () {
  console.log("---- ACTIVATED NETFLIX SPEED CONTROLS ----");
  let video;
  const speedNotice = setupNotice();

  const startScale = 1;
  const endScale = 1.2;

  function notifySpeed(speed) {
    speedNotice.innerText = `${speed}x`;

    speedNotice.animate(
      [
        { visibility: "visible", opacity: 0 },
        { offset: 0.2, opacity: 1, transform: `scale(${startScale})` },
        { offset: 0.75, opacity: 1, transform: `scale(${endScale})` },
        { visibility: "hidden", opacity: 0, transform: `scale(${endScale})` },
      ],
      { duration: 400 }
    );
  }

  function handleKeyDown(e) {
    if (!video) video = document.querySelector("video");

    switch (e.code) {
      case "Comma":
        if (e.shiftKey) {
          video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
          notifySpeed(video.playbackRate);
        }
        break;
      case "Period":
        if (e.shiftKey) {
          video.playbackRate = Math.min(2.5, video.playbackRate + 0.25);
          notifySpeed(video.playbackRate);
        }
        break;
    }
  }

  document.body.addEventListener("keydown", handleKeyDown);
})();
