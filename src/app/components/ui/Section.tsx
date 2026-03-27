import React from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  containerClassName?: string;
  sectionClassName?: string;
};

export default function Section({
  children,
  containerClassName,
  sectionClassName,
  id,
}: Props) {
  return (
    <section className={'layout ' + (sectionClassName ?? '')} id={id}>
      <div className={'container ' + (containerClassName ?? '')}>
        {children}
      </div>
    </section>
  );
}
