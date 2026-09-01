// Soothing anime spring breeze & gentle pentatonic wind chimes synthesizer via Web Audio API
class AnimeAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playChime(freq = 523.25) {
    this.init();
    if (!this.ctx || !this.gainNode) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm anime chime envelope
    noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.2);

    osc.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start();
    osc.stop(this.ctx.currentTime + 2.3);
  }

  public playSuccessTone() {
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Bright anime fanfare chord)
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq);
      }, idx * 90);
    });
  }

  public toggleAmbientSound(onStateChange?: (playing: boolean) => void) {
    this.init();
    if (!this.ctx) return;

    if (this.isPlaying) {
      this.stopAmbient();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startAmbient();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  private startAmbient() {
    this.isPlaying = true;
    const pentatonicScales = [
      523.25, // C5
      587.33, // D5
      659.25, // E5
      783.99, // G5
      880.00, // A5
      1046.50, // C6
      1174.66  // D6
    ];

    const playRandomBreezeChime = () => {
      if (!this.isPlaying) return;
      const note = pentatonicScales[Math.floor(Math.random() * pentatonicScales.length)];
      this.playChime(note);

      // Schedule next chime with organic random anime timing
      const nextDelay = 1800 + Math.random() * 3200;
      this.timer = window.setTimeout(playRandomBreezeChime, nextDelay);
    };

    playRandomBreezeChime();
  }

  public stopAmbient() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const animeAudio = new AnimeAudioSynthesizer();
