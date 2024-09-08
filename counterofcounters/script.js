function CounterIncrement() {
    const [counter, setCounter] = React.useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div className="border border-gray p-3 mb-3 counter-item">
            <p className="counter">{counter}</p>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
        </div>
    );
}

function CreateCounter() {
    const [counters, setCounters] = React.useState([<CounterIncrement key={0} />]);

    function addCounter() {
        setCounters([...counters, <CounterIncrement key={counters.length} />]);
    }

    return (
        <div className="text-center">
            <button className="btn btn-primary btn-green mb-3" onClick={addCounter}>Add Counter</button>
            <div className="counter-container">
                {counters}
            </div>
        </div>
    );
}

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
root.render(<CreateCounter />);