import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/waken-wa-logo.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.heroLogo} src={logoUrl} alt="Waken-Wa Logo" />
        <p className={styles.eyebrow}>
          <Translate id="homepage.eyebrow" description="Homepage eyebrow">
            Waken-Wa 文档
          </Translate>
        </p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tagline"
            description="Homepage subtitle for the Waken-Wa documentation site">
            Waken-Wa 使用文档与配置指南
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/get-start/start">
            <Translate id="homepage.cta" description="Homepage call to action">
              进入文档
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'homepage.description',
        message: 'Waken-Wa 使用文档与配置指南',
        description: 'Homepage meta description',
      })}>
      <HomepageHeader />
      <main />
    </Layout>
  );
}
