import { DataSource } from "typeorm"

const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'swagatham',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '../migrations/*.{.ts,.js}']
})

export default appDataSource