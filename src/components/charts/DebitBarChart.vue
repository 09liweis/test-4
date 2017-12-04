<script>
import { Pie } from 'vue-chartjs';

export default {
    extends: Pie,
    props: ['data'],
    mounted() {
        let debit1 = 0, debit2 = 0, debit3 = 0, debit4 = 0;
        this.data.map((user) => {
            const debit = parseFloat(user.debit.substr(1));
            if (debit > 0 && debit <= 30) {
                debit1++;
            }
            if (debit > 30 && debit <= 60) {
                debit2++;
            }
            if (debit > 60 && debit <= 90) {
                debit3++;
            }
            if (debit > 90) {
                debit4++;
            }
        });
        this.renderChart({
            labels: ['0 - 30', '30 - 60', '60 - 90', '> 90'],
            datasets: [
                {
                    backgroundColor: ['#00D8FF', '#DD1B16', '#f87979', '#f89779'],
                    data: [debit1, debit2, debit3, debit4]
                }
            ]
        },
        {
            title: {
                display: true,
                text: 'User Debit Chart'
            }
        });
    }
};
</script>