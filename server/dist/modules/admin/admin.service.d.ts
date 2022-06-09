import { Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<AdminEntity>);
}
