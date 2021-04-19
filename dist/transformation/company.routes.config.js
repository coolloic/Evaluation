"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const company_controller_1 = __importDefault(require("./controllers/company.controller"));
class CompanyRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CompanyRoutes');
    }
    // configure the company route
    configureRoutes() {
        this.app.route(`/companies/:id`)
            .all(company_controller_1.default.requestXMLFile)
            .get(company_controller_1.default.getCompany);
        return this.app;
    }
}
exports.CompanyRoutes = CompanyRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHJhbnNmb3JtYXRpb24vY29tcGFueS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFrRTtBQUNsRSwwRkFBaUU7QUFHakUsTUFBYSxhQUFjLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUMzQixHQUFHLENBQUMsNEJBQWlCLENBQUMsY0FBYyxDQUFDO2FBQ3JDLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBWkQsc0NBWUMifQ==