import { prisma } from './generated/prisma-client'

async function main() {
  const correctAnswer1 = await prisma.createAnswer({ text: 'Xerox' })
  const correctAnswer2 = await prisma.createAnswer({ text: 'Both are good' })

  await prisma.createTest({
    name: 'IT',
    questions: {
      create: [
        {
          text: 'Which company invented the Graphical User Interface?',
          answers: {
            create: [{ text: 'Apple' }, { text: 'Microsoft' }, { text: 'HP' }],
            connect: { id: correctAnswer1.id }
          },
          correctAnswer: { connect: { id: correctAnswer1.id } }
        },
        {
          text: 'Which is better?',
          answers: {
            create: [{ text: 'Tabs' }, { text: 'Spaces' }],
            connect: { id: correctAnswer2.id }
          },
          correctAnswer: { connect: { id: correctAnswer2.id } }
        }
      ]
    }
  })
}

main()
