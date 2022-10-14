import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchPuppyById, deletePuppyById } from "../ajaxHelpers/puppies";
import styles from "../styles/SinglePlayer.module.css";

function SinglePlayer() {
  const navigate = useNavigate();

  const { playerId } = useParams();

  const [SinglePlayer, setSinglePlayer] = useState({});

  useEffect(() => {
    async function getPuppyById() {
      const puppy = await fetchPuppyById(playerId);
      console.log(puppy)
      setSinglePlayer(puppy.data.player);
    }

    getPuppyById();
  }, []);

  async function handleDelete() {
    const result = await deletePuppyById(SinglePlayer.id);
    console.log(result);
    navigate("/");
  }

  return (
    <div className={styles.background}>
      <img src={SinglePlayer.imageUrl} />
      <h4>{SinglePlayer.name}</h4>
      <h4>{SinglePlayer.breed}</h4>
      <button onClick={handleDelete}>Delete Puppy</button>
    </div>
  );
}
export default SinglePlayer;
