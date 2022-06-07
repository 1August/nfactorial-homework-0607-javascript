const dFactorial = {
    directorName: 'Dalida',
    directorAge: 18,
    favoriteColor: null,
    isTop: true,
    isFriendly: undefined,
    teachers: [
        {
            name: 'Askar',
            age: 25,
            specialization: 'Front-end dev'
        },
        {
            name: 'Samal',
            age: 21,
            specialization: 'Back-end dev'
        },
        {
            name: 'Alikhan',
            age: 34,
            specialization: 'Dev-Ops'
        },
        {
            name: 'Askar',
            age: 27,
            specialization: 'UI designer'
        }
    ],
    students: [
        {
            studentId: 70_601,
            name: 'Maksat',
            groupNumber: 2005,
            subjects: ['Math', 'Kazakh lang', 'Machine learning']
        },
        {
            studentId: 70_602,
            name: 'Aidana',
            groupNumber: 2005,
            subjects: ['IOS', 'English lang', 'PL/SQL']
        },
        {
            studentId: 70_603,
            name: 'Jenis',
            groupNumber: null,
            subjects: ['Math', 'Russian lang', 'Computer vision']
        },
        {
            studentId: 70_604,
            groupNumber: null,
            name: 'Aidana',
            subjects: ['Math', 'Computer vision', 'PL/SQL']
        }
    ],
    getStudents: () => dFactorial.students,
    getTeachers: () => dFactorial.teachers,
    getAll: () => [...dFactorial.teachers, ...dFactorial.students],
    getStudentsInfoBySubject: subject => {
        const studentsSubjects = dFactorial.students.filter(stud => stud.subjects.includes(subject))
        return studentsSubjects.map(stud => `${stud.name} has subjects ${stud.subjects.join(', ')}`)
    },
    studentHasField: (studentName, fieldName) => {
        const res = []
        const students = dFactorial.students.filter(stud => stud.name === studentName)
        for (let student of students) {
            const hasField = fieldName in student
            res.push("Student " + student.name + " has field: " + hasField)
        }
        return res
    },
    getTeachersByName: name => dFactorial.teachers.filter(teacher => teacher.name === name),
    addStudents: (...students) => (students.forEach(stud => dFactorial.students.push(stud))),
    addStudentInfo: ({studentId = 0, name = 'Unset', groupNumber = undefined, subjects = []}) => dFactorial.students.push({ studentId, name, groupNumber, subjects })
}

const dFactorialCopy2 = {...dFactorial}
const dFactorialCopy3 = {...dFactorialCopy2}

export default dFactorial
export {dFactorialCopy2, dFactorialCopy3 as dFact}