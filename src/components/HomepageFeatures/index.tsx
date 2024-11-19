import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simplify Monitoring and Problem Resolution',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       With Gita, you get a powerful solution for incident management, data collection, and real-time health monitoring, all in an intuitive interface. Discover the key features that make Gita indispensable for your Kubernetes infrastructure.
      </>
    ),
  },
  {
    title: 'Automatic Data Collection',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Gita automatically collects logs, metrics, and pod/container statuses, providing a clear view of critical events and the overall behavior of your cluster.
      </>
    ),
  },
  {
    title: 'Real-Time Alerts',
    // Svg: "",
    description: (
      <>
        Set up real-time alerts for events and incidents, receiving notifications via email, Slack, or other channels, before issues escalate into critical problems.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
