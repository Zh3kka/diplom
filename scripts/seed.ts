const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Искусственный интеллект' },
        { name: 'Программирование' },
        { name: 'Музыка' },
        { name: '1С' },
        { name: 'Техника безопасности' },
        { name: 'Бухгалтерия' },
        { name: 'Английский язык' },
        { name: 'Спорт' },
      ],
    })

    console.log('Успешно')
  } catch (error) {
    console.error('Ошибка отправки данных в базу данных', error)
  } finally {
    await database.$disconnect()
  }
}

main()
