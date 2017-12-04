<script>
import { Doughnut } from 'vue-chartjs';

export default {
    extends: Doughnut,
    props: ['data'],
    mounted() {
        let emails = {};
        this.data.map((user) => {
            const mailServer = user.email.split('@')[1];
            if (emails.hasOwnProperty(mailServer)) {
                emails[mailServer]++;
            } else {
                emails[mailServer] = 1;
            }
        });
        let nums = [];
        Object.keys(emails).map((key) => {
            nums.push(emails[key]);
        });
        this.renderChart({
            labels: Object.keys(emails),
            datasets: [
                {
                    //backgroundColor: ['#00D8FF', '#DD1B16'],
                    data: nums
                }
            ]
        });
    }
};
</script>