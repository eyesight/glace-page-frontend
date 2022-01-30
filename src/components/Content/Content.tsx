import { forwardRef } from 'react';
import './Content.scss';

type content = {
    children: React.ReactNode,
  }

const Content = forwardRef<HTMLDivElement, content>(({ children }, ref) => {
    return (
        <main className="content" ref={ref}>
            {children}
        </main>
    );
});

export default Content;