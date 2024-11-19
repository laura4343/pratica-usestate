import styles from "../CandidateForm/CandidateForm.module.css";
import { useState } from "react";

export default function CandidateForm({ addCandidato }) {
  const [nomeCandidato, setNomeCandidato] = useState("");
  return (
    <>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Adicione um candidato aqui"
          value={nomeCandidato}
          onChange={(e) => setNomeCandidato(e.target.value)}
        />

        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            if (nomeCandidato.trim() !== "") {
              addCandidato(nomeCandidato);
              setNomeCandidato("");
            }
          }}
        >
          Adicionar candidato
        </button>
      </div>
    </>
  );
}
