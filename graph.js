class Graph {
    constructor(data) {
        this.data = data;
        this.chartContainer = document.getElementById('chart');
    }

    drawChart() {
        this.data.forEach(item => {
            const barContainer = document.createElement('div');
            barContainer.classList.add('bar-container');

            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${item.value}px`;

            const title = document.createElement('span');
            title.textContent = item.title;

            bar.appendChild(title);
            barContainer.appendChild(bar);
            this.chartContainer.appendChild(barContainer);
        });
    }
}

const data = [
    { title: "Amazon", value: 100 },
    { title: "Google", value: 234 },
    { title: "Netflix", value: 70 },
    { title: "Facebook", value: 200 },
    { title: "Apple", value: 514 },
    { title: "Microsoft", value: 300 }
];

const graph = new Graph(data);
graph.drawChart();