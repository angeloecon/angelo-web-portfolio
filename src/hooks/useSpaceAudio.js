import { useState, useRef, useEffect } from "react";

const useSpaceAudio = () => {
    const [engineOn, setEngineOn] = useState(false);
    const audioCtxRef = useRef(null);
    const engineSourceRef = useRef(null);
    const gainNodeRef = useRef(null);

    const toggleEngine = () => {
        if (!audioCtxRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtxRef.current = new AudioContext();
        }
        const ctx = audioCtxRef.current;

        if (engineOn) {
            if (gainNodeRef.current) {
                gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
            }
            setTimeout(() => {
                if (engineSourceRef.current) {
                    try { engineSourceRef.current.stop(); } catch (e) { }
                    engineSourceRef.current.disconnect();
                }
                setEngineOn(false);
            }, 1000);
        } else {

            if (ctx.state === 'suspended') ctx.resume();

            // Create a 2-second empty audio buffer
            const bufferSize = ctx.sampleRate * 2;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            // fill it with "Brown Noise" math (Random values smoothed out)
            let lastOut = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                data[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = data[i];
                data[i] *= 3.5;
            }

            // Source Node to play this buffer
            const noiseSource = ctx.createBufferSource();
            noiseSource.buffer = buffer;
            noiseSource.loop = true;

            // Filter (Lowpass) & Gain (Volume)
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 120;

            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.1, ctx.currentTime + 1);

            // connect the graph - - -
            noiseSource.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Play//starter
            noiseSource.start();

            engineSourceRef.current = noiseSource;
            gainNodeRef.current = gainNode;
            setEngineOn(true);
        }
    };

    useEffect(() => {
        window.playHoverSound = () => {
            if (!audioCtxRef.current) return;
            const ctx = audioCtxRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        };

        window.playClickSound = () => {
            if (!audioCtxRef.current) return;
            const ctx = audioCtxRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "square";
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        };
    }, []);

    return { engineOn, toggleEngine };
};

export default useSpaceAudio;
