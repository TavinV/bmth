import HeroSection from '../Components/HeroSection';
import AlbumSection from '../Components/AlbumSection';
import MainLayout from '../Components/MainLayout';
import HeroButton from '../Components/HeroButton';

import bmthBg from '../assets/bmth.mp4';
import BMTHMetalLogo from '../assets/BMTH-METAL-LOGO.png';
import thatsTheSpiritAlbumCover from '../assets/thats-the-spirit.png';
import albuns from '../lib/Discografia';

function Home() {
  const thatsTheSpiritAlbum = albuns.find(album => album.nome === "That's the Spirit");

  const heroButtons = [
    {
      component: HeroButton,
      label: "Discografia",
      onClick: () => console.log('Discografia clicked!'),
      type: "a"
    },
    {
      component: HeroButton,
      label: "Sobre",
      onClick: () => console.log('Sobre clicked!'),
      type: "b"
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        backgroundVideo={bmthBg}
        logo={BMTHMetalLogo}
        subtitle="Bring me the horizon (genuinamente muito boa)"
        buttons={heroButtons}
      />

      <AlbumSection
        title="That's the Spirit"
        year="2015"
        albumCover={thatsTheSpiritAlbumCover}
        songs={thatsTheSpiritAlbum.musicas}
      />
    </MainLayout>
  );
}

export default Home;
