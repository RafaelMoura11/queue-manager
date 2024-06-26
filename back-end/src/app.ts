import * as express from 'express';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }

  public use(route: express.Router | express.ErrorRequestHandler, routeName?: string): void {
    if (routeName) {
      this.app.use(routeName, route);
    } else {
      this.app.use(route);
    }
  }

  public post(route: string, handler: express.RequestHandler): void {
    this.app.post(route, handler);
  }
}
