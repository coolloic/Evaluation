import express from 'express';
import dataTransformService from '../services/data-transformation.service';
import {Company, Error} from "../interface/company.interface";

class CompanyController {
    /**
     * transform company xml to json
     * @param req - pass
     * @param res
     */
    async getCompany(req: express.Request, res: express.Response) {
        const json = await dataTransformService.xml2json<Company>(req.body.xml);
        if(json){
            res.status(200).send(json);
        } else {
            // should never reach out here unless something wrong with `xml2js` or company xml format error
            const error: Error = {error: '400', error_description:'xml transformation error'}
            res.status(400).send(error);
        }
    }

    /**
     * get remove xml file
     * @param req
     * @param res
     * @param next
     */
    async requestXMLFile(req: express.Request, res: express.Response, next: express.NextFunction) {
        const xml = await dataTransformService.getXMLFile(req.params.id);
        if (xml) {
            req.body.xml = xml;
            next();
        } else {
            const error: Error = {error: '404', error_description: 'Not Found'}
            res.status(404).send(error);
        }
    }
}

export default new CompanyController();
