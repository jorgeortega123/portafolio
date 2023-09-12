import React from 'react';


const Stars: React.FC = () => {
  const starsCount = 100;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < starsCount; i++) {
      const size = Math.random() * 3 + 1; // Tamaño aleatorio entre 1 y 4
      const duration = Math.random() * 9 + 4; // Duración aleatoria entre 0.5 y 2 segundos
      const delay = Math.random() * 5; // Retardo aleatorio entre 0 y 0.2 segundos
      const top = Math.random() * 100; // Posición vertical aleatoria
      const left = Math.random() * 100; // Posición horizontal aleatoria

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            top: `${top}%`,
            left: `${left}%`,
          }}
        ></div>
      );
    }

    return stars;
  };

  return <div className="star-container z-[0]">{renderStars()}</div>;
};

export default Stars;
