<script>
import { Bar } from 'vue-chartjs';

export default {
    extends: Bar,
    props: ['data'],
    mounted() {
        let numMale = 0;
        let numFemale = 0;
        this.data.map((user) => {
            switch (user.gender) {
                case 'Male':
                    numMale++;
                    break;
                case 'Female':
                    numFemale++;
                    break;
            }
        });
        this.renderChart({
            labels: ['Male', 'Female'],
            datasets: [
                {
                    label: 'Gender',
                    backgroundColor: ['#00D8FF', '#DD1B16'],
                    data: [numMale, numFemale]
                }
            ]
        },
        {
            responsive: true,
            title: {
                display: true,
                text: 'User Gender Chart'
            }
        });
    }
};
</script>