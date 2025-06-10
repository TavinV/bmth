import PropTypes from 'prop-types';
import MusicCard from './MusicCard';

const AlbumSection = ({ title, year, albumCover, songs }) => {
  return (
    <section className="min-h-screen w-full text-black bg-white flex-col items-center justify-center py-16 px-4 sm:px-0">
      <h1 className='text-center text-4xl md:text-6xl lg:text-8xl'>{title}</h1>
      <h2 className='text-center text-xl md:text-2xl'>{year}</h2>
      
      <div className="flex w-full flex-wrap justify-center items-center gap-4 mt-16">
        {songs.map((song, index) => (
          <MusicCard
            key={index}
            nome={song.nome}
            duracao={song.duracao}
            spotify={song.spotify}
            albumCover={albumCover}
          />
        ))}
      </div>
    </section>
  );
};

AlbumSection.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      duracao: PropTypes.string.isRequired,
      spotify: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AlbumSection;