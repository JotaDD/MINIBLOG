import loading from '../img/loading.svg'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="Loading" className={styles.loader} />
      <span className={styles.loading_span}>Carregando</span>
    </div>
  )
}

export default Loading