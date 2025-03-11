import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className={clsx('col col--4')}>
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <h3 className="text--center padding-horiz--md"><Translate>Alertas em tempo real</Translate>
            </h3>
            <p>
              <Translate>
                Configure alertas em tempo real para eventos e incidentes, recebendo notificações via e-mail, slack ou qualquer outro canal, antes que problemas escalem em eventos críticos.
              </Translate>
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <h3 className="text--center padding-horiz--md"><Translate>Coleta de dados automática</Translate>
            </h3>
            <p>
              <Translate>
              GITA coleta automaticamente logs, métricas e status de pods/containers, provendo uma clara visão de eventos críticos e do comportamento padrão do seu cluster.
              </Translate>
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <h3 className="text--center padding-horiz--md"><Translate>Monitoramento e resolução de problemas simplificados.</Translate>
            </h3>
            <p>
              <Translate>
                Com Gita, você obtém uma poderosa solução para gestão de incidentes, coleta de dados e monitoramento de saúde em tempo real, tudo em uma interface intuitiva. Descubra as principais funcionalidades que tornam o GITA indispensável para sua infraestrutura Kubernetes.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
