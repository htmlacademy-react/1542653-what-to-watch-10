import Logo from '../../components/logo/logo';

const UnexistScreen = (): JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo isLightLogo={false}/>

      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>

    <div className="user-page__content">
      <div className="unexist-screen-message-wrapper">
        <p className="unexist-screen-message">
          Sorry, we couldn&apos;t find this page {':('}
        </p>
        <a href="main.html" className="back-to-main__link"> Back to main</a>
      </div>
    </div>

    <footer className="page-footer">
      <Logo isLightLogo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default UnexistScreen;
