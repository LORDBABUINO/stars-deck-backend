import Event from '../models/Event'

class EventController {
  async index(req, res) {
    const { page = 1 } = req.query
    const events = await Event.findAll({
      order: ['date'],
      attributes: ['id', 'date', 'local', 'name', 'description'],
      limit: 20,
      offset: (page - 1) * 20,
    })
    return res.json(events)
  }

  async store(req, res) {
    const { name, date, local, description } = req.body

    const event = await Event.create({
      name,
      date,
      local,
      description,
    })
    return res.json(event)
  }
}

export default new EventController()
