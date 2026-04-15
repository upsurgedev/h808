import AreaContactSection from "@/components/feature/AreaContactSection";

export default function ResidentialCta() {
  return (
    <AreaContactSection
      city="Residential Painting"
      sourcePage="residential-painting"
      description="Get a free, no-obligation estimate from Hawaii Painters 808. Our team will visit your home personally, assess every room and surface, and have a detailed quote to you within 24 hours."
      trustItems={[
        "Licensed & Insured in Hawaii",
        "1-Year Workmanship Warranty",
        "5-Star Rated on Google & Yelp",
        "Sherwin-Williams Duration Paint",
        "Free On-Site Estimate",
      ]}
    />
  );
}
