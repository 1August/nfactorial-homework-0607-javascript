import dFactorial, {dFactorialCopy2 as dFact2, dFact} from "./dFactorial.js"

// Типо ДалидаФакториал пхпхпх
let student1 = {
    studentId: 60_239,
    name: 'John',
    groupNumber: 2014,
    subjects: ['Math', 'Psycho', 'Java']
}
console.log('Add one student. Number of students:', dFactorial.addStudentInfo(student1))


student1 = {
    studentId: 60_237,
    name: 'Stephany',
    subjects: ['Algorithms', 'PL/SQL', 'Physics']
}

const student2 = {
    studentId: 60_238,
    name: 'Ray',
    groupNumber: 2014,
    subjects: ['Algorithms', 'Python', 'JavaScript']
}
dFactorial.addStudents(student1, student2)
console.log('Add two or more students', dFactorial.getStudents())

console.log('Get students info with subject \'Math\':', dFactorial.getStudentsInfoBySubject('Math'))

console.log('Teachers with name Askar:', dFactorial.getTeachersByName('Askar'))

delete dFactorial.students[4]['groupNumber']
console.log('Deleted \'group number\' field from student Aidana')
console.log('Student has field \'groupNumber\'', dFactorial.studentHasField('Aidana', 'groupNumber'))

delete dFactorial.teachers[0]
console.log('Deleted first teacher', dFactorial.getTeachers())
console.log('Use slice method for students. Get first 2 students:', dFactorial.students.slice(0, 2))


const smthOrNull = obj => obj ?? null

console.log('Send something or get null:', smthOrNull(null))
console.log('Send something or get null:', smthOrNull('dwadaw'))


const is2Equal = (arg1, arg2) => arg1 == arg2
const is3Equal = (arg1, arg2) => arg1 === arg2

console.log('Is 2 == \'2\'?', is2Equal(2, '2'))
console.log('Is 2 === \'2\'?', is3Equal(2, '2'))