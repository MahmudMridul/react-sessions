import { Chart } from "react-google-charts";

const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 1130, 667, 665],
    ["2019", 1230, 842, 427],
    ["2020", 1060, 238, 712],
    ["2021", 1330, 812, 494],
];
  
const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2021",
    }
};

export const BarChart = () => {
    return (
        <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={data}
            options={options}
        />        
    );
}
