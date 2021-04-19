import axios from "axios";
import * as config from '../../config.json';
import { parseString } from "xml2js";

class DataTransformationService {
    /**
     * transform xml to json
     * @param xml
     */
    async xml2json<T>(xml: string) {
        return new Promise<T | null>((resolve) => {
            parseString(xml, { explicitArray: false }, function(error, result) {
                error ? resolve(null) :  resolve(result?.Data)
            });
        })
    };

    /**
     * get company xml file from curl
     * @param id - company id
     */
    async getXMLFile(id: string): Promise<any> {
        const url = `${config.xmlBaseUrl}/${id}.xml`
        return new Promise<string | null>(resolve => {
             axios.get(url).then(res=> {
                resolve(res.data);
            }).catch(error=> {
                resolve(null);
             })
        })

    }


}

export default new DataTransformationService();
