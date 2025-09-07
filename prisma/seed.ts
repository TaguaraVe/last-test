import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [
//   {
//     name: 'Alice',
//     email: 'alice@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Join the Prisma Discord',
//           content: 'https://pris.ly/discord',
//           published: true,
//         },
//         {
//           title: 'Prisma on YouTube',
//           content: 'https://pris.ly/youtube',
//         },
//       ],
//     },
//   },
//   {
//     name: 'Bob',
//     email: 'bob@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Follow Prisma on Twitter',
//           content: 'https://www.twitter.com/prisma',
//           published: true,
//         },
//       ],
//     },
//   },
// ];

// export async function main() {
//   for (const u of userData) {
//     await prisma.user.create({ data: u });
//   }
// }

// main();

async function main() {
  console.log("Comenzando el proceso de seed...");

  // Eliminar datos existentes para evitar duplicados en cada ejecución
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.seller.deleteMany({});

  // Crear un usuario de ejemplo
  const user1 = await prisma.user.create({
    data: {
      email: "juan.perez@example.com",
      name: "Juan Pérez",
    },
  });

  // Crear otro usuario para mostrar la relación
  const user2 = await prisma.user.create({
    data: {
      email: "ana.gomez@example.com",
      name: "Ana Gómez",
    },
  });

  // Crear otro usuario para mostrar la relación
  const user3 = await prisma.user.create({
    data: {
      email: "pedro.lopez@example.com",
      name: "Pedro Lopez",
    },
  });

  // Crear posts y asignarlos a los usuarios
  const post1 = await prisma.post.create({
    data: {
      title: "Mi primer post",
      content: "Este es el contenido de mi primer post.",
      published: true,
      authorId: user1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Un post sobre Prisma",
      content: "Prisma es un ORM increíble.",
      published: false,
      authorId: user1.id,
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: "Receta de cocina",
      content: "Cómo preparar la mejor lasaña.",
      published: true,
      authorId: user2.id,
    },
  });

  const post4 = await prisma.post.create({
    data: {
      title: "Crear aplicacion con Prisma",
      content:
        "Cómo pasar a producción una aplicación nexjs y prisma en vercel.",
      published: true,
      authorId: user3.id,
    },
  });

  console.log(`Creado post con ID: ${post1.id}`);
  console.log(`Creado post con ID: ${post2.id}`);
  console.log(`Creado post con ID: ${post3.id}`);
  console.log(`Creado post con ID: ${post4.id}`);

  // Crear registros para el modelo Seller
  const seller1 = await prisma.seller.create({
    data: {
      name: "Tech Solutions Inc.",
      phone: "555-123-4567",
      role: "Software Provider",
      email: "contacto@techsolutions.com",
    },
  });

  const seller2 = await prisma.seller.create({
    data: {
      name: "Creative Agency Ltd.",
      phone: "555-987-6543",
      role: "Marketing",
      email: "hola@creativeagency.com",
    },
  });

  console.log(`Creado seller con ID: ${seller1.id}`);
  console.log(`Creado seller con ID: ${seller2.id}`);

  console.log("Proceso de seed completado exitosamente.");
}

// Llamar a la función `main` y manejar errores
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Desconectar el cliente de Prisma
    await prisma.$disconnect();
  });
