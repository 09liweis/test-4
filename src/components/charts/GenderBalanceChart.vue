<script>
import { Bar } from 'vue-chartjs';

export default {
    extends: Bar,
    props: ['data'],
    methods: {
        parseMoney(value) {
            return (value.trim() != '') ? parseFloat(value.substr(1)) : 0;
        }
    },
    mounted() {
        let maleDebit = 0.0, femaleDebit = 0.0, maleCredit = 0.0, femaleCredit = 0.0;
        this.data.map((user) => {
            switch (user.gender) {
                case 'Male':
                    maleDebit += this.parseMoney(user.debit);
                    maleCredit += this.parseMoney(user.credit);
                    break;
                case 'Female':
                    femaleDebit += this.parseMoney(user.debit);
                    femaleCredit += this.parseMoney(user.credit);
                    break;
            }
        });
        this.renderChart({
            labels: ['Male', 'Female'],
            datasets: [
                {
                    label: 'Debit',
                    backgroundColor: ['#00D8FF', '#DD1B16'],
                    data: [maleDebit.toFixed(2), femaleDebit.toFixed(2)]
                },
                {
                    label: 'Credit',
                    backgroundColor: ['#00D8FF', '#DD1B16'],
                    data: [maleCredit.toFixed(2), femaleCredit]
                }
            ]
        },
        {
            responsive: true,
            title: {
                display: true,
                text: 'Gender Balance Chart'
            }
        });
    }
};
</script>