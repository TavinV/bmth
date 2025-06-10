import PropTypes from 'prop-types';

const HeroSection = ({ backgroundVideo, logo, subtitle, buttons }) => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center relative">
      {/* Vídeo de fundo */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover brightness-30"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-0">
        <img
          src={logo}
          className="w-full max-w-md px-4 sm:max-w-xl md:max-w-2xl mix-blend-difference drop-shadow-bmth-light"
          alt="Bring Me The Horizon Logo"
        />

        <p className="text-xl sm:text-2xl text-white mt-6 mb-8 text-center px-4">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md px-4">
          {buttons.map((button, index) => (
            <button.component
              key={index}
              label={button.label}
              onClick={button.onClick}
              type={button.type}
              className={`w-full sm:w-auto ${button.className || ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  backgroundVideo: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      type: PropTypes.string,
      className: PropTypes.string
    })
  ).isRequired
};

export default HeroSection;