import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  if (props.userSearchResults) {
    return (
      <div className={styles.TrackList}>
        {props.userSearchResults.map((track) => (
          <Track
            track={track}
            key={track.id}
            isRemoval={props.isRemoval}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        ))}
      </div>
    );
  }
}

export default Tracklist;