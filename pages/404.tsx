import styles from '../styles/error.module.scss'


export default function Index() {
    return (
        <div className={styles.notFoundPage}>
            <h2 className={styles.notFoundMessage}>
                404 not found | There seems to be nothing here 
            </h2>
        </div>
    )
}