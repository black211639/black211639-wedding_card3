const defaultWeddingInfo = {
  groom: "新郎",
  bride: "新娘",
  date: "2026-12-12",
  hero_message: "誠摯邀請您蒞臨見證我們的重要時刻",
  venue: "婚禮地點請參考 wedding_info.json",
  hall: "宴會廳資訊請參考 wedding_info.json",
  time: "午宴｜迎賓入席 12:00｜準時開席",
  address: "婚禮地址請參考 wedding_info.json",
  parking: "停車資訊請參考 wedding_info.json",
  map_link: "https://www.google.com/maps",
  english_quote: "Together is our favorite place to be.",
  intro_lines: [
    "一路走來，謝謝彼此相伴",
    "在這個重要的日子裡",
    "我們誠摯邀請您蒞臨",
    "與我們一同分享這份喜悅"
  ],
  invitation_message: [
    "有些幸福，因為被見證而更加完整；",
    "有些時刻，因為有您在場而更加珍貴。"
  ],
  map_description: [
    "點擊下方按鈕即可開啟 Google 地圖導航。",
    "建議提早出發，預留交通與停車時間。"
  ],
  reminders: [
    "建議提前 10 至 15 分鐘抵達會場",
    "請依現場人員指引入席",
    "敬請準時入席，一同分享我們的重要時刻"
  ],
  countdown_target: "2026-12-12T12:00:00",
  photo_paths: {
    cover: "assets/photos/cover.jpg",
    photo1: "assets/photos/photo1.jpg",
    photo2: "assets/photos/photo2.jpg",
    photo3: "assets/photos/photo3.jpg"
  }
};

const state = {
  heroIndex: 0,
  heroIntervalId: null,
  audioReady: true,
  audioActivated: false,
  countdownId: null,
  introDismissed: false
};

document.addEventListener("DOMContentLoaded", async () => {
  document.body.classList.add("is-intro-active");

  const weddingInfo = await loadWeddingInfo();
  renderWeddingInfo(weddingInfo);
  setupHeroSlides();
  setupMediaFrames();
  setupMapButton(weddingInfo.map_link);
  setupMusicToggle();
  setupIntroOverlay();
  setupRevealObserver();
  setupCountdown(weddingInfo.countdown_target || defaultWeddingInfo.countdown_target);
});

async function loadWeddingInfo() {
  const embeddedData = readEmbeddedWeddingInfo();

  try {
    const response = await fetch("wedding_info.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status}`);
    }

    const data = await response.json();
    return mergeWeddingInfo(data);
  } catch {
    return mergeWeddingInfo(embeddedData || defaultWeddingInfo);
  }
}

function mergeWeddingInfo(data) {
  return {
    ...defaultWeddingInfo,
    ...data,
    photo_paths: {
      ...defaultWeddingInfo.photo_paths,
      ...(data?.photo_paths || {})
    }
  };
}

function readEmbeddedWeddingInfo() {
  try {
    const element = document.getElementById("embedded-wedding-data");
    const raw = element?.textContent?.trim();
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function renderWeddingInfo(data) {
  const groom = data.groom || defaultWeddingInfo.groom;
  const bride = data.bride || defaultWeddingInfo.bride;
  const dateDisplay = formatDateZh(data.date || defaultWeddingInfo.date);
  const shortDate = formatDateDots(data.date || defaultWeddingInfo.date);
  const introLines = getArrayValue(data.intro_lines, defaultWeddingInfo.intro_lines);
  const invitationLines = getArrayValue(data.invitation_message, defaultWeddingInfo.invitation_message);
  const mapLines = getArrayValue(data.map_description, defaultWeddingInfo.map_description);
  const reminders = getArrayValue(data.reminders, defaultWeddingInfo.reminders);

  setText("hero-date", shortDate);
  setText("hero-names", `${groom} & ${bride}`);
  setText("hero-message", data.hero_message || defaultWeddingInfo.hero_message);
  setTextBySelector(".envelope-front-names", `${groom} & ${bride}`);
  setTextBySelector(".envelope-front-date", shortDate);
  setText("info-date", `${dateDisplay} ${formatWeekdayZh(data.date || defaultWeddingInfo.date)}`);
  setText("info-venue", data.venue || defaultWeddingInfo.venue);
  setText("info-hall", data.hall || defaultWeddingInfo.hall);
  setText("info-time", data.time || defaultWeddingInfo.time);
  setText("info-address", data.address || defaultWeddingInfo.address);
  setText("info-parking", data.parking || defaultWeddingInfo.parking);
  setTextBySelector(".map-placeholder-copy", data.address || defaultWeddingInfo.address);
  setText("map-description-line1", mapLines[0] || defaultWeddingInfo.map_description[0]);
  setText("map-description-line2", mapLines[1] || defaultWeddingInfo.map_description[1]);

  const introNames = document.querySelector(".intro-names");
  const introScript = document.querySelector(".intro-script");
  const introCopy = document.querySelector(".intro-copy");
  const welcomeCopy = document.querySelector(".welcome-copy");

  if (introNames) {
    introNames.textContent = `${groom} & ${bride}`;
  }

  if (introScript) {
    introScript.innerHTML = escapeHtml(data.english_quote || defaultWeddingInfo.english_quote).replace(/\n/g, "<br>");
  }

  if (introCopy) {
    introCopy.innerHTML = introLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  }

  if (welcomeCopy) {
    welcomeCopy.innerHTML = invitationLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  }

  renderReminderList(reminders);
  applyPhotoPaths(data.photo_paths || defaultWeddingInfo.photo_paths);
}

function getArrayValue(value, fallback) {
  return Array.isArray(value) && value.length ? value : fallback;
}

function renderReminderList(items) {
  const reminderList = document.getElementById("reminder-list");

  if (!reminderList) {
    return;
  }

  reminderList.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    reminderList.appendChild(listItem);
  });
}

