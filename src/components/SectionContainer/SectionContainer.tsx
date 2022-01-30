import './SectionContainer.scss';

type Props = {
    children: React.ReactNode,
  }

const SectionContainer = ({ children }: Props) => {
    return (
        <section className="section-container">
            {children}
        </section>
    );
};

export default SectionContainer;