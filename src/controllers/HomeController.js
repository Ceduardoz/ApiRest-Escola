class HomeController {
  async index(req, res) {
    return res.json({
      ok: true,
      service: 'API REST Escola',
      status: 'running',
      timestamp: new Date().toISOString(),
    });
  }
}

export default new HomeController();
