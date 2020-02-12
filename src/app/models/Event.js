import Sequelize, { Model } from 'sequelize'

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        local: Sequelize.STRING,
        date: Sequelize.DATE,
        description: Sequelize.TEXT('tiny'),
      },
      { sequelize }
    )

    return this
  }
}

export default Event
