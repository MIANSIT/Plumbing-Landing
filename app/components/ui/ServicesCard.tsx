import Image from "next/image";

interface CardProps {
  icon: string;
  heading: string;
  details: string;
  more: string;
}

export default function ServiceCard({ icon, heading, details, more }: CardProps) {
  return (
    <div className="group relative h-72 flex flex-col overflow-hidden rounded-3xl shadow-md hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer">

      {/* Background image */}
      <Image
        src={icon}
        alt={heading}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Permanent bottom gradient with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Always-visible title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 transition-transform duration-500 group-hover:-translate-y-16">
        <h3 className="text-white font-black text-xl tracking-tight drop-shadow-lg">
          {heading}
        </h3>
        <div className="h-0.5 w-10 bg-orange-500 mt-2 rounded-full transition-all duration-500 group-hover:w-16" />
      </div>

      {/* Hover overlay — slides up */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-3 bg-gradient-to-t from-blue-950/95 to-blue-900/80 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-white font-black text-xl tracking-tight mb-1">
          {heading}
        </h3>
        <div className="h-0.5 w-10 bg-orange-500 rounded-full mb-3" />
        <p className="text-blue-100 text-sm leading-relaxed mb-4 line-clamp-3">
          {details}
        </p>
        <a
          href="tel:01793229730"
          className="
            inline-flex items-center gap-2
            px-5 py-2.5 rounded-xl
            bg-orange-500 hover:bg-orange-400
            text-white font-bold text-sm
            shadow-lg shadow-orange-500/30
            active:scale-95 transition-all duration-200
          "
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {more}
        </a>
      </div>

    </div>
  );
}