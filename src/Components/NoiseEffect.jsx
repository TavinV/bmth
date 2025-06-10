import './NoiseEffect.css'; // Crie este arquivo CSS

const NoiseEffect = () => {
  return (
    <div className="noise-effect" 
         style={{
           '--noise-opacity': 0.08, // Ajuste a opacidade aqui
           '--noise-blend-mode': 'overlay' // Experimente: overlay, multiply, screen
         }}>
    </div>
  );
};

export default NoiseEffect;