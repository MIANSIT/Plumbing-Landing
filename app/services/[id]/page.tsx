import { ServiceDetailsdata } from "../../components/data/ServiceDetailsdata";
import ServiceDetailsCard from "../../components/ui/ServiceDetailsCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  if (!Array.isArray(ServiceDetailsdata)) {
    return notFound();
  }

  const detail = ServiceDetailsdata.find((item) => item.id === decodedId);

  if (!detail) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-blue-900 mb-10">{detail.id}</h1>
      <ServiceDetailsCard service={detail} />
    </main>
  );
}