import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image, backgroundKey }: HeroProps) => {
  const id = 'heroOne';
  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={true} backgroundKey={backgroundKey} containerClass={''}>
      <section id="heroOne" className="bg-primary-50 bg-opacity-90 dark:bg-slate-800 dark:bg-opacity-80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-800 dark:text-primary-600">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-6 text-xl font-normal text-gray-800 dark:text-slate-200">{subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn bg-cyan-500 hover:bg-cyan-500 text-white font-bold border-cyan-700 hover:border-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-white  dark:border-cyan-700 dark:hover:border-cyan-500 py-2 px-4 border-b-4 rounded-lg" />}
                  {callToAction2 && <CTA callToAction={callToAction2} 
                  linkClass="btn bg-violet-500 hover:bg-violet-500 border-b-4 border-violet-800 hover:border-violet-500 text-white dark:bg-violet-500 dark:hover:bg-violet-500 dark:border-b-4 dark:border-violet-800 dark:hover:border-violet-500 dark:text-white font-bold px-4 py-2 rounded-lg" />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default Hero;
