import React from 'react';

type Props = {
  children: React.ReactNode;
  containerClassName?: string;
  sectionClassName?: string;
};

export default function Section({ children, containerClassName, sectionClassName }: Props) {
  return (
    <section className={'layout ' + (sectionClassName ? sectionClassName : '')}>
      <div className={'container ' + (containerClassName ? containerClassName : '')}>{children}</div>
    </section>
  );
}
