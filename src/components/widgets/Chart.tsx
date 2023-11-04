// libraries
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Filler,
    LineElement,
    PointElement,
    CategoryScale,
    Title,
    LinearScale
} from 'chart.js';
import {Doughnut, Line} from 'react-chartjs-2';

// helpers
import {vazirmatn} from "@/helpers/fonts";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

ChartJS.defaults.font.family = vazirmatn.style.fontFamily;


const doughnutOptions = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {
        padding: 8
    },
    plugins: {
        legend: {
            position:'bottom',
            labels: {
                font: {
                    size: 14,
                    weight: "bold"
                },
                padding: 32
            },
        },
    },
};

const lineOptions = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {
        padding: 8
    },
    plugins: {
        legend: {
            position:'bottom',
            labels: {
                font: {
                    size: 14,
                    weight: "bold"
                },
                padding: 32
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: "#475569",
                font: {
                    size: 12,
                }
            },
        },
        y: {
            ticks: {
                color: "#475569",
                font: {
                    size: 12,
                }
            },
        }
    }
};

export const DoughnutChart = ({data}) => {

    return (
        <Doughnut
            options={doughnutOptions}
            data={data}
        />
    )
}

export const LineChart = ({data}) => {

    return (
        <Line
            options={lineOptions}
            data={data}
        />
    )
}