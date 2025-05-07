import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <Tracklist userSearchResults={props.playlistTracks} />
      <button className={styles["Playlist-save"]}>
        SAVE PLAYLIST
      </button>
    </div>
  );
}

export default Playlist;