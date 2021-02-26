import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/31583703?s=460&u=39fcc83732de56a95e5a198c1beed327be4bf427&v=4" alt="Gutemberg Dev" />
      <div>
        <strong>Gutemberg Cruz</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
        Level 7
        </p>
      </div>
    </div>
  )
}