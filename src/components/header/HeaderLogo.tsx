import Link from "next/link";
import styles from "./Header.module.css";

interface LogoProps {
  logoImg?: string;
}
export default function Logo({
  logoImg = "/images/Logo-Large/Size=Large.svg",
}: LogoProps) {
  return (
    <Link href="/">
      <img className={styles.logo} src={logoImg} />
    </Link>
  );
}
