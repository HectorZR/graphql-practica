'use strict'
// Configura los resolvers

const courses = [
  {
    _id: 'anyID',
    title: 'algun titulo',
    teacher: 'Algun profesor',
    description: 'alguna descripcion',
    topic: 'algun topico'
  },
  {
    _id: 'anyID2',
    title: 'algun titulo 2',
    teacher: 'Algun profesor',
    description: 'alguna descripcion',
    topic: 'algun topico'
  },
  {
    _id: 'anyID3',
    title: 'algun titulo 3',
    teacher: 'Algun profesor',
    description: 'alguna descripcion',
    topic: 'algun topico'
  },
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
};