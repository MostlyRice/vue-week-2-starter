let app = Vue.createApp({
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            // Array of students
            students: [
                { name: 'A. Student', starID: 'aa1234bb', present: false },
                { name: 'B. Student', starID: 'cc4567dd', present: false },
                { name: 'C. Student', starID: 'ee8910ff', present: false }
            ],
            errors: [], // create empty array to collect errors for validation
            mostRecentStudent: {}  // for the most recent arrival or most recent departure
        }
    },
})

app.mount('#app')