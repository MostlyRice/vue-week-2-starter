let app = Vue.createApp({
    data() {
        return {

            // Name of the activity tracked
            activity: 'Practice Art',

            // Array of all the activity records
            activityRecords: [], 

            // v-modeled to the form inputs
            dateString: '',
            hours: 1,
            type: 'Sketching',
            medium: 'traditional',
            completed: false,
            notes: '',

            // used with select option for type
            types: ['Sketching', 'Drawing', 'Painting'],

            errors: []
        }
    },
    methods: {
        submit() {

            this.errors = []
            
            let date = new Date(this.dateString)

            // is the datea  valid date? Is it today or in the past?
            if (!this.dateString || this.dateString === 'Invalid Date' || date > new Date() ) {
                this.errors.push('Select a valid date, today or in the past.')
            }

            if (this.hours <= 0 || this.hours > 24) {
                this.errors.push('The number of hours must be greater than 0 and less than or equal to 24')
            }

            if (!this.type) {
                this.errors.push('Select a type')
            }

            if (!this.medium) {
                this.errors.push('Select a medium')
            }

            if (this.errors.length === 0) {
                 let record = {
                    date: date,
                    hours: this.hours,
                    type: this.type,
                    medium: this.medium,
                    completed: this.completed,
                    notes: this.notes

                } 
            
                this.activityRecords.push(record)
                this.activityRecords.sort(function(r1, r2) {

                    // sort with oldest records first, most recent at the end
                    return r1.date.getTime() - r2.date.getTime()
                })
            }
            
        },
        shortDate(date) {
            return new Intl.DateTimeFormat('en-US', {timeZone: 'UTC'}).format(date)
        },
        shortenedNotes() {
            if (this.notes.length > 40) {
                return this.notes.substring(0, 40) + '...'
            } else {
                return this.notes
            }
        }
    },
    computed: {
        totalRecordsMessage() {

            let numberOfRecords = this.activityRecords.length

            if (this.activityRecords.length === 1) {
                return '1 record'
            } else {
                return `${numberOfRecords} records`
            }
        },
        totalHours() {
            let total = 0
            this.activityRecords.forEach(function(record) {
                total = total + record.hours
            })
            return total
        },
    }
})

app.mount('#app')