function applyPhotoPaths(photoPaths) {
  const heroSlides = document.querySelectorAll("[data-hero-slide]");
  const coverPaths = [photoPaths.cover, photoPaths.photo1, photoPaths.photo2].filter(Boolean);

  heroSlides.forEach((slide, index) => {
    if (coverPaths[index]) {
      slide.style.backgroundImage = `url('${coverPaths[index]}')`;
    }
  });

  const imageMap = [
    { selector: ".split-media img", src: photoPaths.photo1 },
    { selector: ".oval-photo img", src: photoPaths.photo2 },
    { selector: ".story-card-primary .media-frame img", src: photoPaths.photo1 },
    { selector: ".story-card-offset .media-frame img", src: photoPaths.photo2 },
    { selector: ".wide-frame img", src: photoPaths.photo3 },
    { selector: ".calendar-photo img", src: photoPaths.cover },
    { selector: ".countdown-photo img", src: photoPaths.photo3 },
    { selector: ".thanks-photo img", src: photoPaths.cover }
  ];

  imageMap.forEach(({ selector, src }) => {
    const image = document.querySelector(selector);
    if (image && src) {
      image.src = src;
    }
  });

  const chineseGalleryImages = document.querySelectorAll(".chinese-gallery .media-frame img");
  [photoPaths.photo2, photoPaths.photo3, photoPaths.photo1].forEach((src, index) => {
    if (chineseGalleryImages[index] && src) {
      chineseGalleryImages[index].src = src;
    }
  });
}

function setupHeroSlides() {
  const slides = [...document.querySelectorAll("[data-hero-slide]")];

  if (slides.length < 2) {
    return;
  }

  state.heroIntervalId = window.setInterval(() => {
    slides[state.heroIndex].classList.remove("is-active");
    state.heroIndex = (state.heroIndex + 1) % slides.length;
    slides[state.heroIndex].classList.add("is-active");
  }, 5000);
}

function setupMediaFrames() {
  const frames = document.querySelectorAll(".media-frame");

  frames.forEach((frame) => {
    const image = frame.querySelector("img");

    if (!image) {
      return;
    }

    frame.classList.remove("is-missing");

    image.addEventListener("error", () => {
      frame.classList.add("is-missing");
      console.error("Photo failed to load:", image.currentSrc || image.src);
    });

    image.addEventListener("load", () => {
      frame.classList.remove("is-missing");
    });
  });
}

function setupMapButton(mapLink) {
  const button = document.getElementById("map-button");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    window.open(mapLink || defaultWeddingInfo.map_link, "_blank", "noopener,noreferrer");
  });
}

function setupMusicToggle() {
  const audio = document.getElementById("bgm-audio");
  const button = document.getElementById("music-toggle");

  if (!audio || !button) {
    return;
  }

  if (!hasPlayableAudioSource(audio)) {
    state.audioReady = false;
    setMusicUnavailableState(button);
    updateMusicButton(false);
    return;
  }

  audio.addEventListener("error", () => {
    state.audioReady = false;
    setMusicUnavailableState(button);
    updateMusicButton(false);
  });

  button.addEventListener("click", async () => {
    if (!state.audioReady) {
      updateMusicButton(false);
      return;
    }

    state.audioActivated = true;

    if (audio.paused) {
      try {
        await audio.play();
        updateMusicButton(true);
      } catch {
        updateMusicButton(false);
      }
      return;
    }

    audio.pause();
    updateMusicButton(false);
  });

  audio.addEventListener("pause", () => updateMusicButton(false));
  audio.addEventListener("play", () => updateMusicButton(true));
}

