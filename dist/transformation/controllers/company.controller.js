"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_transformation_service_1 = __importDefault(require("../services/data-transformation.service"));
class CompanyController {
    /**
     * transform company xml to json
     * @param req - pass
     * @param res
     */
    getCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield data_transformation_service_1.default.xml2json(req.body.xml);
            if (json) {
                res.status(200).send(json);
            }
            else {
                // should never reach out here unless something wrong with `xml2js` or company xml format error
                const error = { error: '400', error_description: 'xml transformation error' };
                res.status(400).send(error);
            }
        });
    }
    /**
     * get remove xml file
     * @param req
     * @param res
     * @param next
     */
    requestXMLFile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const xml = yield data_transformation_service_1.default.getXMLFile(req.params.id);
            if (xml) {
                req.body.xml = xml;
                next();
            }
            else {
                const error = { error: '404', error_description: 'Not Found' };
                res.status(404).send(error);
            }
        });
    }
}
exports.default = new CompanyController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHJhbnNmb3JtYXRpb24vY29udHJvbGxlcnMvY29tcGFueS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEdBQTJFO0FBRzNFLE1BQU0saUJBQWlCO0lBQ25COzs7O09BSUc7SUFDRyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQ0FBb0IsQ0FBQyxRQUFRLENBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4RSxJQUFHLElBQUksRUFBQztnQkFDSixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDSCwrRkFBK0Y7Z0JBQy9GLE1BQU0sS0FBSyxHQUFVLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQywwQkFBMEIsRUFBQyxDQUFBO2dCQUNqRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtRQUNMLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0csY0FBYyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDeEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxxQ0FBb0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ25CLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsTUFBTSxLQUFLLEdBQVUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBQyxDQUFBO2dCQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=