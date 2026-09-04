// Task 4: Bulletproof Permanent Music Player Engine — Ayesha Iqbal CodeAlpha Task

// Preloaded Playlist Dataset — 22 Curated Music Tracks
const defaultSongs = [
  {
    id: 1,
    title: "Acoustic Breeze",
    artist: "SoundHelix Chill",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Electronic Chillwave",
    artist: "Lofi Dreamer",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Neon Electric Skyline",
    artist: "Cyber Pulse",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "Cosmic Odyssey",
    artist: "Astral Voyager",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    title: "Cyberpunk Overdrive",
    artist: "Glitch Matrix",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    title: "Rainy Window Lofi",
    artist: "Cozy Coffee",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: 7,
    title: "Starlight Serenade",
    artist: "Celestine",
    cover: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: 8,
    title: "Retrowave Sunset",
    artist: "Outrun 80s",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    id: 9,
    title: "Tokyo Neon Nights",
    artist: "Shinjuku Beats",
    cover: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id: 10,
    title: "Deep Space Ambient",
    artist: "Orbital Probe",
    cover: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    id: 11,
    title: "Quantum Flux",
    artist: "Subatomic Labs",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    id: 12,
    title: "Golden Hour Jazz",
    artist: "Velvet Trio",
    cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },
  {
    id: 13,
    title: "Acoustic Forest",
    artist: "Pine Trails",
    cover: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id: 14,
    title: "Hyperdrive Rush",
    artist: "Vector Zero",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
  },
  {
    id: 15,
    title: "Midnight City Groove",
    artist: "Downtown Funk",
    cover: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
  },
  {
    id: 16,
    title: "Ocean Wave Zen",
    artist: "Tidal Waves",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
  },
  {
    id: 17,
    title: "Crystal Prism",
    artist: "Kira Light",
    cover: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 18,
    title: "Synthetic Dreams",
    artist: "Neuro Sound",
    cover: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 19,
    title: "Aurora Borealis",
    artist: "Polaris",
    cover: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 20,
    title: "Analog Rewind",
    artist: "Cassette 80s",
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 21,
    title: "Solar Eclipse",
    artist: "Helios Project",
    cover: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 22,
    title: "Infinity Loop",
    artist: "Zero State",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];

// ============================================================================
// INDEXEDDB PERMANENT BINARY AUDIO STORAGE (Guarantees local uploaded files stay forever!)
// ============================================================================
const DB_NAME = "AyeshaPermanentMusicDB_v9";
const STORE_NAME = "audioFiles";

function openAudioDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveAudioBlobToDB(songId, blobOrFile) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(blobOrFile, songId.toString());
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) {
    console.error("IndexedDB save error:", e);
    return false;
  }
}

async function getAudioBlobFromDB(songId) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(songId.toString());
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}

// Load Playlist from localStorage safely (stores metadata only, binary audio in IndexedDB!)
function loadStoredSongs() {
  const stored = localStorage.getItem("ayesha_music_playlist_metadata_v9");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {}
  }
  return [...defaultSongs];
}

function saveSongsToStorage(playlist) {
  try {
    // Save metadata ONLY to localStorage so setItem NEVER fails due to QuotaExceededError!
    const safePlaylist = playlist.map(item => ({
      id: item.id,
      title: item.title,
      artist: item.artist,
      cover: item.cover,
      audioUrl: item.audioUrl && item.audioUrl.startsWith("http") ? item.audioUrl : "",
      hasDbAudio: item.hasDbAudio || false
    }));
    localStorage.setItem("ayesha_music_playlist_metadata_v9", JSON.stringify(safePlaylist));
  } catch (e) {
    console.warn("Storage warning:", e);
  }
}

let songs = loadStoredSongs();
let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;
let isShuffle = false;
let repeatMode = 0; // 0 = off, 1 = repeat all, 2 = repeat one
let timerInterval = null;
let currentDurationSec = 180;

// Global HTML5 Audio Element
const audioElement = new Audio();
audioElement.volume = 0.8;

// DOM Elements
const albumArt = document.getElementById("albumArt");
const vinylRecord = document.getElementById("vinylRecord");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalDurationEl = document.getElementById("totalDuration");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const playlistTracks = document.getElementById("playlistTracks");
const playlistCount = document.getElementById("playlistCount");
const canvas = document.getElementById("visualizerCanvas");
const canvasCtx = canvas.getContext("2d");

// Add Song Modal Elements
const openAddSongBtn = document.getElementById("openAddSongBtn");
const openAddSongBtn2 = document.getElementById("openAddSongBtn2");
const closeAddSongModalBtn = document.getElementById("closeAddSongModalBtn");
const cancelAddSongBtn = document.getElementById("cancelAddSongBtn");
const addSongModal = document.getElementById("addSongModal");
const addSongForm = document.getElementById("addSongForm");
const presetPills = document.querySelectorAll(".preset-pill");
const toastContainer = document.getElementById("toastContainer");

