import styles from './Footer.module.scss';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <footer className={styles.footer}>
      <p>{t("description")}</p>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">
          EN
        </option>
        <option value="vn">
          VN
        </option>
      </select>
    </footer>
  )
}

export default Footer;