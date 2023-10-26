import { Router, Request, Response } from 'express';
import CompanyService from './company/company-service';

const route = Router();
const companyService = new CompanyService();

route.get('/company', async (req: Request, res: Response) => {
  try {
    const data = await companyService.scrapeCompany(req, res);
    return data;
  } catch (e) {
    console.error("Error while listing users:", e);
    return res.status(500).json({ error: "Error while listing users"});
  }
});

export { route };