function setupIntroOverlay() {
  const overlay = document.getElementById("intro-overlay");
  const button = document.getElementById("intro-enter-button");
  const envelopeStage = overlay?.querySelector(".envelope-stage");
  const audio = document.getElementById("bgm-audio");
  let hasEntered = false;
  let isFinishing = false;
  let introTimers = [];

  if (!overlay) {
    document.body.classList.remove("is-intro-active");
    return;
  }

  overlay.classList.remove(
    "is-opening",
    "is-flipped",
    "is-card-out",
    "is-leaving",
    "is-hidden",
    "state-front",
    "state-back",
    "state-back-hold",
    "state-card-out",
    "state-card-settle",
    "state-fade-out",
    "state-finished"
  );
  overlay.classList.add("state-front");
  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");

  if (!button) {
    document.body.classList.remove("is-intro-active");
    overlay.hidden = true;
    return;
  }

  const finishIntro = () => {
    if (isFinishing) {
      return;
    }

    isFinishing = true;
    introTimers.forEach((timerId) => window.clearTimeout(timerId));
    introTimers = [];
    overlay.hidden = true;
    overlay.classList.add("is-hidden", "state-finished");
    document.body.classList.remove("is-intro-active");
    document.body.classList.add("intro-complete");
  };

  const scheduleIntroStep = (callback, delay) => {
    const timerId = window.setTimeout(callback, delay);
    introTimers.push(timerId);
  };

  const skipIntro = () => {
    if (!hasEntered || isFinishing) {
      return;
    }

    introTimers.forEach((timerId) => window.clearTimeout(timerId));
    introTimers = [];
    overlay.classList.add("is-leaving", "state-fade-out");
    overlay.setAttribute("aria-hidden", "true");
    scheduleIntroStep(finishIntro, 260);
  };

  const enterIntro = () => {
    if (hasEntered || state.introDismissed) {
      skipIntro();
      return;
    }

    hasEntered = true;
    state.introDismissed = true;

    button.textContent = "略過動畫";
    button.setAttribute("aria-label", "略過開場動畫，直接進入喜帖");
    if (envelopeStage) {
      envelopeStage.setAttribute("aria-label", "略過開場動畫，直接進入喜帖");
    }

    if (audio && typeof audio.play === "function" && hasPlayableAudioSource(audio)) {
      state.audioActivated = true;
      audio.play()
        .then(() => updateMusicButton(true))
        .catch(() => updateMusicButton(false));
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.classList.add("is-leaving", "state-fade-out");
      overlay.setAttribute("aria-hidden", "true");
      scheduleIntroStep(finishIntro, 320);
      return;
    }

    scheduleIntroStep(() => overlay.classList.add("is-opening"), 120);
    scheduleIntroStep(() => overlay.classList.add("is-flipped", "state-back"), 760);
    scheduleIntroStep(() => overlay.classList.add("state-back-hold"), 1120);
    scheduleIntroStep(() => overlay.classList.add("is-card-out", "state-card-out"), 1350);
    scheduleIntroStep(() => overlay.classList.add("state-card-settle"), 2120);
    scheduleIntroStep(() => {
      overlay.classList.add("is-leaving", "state-fade-out");
      overlay.setAttribute("aria-hidden", "true");
    }, 3200);
    scheduleIntroStep(finishIntro, 3900);
  };

  button.addEventListener("click", enterIntro);
  if (envelopeStage) {
    envelopeStage.addEventListener("click", enterIntro);
  }

  window.setTimeout(() => button.focus({ preventScroll: true }), 80);
}

function updateMusicButton(isPlaying) {
  const button = document.getElementById("music-toggle");

  if (!button) {
    return;
  }

  button.classList.toggle("is-playing", isPlaying);
  button.setAttribute("aria-pressed", String(isPlaying));
}

function setMusicUnavailableState(button) {
  button.classList.add("is-disabled");
  button.setAttribute("aria-label", "背景音樂目前不可用");
  button.title = "尚未放置音樂檔案，建議位置：assets/audio/wedding-music.mp3";
}

function hasPlayableAudioSource(audio) {
  return Boolean(audio.currentSrc || audio.src || audio.querySelector("source[src]"));
}

function setupRevealObserver() {
  const elements = document.querySelectorAll(".reveal, .media-frame");

  elements.forEach((element) => element.classList.add("is-visible"));

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16
  });

  elements.forEach((element) => observer.observe(element));
}

function setupCountdown(targetString) {
  const target = new Date(targetString);

  if (Number.isNaN(target.getTime())) {
    return;
  }

  const update = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      setText("countdown-days", "0");
      setText("countdown-hours", "0");
      setText("countdown-minutes", "0");
      setText("countdown-seconds", "0");

      const finished = document.getElementById("countdown-finished");
      const grid = document.getElementById("countdown-grid");

      if (finished) {
        finished.hidden = false;
      }

      if (grid) {
        grid.hidden = true;
      }

      if (state.countdownId) {
        window.clearInterval(state.countdownId);
      }
      return;
    }

    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainSeconds = seconds % 60;

    setText("countdown-days", String(days));
    setText("countdown-hours", String(hours).padStart(2, "0"));
    setText("countdown-minutes", String(minutes).padStart(2, "0"));
    setText("countdown-seconds", String(remainSeconds).padStart(2, "0"));
  };

  update();
  state.countdownId = window.setInterval(update, 1000);
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setTextBySelector(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function formatDateDots(dateString) {
  const date = parseDateValue(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function formatDateZh(dateString) {
  const date = parseDateValue(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
}

function formatWeekdayZh(dateString) {
  const date = parseDateValue(dateString);
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return weekdays[date.getDay()];
}

function parseDateValue(dateString) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateString));

  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  return new Date(dateString);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
