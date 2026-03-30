import { ServiceDetailsdata } from "../../components/data/ServiceDetailsdata";
import ServiceDetailsCard from "../../components/ui/ServiceDetailsCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  
  // Debug logs
  console.log("ServiceDetailsdata:", ServiceDetailsdata);
  console.log("Type of ServiceDetailsdata:", typeof ServiceDetailsdata);
  console.log("Is array?", Array.isArray(ServiceDetailsdata));
  console.log("Looking for id:", decodedId);

  // Check if it's an array before using .find
  if (!Array.isArray(ServiceDetailsdata)) {
    console.error("ServiceDetailsdata is not an array!");
    return notFound();
  }

  const detail = ServiceDetailsdata.find(
    (item) => item.id === decodedId
  );

  if (!detail) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-blue-900 mb-10">{detail.id}</h1>
      <ServiceDetailsCard
        image1={detail.image1}
        details1={detail.details1}
        image2={detail.image2}
        details2={detail.details2}
        image3={detail.image3}
        details3={detail.details3}
      />
    </main>
  );
}