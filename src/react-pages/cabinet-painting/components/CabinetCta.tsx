import AreaContactSection from "@/components/feature/AreaContactSection";

export default function CabinetCta() {
  return (
    <AreaContactSection
      city="Cabinet Painting"
      sourcePage="cabinet-painting"
      description="Get a free cabinet painting estimate from Hawaii Painters 808. Our team will inspect your cabinets personally and have a detailed quote to you within 24 hours."
      trustItems={[
        "Licensed & Insured in Hawaii",
        "1-Year Workmanship Warranty",
        "5-Star Rated on Google & Yelp",
        "Factory-Smooth Spray Finish",
        "Free On-Site Estimate",
      ]}
    />
  );
}
