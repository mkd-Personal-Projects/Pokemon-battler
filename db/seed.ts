import client from './client';
import { categories } from './data/categories';

import { snacks } from './data/snacks';

const seed = async () => {
  await client.snack.deleteMany();
  await client.category.deleteMany();

  await client.category.createMany({ data: categories });
  await client.snack.createMany({ data: snacks });

  console.log('all seeded a ok');
};

seed();
