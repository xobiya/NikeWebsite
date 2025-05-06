import { services } from "../Constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container py-16 flex justify-center flex-wrap gap-12 bg-light-gray rounded-[20px] shadow-lg">
      <h2 className="w-full text-center text-4xl font-palanquin font-bold text-dark-blue mb-10">
        Our Services
      </h2>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;