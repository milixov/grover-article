import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
}

const MainLayout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <header>"The New Yok Times" Article Application</header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
