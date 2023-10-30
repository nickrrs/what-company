import { Request, Response, response } from "express";
import axios from 'axios';
import cheerio from 'cheerio';

export default class CompanyService {
    
    constructor(){}
    
    public async scrapeCompany(req: Request, res: Response) {
        try {
          let keyword = req.query?.keyword ? req.query?.keyword?.toString() : '';

          const response = await axios.get('https://www.google.com/search?client=opera-gx&q=company+glassdoor');

          if(response.data.length == 0) throw new Error("Erro ao trazer infos da empresa");
          
          console.log(response.data);
        //   const $ = cheerio.load(response.data);
      
        //   const title = $('h1').text();
        //   const paragraphs = $('p').map((_, element) => $(element).text()).get();
      
        //   console.log('Título da página:', title);
        //   console.log('Parágrafos da página:', paragraphs);
        } catch (error) {
          console.error('Ocorreu um erro ao fazer o scraping:', error);
        }
      }
}