// components/VoiceInput.jsx
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function VoiceInput() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="container py-4">
      <h4>🎙️ Voice Input</h4>
      <p className="text-muted">Try speaking and watch the transcript appear.</p>

      <div className="mb-3">
        <button
          className="btn btn-success me-2"
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start Listening
        </button>
        <button className="btn btn-danger me-2" onClick={SpeechRecognition.stopListening}>
          Stop
        </button>
        <button className="btn btn-secondary" onClick={resetTranscript}>
          Reset
        </button>
      </div>

      <div className="bg-light border rounded p-3">
        <strong>Transcript:</strong>
        <p>{transcript || "Nothing spoken yet."}</p>
        <p className="text-muted small">{listening ? "🎧 Listening..." : "🛑 Not Listening"}</p>
      </div>
    </div>
  );
}
