import { ServiceDetailsdata } from "../../components/data/ServiceDetailsdata";
import ServiceDetailsCard from "../../components/ui/ServiceDetailsCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;

  const service = ServiceDetailsdata.find(
    (item) => item.id === id
  );

  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            {service.id.replace(/-/g, " ")}
          </h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Service Details Card */}
        <ServiceDetailsCard service={service} />
      </div>
    </main>
  );
}