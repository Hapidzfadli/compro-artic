import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { ServiceCard } from "@/components/common/service-card";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="bg-artic-surface py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="text-center">
          <SectionLabel className="text-artic-teal-dark">
            Our Service
          </SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-ebony md:text-headline-h3">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mobile-body-md text-artic-grey-400 md:text-body-md">
            We make data, research, and strategy work for you. Here&apos;s how we
            help you understand people, see clearer, and make better decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* First row - larger cards */}
          <ServiceCard
            title={SERVICES[0].title}
            description={SERVICES[0].description}
            image={SERVICES[0].defaultImage}
            className="sm:col-span-2 lg:col-span-2"
          />
          {SERVICES.slice(1, 5).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.defaultImage}
            />
          ))}
        </div>

        {/* Second row - remaining cards */}
        {SERVICES.length > 5 && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(5).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.defaultImage}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
