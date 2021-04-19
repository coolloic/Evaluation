import {CommonRoutesConfig} from '../common/common.routes.config';
import CompanyController from './controllers/company.controller';
import express from 'express';

export class CompanyRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CompanyRoutes');
    }

    // configure the company route
    configureRoutes() {
        this.app.route(`/companies/:id`)
            .all(CompanyController.requestXMLFile)
            .get(CompanyController.getCompany)
        return this.app;
    }
}
