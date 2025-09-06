import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import fs from 'fs';

// declare const process: any;

const prisma = new PrismaClient();


async function addAdmin() {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminRole = process.env.ADMIN_ROLE || "ADMIN";

  if (!adminUsername || !adminPassword) {
    console.warn("⚠️  Skipping admin creation: ADMIN_USERNAME or ADMIN_PASSWORD not set in .env");
    return;
  }

  // Hash the password
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { username: adminUsername },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        username: adminUsername,
        passwordHash,
        userAuthToken: crypto.randomUUID(),
        role: adminRole,
      },
    });
    console.log(`✅ Admin user '${adminUsername}' created`);
  } else {
    console.log(`ℹ️ Admin user '${adminUsername}' already exists, skipping seed`);
  }
}


async function addRecipes() {
  // Read JSON file
  const recipesData = JSON.parse(
    fs.readFileSync('prisma/recipes.json', 'utf-8')
  );

  for (const recipe of recipesData) {
    await prisma.recipe.create({
      data: {
        name: recipe.name,
        source: recipe.source,
        steps: JSON.stringify(recipe.steps),
        ingredients: JSON.stringify(recipe.ingredients), // store as string
        tags: recipe.tags,               // store as string
        image: recipe.image,
        portions: recipe.portions,
        preptime: recipe.preptime,
        cooktime: recipe.cooktime,
        rating: recipe.rating,
        tools: JSON.stringify(recipe.tools),             // store as string
        proteins: recipe.proteins,
        calories: recipe.calories,
        carbs: recipe.carbs,
        fats: recipe.fats,
        addedByUser: recipe.addedByUser
      }
    });
  }

  console.log('✅ Recipes seeded');
  
}


async function main() {
  await addAdmin();
  await addRecipes();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
