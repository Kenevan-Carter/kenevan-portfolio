import "./RainEffect.css";

function RainEffect() {
  const drops = Array.from({ length: 80 });

  return (
    <div className="rain-container">
      {drops.map((_, index) => (
        <span
          key={index}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.7 + Math.random() * 0.8}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: `${0.25 + Math.random() * 0.5}`,
          }}
        />
      ))}
    </div>
  );
}

export default RainEffect;