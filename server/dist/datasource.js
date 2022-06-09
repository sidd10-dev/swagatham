"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const appDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'swagatham',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../migrations/*.{.ts,.js}']
});
exports.default = appDataSource;
//# sourceMappingURL=datasource.js.map