// Format Seconds to MM:SS
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Draw Spectrum Visualizer Canvas Animation
let visualizerAnimId = null;
function startVisualizerAnimation() {
  cancelAnimationFrame(visualizerAnimId);
  
  function draw() {
    visualizerAnimId = requestAnimationFrame(draw);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barCount = 24;
    const barWidth = (canvas.width / barCount) - 2;

    for (let i = 0; i < barCount; i++) {
      const heightMultiplier = isPlaying ? (Math.sin(Date.now() / 150 + i * 0.5) + 1) / 2 : 0.05;
      const barHeight = Math.max(4, heightMultiplier * canvas.height);
      const x = i * (barWidth + 2);

      const gradient = canvasCtx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, "#818cf8");
      gradient.addColorStop(1, "#ec4899");

      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    }
  }

  draw();
}

// Load Song (Retrieves exact binary audio file from IndexedDB permanently!)
async function loadSong(index) {
  if (songs.length === 0) return;
  currentSongIndex = (index + songs.length) % songs.length;
  const song = songs[currentSongIndex];

  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  albumArt.src = song.cover;
  
  audioElement.pause();

  let resolvedAudioSrc = song.audioUrl || "";

  // Check IndexedDB for custom stored audio file
  if (song.hasDbAudio || song.id > 1000) {
    const blob = await getAudioBlobFromDB(song.id);
    if (blob) {
      resolvedAudioSrc = URL.createObjectURL(blob);
      song.liveBlobUrl = resolvedAudioSrc; // Live ObjectURL
    }
  }

  if (resolvedAudioSrc) {
    audioElement.src = resolvedAudioSrc;
    audioElement.load();
  }

  progressBar.value = 0;
  currentTimeEl.textContent = "0:00";
  totalDurationEl.textContent = "3:00";
  currentDurationSec = 180;

  updatePlaylistActiveState();
}

// Play Song (Plays ONLY the exact selected song audio file)
function playSong() {
  isPlaying = true;
  vinylRecord.classList.add("playing");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  
  startVisualizerAnimation();

  if (audioElement.src) {
    audioElement.muted = isMuted;
    audioElement.volume = parseFloat(volumeSlider.value);
    audioElement.play().catch(err => {
      console.warn("Playback notice:", err);
    });
  }

  // Timer interval for UI progress updates
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isPlaying) return;

    if (audioElement.duration && !isNaN(audioElement.duration)) {
      currentDurationSec = audioElement.duration;
      const pct = (audioElement.currentTime / audioElement.duration) * 100;
      progressBar.value = pct;
      currentTimeEl.textContent = formatTime(audioElement.currentTime);
      totalDurationEl.textContent = formatTime(audioElement.duration);
    } else {
      let curSec = Math.floor((progressBar.value / 100) * currentDurationSec) + 1;
      if (curSec >= currentDurationSec) {
        handleTrackEnd();
        return;
      }
      progressBar.value = (curSec / currentDurationSec) * 100;
      currentTimeEl.textContent = formatTime(curSec);
      totalDurationEl.textContent = formatTime(currentDurationSec);
    }
  }, 1000);
}

// Pause Song
function pauseSong() {
  isPlaying = false;
  vinylRecord.classList.remove("playing");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  
  audioElement.pause();
  if (timerInterval) clearInterval(timerInterval);
}

// Audio Track End Event
audioElement.addEventListener("ended", handleTrackEnd);

async function handleTrackEnd() {
  if (repeatMode === 2) {
    audioElement.currentTime = 0;
    progressBar.value = 0;
    playSong();
  } else if (isShuffle) {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * songs.length);
    } while (nextIndex === currentSongIndex && songs.length > 1);
    await loadSong(nextIndex);
    playSong();
  } else if (currentSongIndex < songs.length - 1 || repeatMode === 1) {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    await loadSong(nextIndex);
    playSong();
  } else {
    pauseSong();
  }
}

// Next & Previous Track Controls
async function nextSong() {
  let nextIndex;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * songs.length);
  } else {
    nextIndex = (currentSongIndex + 1) % songs.length;
  }
  await loadSong(nextIndex);
  if (isPlaying) playSong();
}

async function prevSong() {
  let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  await loadSong(prevIndex);
  if (isPlaying) playSong();
}

// Playlist UI Rendering
function renderPlaylist() {
  playlistTracks.innerHTML = "";
  playlistCount.textContent = `${songs.length} Tracks`;

  songs.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = `track-item ${index === currentSongIndex ? 'active' : ''}`;
    div.innerHTML = `
      <img src="${song.cover}" alt="${song.title}" class="track-thumb" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'">
      <div class="track-details">
        <div class="track-title">${song.title}</div>
        <div class="track-artist">${song.artist}</div>
      </div>
      <span class="track-duration">♫ MP3</span>
    `;
    div.addEventListener("click", async () => {
      await loadSong(index);
      playSong();
    });
    playlistTracks.appendChild(div);
  });
}

