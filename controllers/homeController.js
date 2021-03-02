export class HomeController {
  async index(req, res) {
    res.status(200).send({
      _links: {
        self: { href: `${req.originalUrl}` },
        catches: { href: `${req.originalUrl}/catches` },
        register: { href: `${req.originalUrl}/register` },
        authentication: { href: `${req.originalUrl}/login` }
      }
    })
  }
}
