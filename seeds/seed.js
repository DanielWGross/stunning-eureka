const sequelize = require('../config/connection');
const { Book, User } = require('../models');
const bookSeeds = require('./bookSeeds');
const userSeeds = require('./userSeeds');

(async function seedDatabase() {
  console.log('🌱: 📀 Dropping DB Tables 📀');
  await sequelize.sync({ force: true });

  console.log('🌱: 👶 Creating Users From Seeds 👶');
  const userData = await User.bulkCreate(userSeeds);

  console.log('🌱: 📗 Creating Books From Seeds 📗');
  for (const book of bookSeeds) {
    await Book.create({
      ...book,
      UserId: userData[Math.floor(Math.random() * userData.length)].id,
    });
  }

  process.exit(0);
})();
