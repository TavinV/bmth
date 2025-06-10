import { AudioLines } from "lucide-react";

const MusicCard = ({ nome, duracao, spotify, albumCover }) => {
    return (
        <div className="bg-transparent text-black hover:scale-101 transition-all ease-in-out 400ms rounded shadow-xl relative flex-col h-auto p-4 m-2 w-full max-w-sm">
            <div className="w-full h-auto relative mb-4">
                <img src={albumCover} alt={nome + " album cover"} />
            </div>
            <div className="w-full mt-8 mb-8 flex justify-between">
                <h3 className="text-4xl text-center font-semibold mb-2">{nome}</h3>
                <div className="flex items-center gap-2 justify-center">
                    <h3 className="text-xl font-normal mb-2">{duracao}</h3>
                </div>
            </div>
            <a href={spotify}>
                <button className="bg-green-500 flex items-center justify-center gap-4 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 w-full">
                <AudioLines />
                    Ouvir no Spotify
                </button>
            </a>

        </div>
    );
}

export default MusicCard;