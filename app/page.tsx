import Link from "next/link";

import { FeatureCard } from "@/components/featureCard";
import { features } from "@/data/feature";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Gestión Integral de Ventas</h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          Sistema completo para administrar pedidos, clientes, productos y
          localidades. Diseñado para optimizar tu proceso de ventas.
        </p>
      </div>

      {/* Features */}
      <div className="mt-16 grid cursor-pointer grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Link key={feature.href} href={feature.href}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
