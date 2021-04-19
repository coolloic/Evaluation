"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
const config = __importStar(require("../../config.json"));
const xml2js_1 = require("xml2js");
class DataTransformationService {
    /**
     * transform xml to json
     * @param xml
     */
    xml2json(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                xml2js_1.parseString(xml, { explicitArray: false }, function (error, result) {
                    error ? resolve(null) : resolve(result === null || result === void 0 ? void 0 : result.Data);
                });
            });
        });
    }
    ;
    /**
     * get company xml file from curl
     * @param id - company id
     */
    getXMLFile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${config.xmlBaseUrl}/${id}.xml`;
            return new Promise(resolve => {
                axios_1.default.get(url).then(res => {
                    resolve(res.data);
                }).catch(error => {
                    resolve(null);
                });
            });
        });
    }
}
exports.default = new DataTransformationService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10cmFuc2Zvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHJhbnNmb3JtYXRpb24vc2VydmljZXMvZGF0YS10cmFuc2Zvcm1hdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQiwwREFBNEM7QUFDNUMsbUNBQXFDO0FBRXJDLE1BQU0seUJBQXlCO0lBQzNCOzs7T0FHRztJQUNHLFFBQVEsQ0FBSSxHQUFXOztZQUN6QixPQUFPLElBQUksT0FBTyxDQUFXLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3JDLG9CQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQVMsS0FBSyxFQUFFLE1BQU07b0JBQzdELEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxPQUFPLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNHLFVBQVUsQ0FBQyxFQUFVOztZQUN2QixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxNQUFNLENBQUE7WUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQSxFQUFFO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBLEVBQUU7b0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQTtZQUNQLENBQUMsQ0FBQyxDQUFBO1FBRU4sQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLHlCQUF5QixFQUFFLENBQUMifQ==