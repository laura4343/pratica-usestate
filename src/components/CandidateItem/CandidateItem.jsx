import styles from "../CandidateItem/CandidateItem.module.css";
import { useState } from "react";

export default function CandidateItem({ id, candidato }) {
  const [quantidadeVotos, setquantidadeVotos] = useState(0);

  return (
    <>
      <div className={styles.candidatoItem}>
        <p>{candidato.nome}</p>
        <p>Votos: {quantidadeVotos}</p>

        <button
          className={styles.botaoVotar}
          onClick={() => {
            setquantidadeVotos(+quantidadeVotos + 1);
          }}
        >
          Votar
        </button>

        <button>X</button>
      </div>
    </>
  );
}
