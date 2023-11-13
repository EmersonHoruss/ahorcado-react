import ReactCanvasConfetti from "react-canvas-confetti";

export default function Confetti({ fire }: any) {
  return (
    <ReactCanvasConfetti
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
      fire={fire}
    />
  );
}