function updatePlaylistActiveState() {
  const items = document.querySelectorAll(".track-item");
  items.forEach((item, idx) => {
    item.classList.toggle("active", idx === currentSongIndex);
  });
}

// Modal Dialog Show & Hide
function openAddSongModal() {
  addSongModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAddSongModal() {
  addSongModal.classList.remove("active");
  document.body.style.overflow = "auto";
  addSongForm.reset();
}

openAddSongBtn.addEventListener("click", openAddSongModal);
if (openAddSongBtn2) openAddSongBtn2.addEventListener("click", openAddSongModal);
closeAddSongModalBtn.addEventListener("click", closeAddSongModal);
cancelAddSongBtn.addEventListener("click", closeAddSongModal);

addSongModal.addEventListener("click", (e) => {
  if (e.target === addSongModal) closeAddSongModal();
});

// Preset Sample Pill Selection
presetPills.forEach(pill => {
  pill.addEventListener("click", () => {
    document.getElementById("songTitleInput").value = pill.getAttribute("data-title");
    document.getElementById("songArtistInput").value = pill.getAttribute("data-artist");
    document.getElementById("songCoverInput").value = pill.getAttribute("data-cover");
    document.getElementById("songAudioUrlInput").value = pill.getAttribute("data-url");
  });
});

// Add Song Form Submit Handler (Saves binary audio to IndexedDB and metadata to localStorage!)
addSongForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("songTitleInput").value.trim();
  const artist = document.getElementById("songArtistInput").value.trim();
  const cover = document.getElementById("songCoverInput").value.trim();
  const fileInput = document.getElementById("songFileInput");
  const urlInput = document.getElementById("songAudioUrlInput");

  if (!title || !artist || !cover) return;

  const songId = Date.now();
  let playableAudioUrl = "";
  let hasDbAudio = false;

  // 1. If user selected a local MP3 audio file from their device
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    
    // Save binary audio file directly into IndexedDB under songId
    await saveAudioBlobToDB(songId, file);
    hasDbAudio = true;
    playableAudioUrl = URL.createObjectURL(file); // Live ObjectURL for immediate play
  } else if (urlInput.value.trim()) {
    playableAudioUrl = urlInput.value.trim();
  } else {
    playableAudioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  }

  const newSong = {
    id: songId,
    title: title,
    artist: artist,
    cover: cover,
    audioUrl: playableAudioUrl,
    hasDbAudio: hasDbAudio
  };

  songs.unshift(newSong); // Add to top of playlist
  saveSongsToStorage(songs);

  closeAddSongModal();
  renderPlaylist();
  await loadSong(0); // Select the newly added track
  playSong();        // Play EXACT added song!

  showToast(`"${title}" by ${artist} added to playlist & saved permanently!`);
});

// Toast Notification System
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Event Listeners for Player Control Buttons
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

progressBar.addEventListener("input", (e) => {
  const pct = parseFloat(e.target.value);
  if (audioElement.duration && !isNaN(audioElement.duration)) {
    audioElement.currentTime = (pct / 100) * audioElement.duration;
  }
  currentTimeEl.textContent = formatTime((pct / 100) * currentDurationSec);
});

volumeSlider.addEventListener("input", (e) => {
  const vol = parseFloat(e.target.value);
  audioElement.volume = vol;

  if (vol === 0) {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    isMuted = true;
  } else {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    isMuted = false;
  }
});

muteBtn.addEventListener("click", () => {
  if (isMuted) {
    volumeSlider.value = 0.8;
    audioElement.volume = 0.8;
    audioElement.muted = false;
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    isMuted = false;
  } else {
    volumeSlider.value = 0;
    audioElement.volume = 0;
    audioElement.muted = true;
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    isMuted = true;
  }
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  if (repeatMode === 0) {
    repeatBtn.classList.remove("active");
    repeatBtn.title = "Repeat Off";
    repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else if (repeatMode === 1) {
    repeatBtn.classList.add("active");
    repeatBtn.title = "Repeat All";
    repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else {
    repeatBtn.classList.add("active");
    repeatBtn.title = "Repeat One";
    repeatBtn.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>';
  }
});

// Keyboard Controls
document.addEventListener("keydown", (e) => {
  if (addSongModal.classList.contains("active")) {
    if (e.key === "Escape") closeAddSongModal();
    return;
  }
  if (e.code === "Space") {
    e.preventDefault();
    if (isPlaying) pauseSong(); else playSong();
  }
  if (e.key === "ArrowRight") nextSong();
  if (e.key === "ArrowLeft") prevSong();
});

// Initialize Player
(async () => {
  renderPlaylist();
  await loadSong(0);
})();
