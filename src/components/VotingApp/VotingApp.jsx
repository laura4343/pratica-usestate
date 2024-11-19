import styles from "../VotingApp/VotingApp.module.css";
import { useState } from "react";

import CandidateForm from "../CandidateForm/CandidateForm";
import CandidateList from "../CandidateList/CandidateList";
// import VotesSummary from "../VotesSummary/VoteSummary";

export default function VotingApp() {
  const [candidatos, setCandidatos] = useState([]);

  const addCandidato = (text) => {
    const candidatoNovo = {
      id: Date.now(),
      nome: text,
    };

    setCandidatos(candidatos.concat(candidatoNovo));
  };

  const removeCandidato = (candidatoId) => {
    const candidatos = candidatos.filter(
      (candidato) => candidato.id !== candidatoId
    );
    setCandidatos(candidatos);
  };

  return (
    <>
      <div className={styles.appContainer}>
        <h2 className={styles.header}>App Votos</h2>

        <CandidateForm addCandidato={addCandidato}></CandidateForm>
        <CandidateList
          candidatos={candidatos}
          removeCandidato={removeCandidato}
        ></CandidateList>

        {/* <VotesSummary></VotesSummary> */}
      </div>
    </>
  );
}
