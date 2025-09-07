import {
  MapPin,
  Package,
  ShoppingCart,
  Store,
  Users,
  UsersRound,
  Caravan,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const features: Feature[] = [
  {
    href: "/orders",
    icon: ShoppingCart,
    title: "Gestión de Ventas",
    description:
      "Formulario multipaso para crear pedidos con captura de datos del cliente, productos y información de pago y logística.",
  },
  {
    href: "/customers",
    icon: Users,
    title: "Base de Clientes",
    description:
      "Administra la información de tus clientes para evitar duplicados y agilizar el proceso de creación de pedidos.",
  },
  {
    href: "/products",
    icon: Package,
    title: "Catálogo de Productos",
    description:
      "Gestiona tu inventario con historial de precios y costos por país. Mantén un registro auditable de cambios.",
  },
  {
    href: "/locations",
    icon: MapPin,
    title: "Gestión de Localidades",
    description:
      "Administra países, estados y ciudades para mantener la integridad de los datos de ubicación.",
  },
  {
    href: "/sellers",
    icon: UsersRound,
    title: "Gestión de Vendedores",
    description:
      "Administra la información de tus vendedores para evitar duplicados y agilizar el proceso de creación de pedidos.",
  },
  {
    href: "/carries",
    icon: Caravan,
    title: "Gestión de Transportistas",
    description:
      "Administra la información de tus transportistas para controlar las fechas de entrega y confiabilidad.",
  },
  {
    href: "/channel",
    icon: Store,
    title: "Gestión de Canales",
    description: "Administra la información de tus Canales.",
  },
];
