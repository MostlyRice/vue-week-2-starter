let app = Vue.createApp({
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            // Array of students
            students: [{
                    name: 'A. Student',
                    starID: 'aa1234bb',
                    present: false
                },
                {
                    name: 'B. Student',
                    starID: 'cc4567dd',
                    present: false
                },
                {
                    name: 'C. Student',
                    starID: 'ee8910ff',
                    present: false
                }
            ],
            // create empty array to collect errors for validation
            errors: [], 
            // for the most recent arrival or most recent departure
            mostRecentStudent: {} 
        }
    },
    methods: {
        addStudent() {
            // clear errors array, start fresh
            this.errors = [] 

            // if there is nothing in the newStudentName form input, add this error to errors array
            if (!this.newStudentName) {
                this.errors.push('Student name must be entered')
            }

            if (!this.newStarID) {
                this.errors.push('StarID must be entered')
            }
            // if no errors, do the following
            if (this.errors.length == 0) {

                let student = {
                    name: this.newStudentName,
                    starID: this.newStarID,
                    present: false
                }
                
                // pushes students in array
                this.students.push(student)

                // Clears input form
                this.newStudentName = ''
                this.newStarID = ''

                this.students.sort(function(s1, s2) {
                    // return positive number if s1 should be sorted after s2
                    if (s1.name.toUpperCase() > s2.name.toUpperCase()) {
                        return 1
                    }
                    // return negative number if s1 should be sorted before s2
                    if (s1.name.toUpperCase() < s2.name.toUpperCase()) {
                        return -1
                    }
                    // return 0 if order is equivalent
                    return 0
                })
            }

        },
        arrivedOrLeft(student) {
            this.mostRecentStudent = student

        }
    }
})


app.mount('#app')