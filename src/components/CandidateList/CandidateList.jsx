import styles from "../CandidateList/CandidateList.module.css";
import CandidateItem from "../CandidateItem/CandidateItem";

export default function CandidateList({ candidatos, removeCandidato }) {
  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.header}>Candidatos</div>
      </div>

      {candidatos.map((candidato) => (
        <CandidateItem
          id={candidato.id}
          candidato={candidato}
          removeCandidato={removeCandidato}
        />
      ))}
    </>
  );
}
