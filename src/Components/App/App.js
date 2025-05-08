import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: "example track name 1",
      artist: "example track artist 1",
      album: "example track album 1",
      id: 1,
    },
    {
      name: "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "example playlist name 1",
      artist: "example playlist artist 1",
      album: "example playlist album 1",
      id: 11,
    },
    {
      name: "example playlist name 2",
      artist: "example playlist artist 2",
      album: "example playlist album 2",
      id: 22,
    },
  ]);

  function addTrack(track) {
    if (playlistTracks.find((t) => t.id === track.id)) {
      alert("Track already exists");
    } else {
      setPlaylistTracks(playlistTracks.concat(track));
    }
  };

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
          
        <div className={styles['App-playlist']}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
