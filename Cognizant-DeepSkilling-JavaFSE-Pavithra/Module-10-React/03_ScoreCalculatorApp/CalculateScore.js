import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const average = props.total / 5;

    return (
        <div className="box">
            <h1>Student Details</h1>

            <h3>Name : {props.name}</h3>
            <h3>School : {props.school}</h3>
            <h3>Total Marks : {props.total}</h3>
            <h3>Goal : {props.goal}</h3>
            <h3>Average : {average}</h3>
        </div>
    );
}

export default CalculateScore;