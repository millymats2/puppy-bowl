import { getByDisplayValue } from "@testing-library/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPuppies } from "../ajaxHelpers/puppies";
import styles from "../styles/AllPlayers.module.css";

function AllPlayers() {
  const navigate = useNavigate();

  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    async function getAllPuppies() {
      const { data } = await fetchPuppies();
      setAllPlayers(data.players);
    }
    getAllPuppies();
  }, []);

  return (
    <div className={styles.background}>
      {allPlayers.map((puppy) => {
        return (
          <div className={styles.box} key={puppy.id}>
            <h6>{puppy.name}</h6>
            <h6>{puppy.breed}</h6>
            <img className={styles.img} src={puppy.imageUrl} />
            <button
              onClick={() => {
                navigate(`/allPlayers/${puppy.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlayers;
