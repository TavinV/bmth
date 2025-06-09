import Header from '../Components/Header'
import bmthBg from '../assets/bmth.mp4';
import BMTHMetalLogo from '../assets/BMTH-METAL-LOGO.png';
import HeroButton from '../Components/HeroButton';
import Footer from '../Components/Footer';
import thatsTheSpiritAlbumCover from '../assets/thats-the-spirit.png';
import albuns from '../lib/Discografia';
import MusicCard from '../Components/MusicCard';
const thatsTheSpiritAlbum = albuns.find(album => album.nome === "That's the Spirit");

function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Container principal com scroll */}
      <main className="relative "> {/* Ajuste conforme altura do header */}
        {/* Seção do vídeo - posicionada fixa atrás do conteúdo */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video
            className="w-full h-full object-cover brightness-10"
            src={bmthBg}
            autoPlay
            loop
            muted
          />
        </div>

        {/* Conteúdo principal - ocupa espaço e permite scroll */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center px-4 sm:px-0">
            <img
              src={BMTHMetalLogo}
              className="w-full max-w-md px-4 sm:max-w-xl md:max-w-2xl"
              alt="Bring Me The Horizon Logo"
            />

            <p className="text-xl sm:text-2xl text-white mt-6 mb-8 text-center px-4">
              Bring me the horizon (genuinamente muito boa)
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md px-4">
              <HeroButton
                label="Discografia"
                onClick={() => console.log('Button clicked!')}
                type="a"
                className="w-full sm:w-auto"
              />
              <HeroButton
                label="Sobre"
                onClick={() => console.log('Button clicked!')}
                type="b"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen w-full text-black bg-white flex-col items-center justify-center py-16 px-4 sm:px-0">
          <h1 className='text-center text-8xl'>That's the Spirit</h1>
          <h2 className='text-center text-2xl'>2015</h2>
          <div className="flex w-full flex-wrap justify-center items-center gap-1 mt-16">
            {
              thatsTheSpiritAlbum.musicas.map((musica, index) => (
                <MusicCard
                  key={index}
                  nome={musica.nome}
                  duracao={musica.duracao}
                  spotify={musica.spotify}
                  albumCover={thatsTheSpiritAlbumCover}
                />
              ))
            }
          </div>
        </section>
      </main>

      {/* Footer que só aparece com scroll */}
      <Footer />
    </div>
  )
}

export default Home