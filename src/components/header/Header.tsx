import styles from "./Header.module.css";
import Logo from "./HeaderLogo";
export default function Header() {
  return (
    <>
      <div className={styles.header + " " + styles.web}>
        <Logo />
      </div>
      <div className={styles.header + " " + styles.tablet}>
        <Logo />
      </div>
      <div className={styles.header + " " + styles.mobile}>
        <Logo logoImg="/images/Logo-small/Size=Small.svg" />
      </div>
    </>
  );
}
