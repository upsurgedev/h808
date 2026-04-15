import AreaContactSection from "@/components/feature/AreaContactSection";

export default function CommercialCta() {
  return (
    <AreaContactSection
      city="Commercial Painting"
      sourcePage="commercial-painting"
      description="Get a free commercial estimate from Hawaii Painters 808. Our team will visit your property, assess every surface, and deliver a detailed quote within 24 hours — scheduled around your business."
      trustItems={[
        "Licensed & Insured in Hawaii",
        "Minimal Business Disruption",
        "5-Star Rated on Google & Yelp",
        "Sherwin-Williams Duration Paint",
        "Free On-Site Estimate",
      ]}
    />
  );
}
