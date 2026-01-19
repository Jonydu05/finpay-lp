import Section from './components/ui/Section';

export default function Home() {
  return (
    <>
      <Section containerClassName='flex gap-4 items-start'>
        <div id='home'>
          <h1 className='text-4xl font-semibold mb-4'>
            <span className='font-extrabold'>Get paid early </span>
            save automatically all your pay
          </h1>
          <p className='text-gray-500'>
            Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
          </p>
        </div>
        <div></div>
      </Section>

      <Section sectionClassName='min-h-screen'>
        <div id='products'>Products Section</div>
      </Section>

      <Section sectionClassName='min-h-screen'>
        <div id='customers'>Customers Section</div>
      </Section>

      <Section sectionClassName='min-h-screen'>
        <div id='pricing'>Pricing Section</div>
      </Section>

      <Section sectionClassName='min-h-screen'>
        <div id='learn'>Learn Section</div>
      </Section>
    </>
  );
}
