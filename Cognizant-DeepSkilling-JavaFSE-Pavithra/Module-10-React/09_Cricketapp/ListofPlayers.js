function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Ravindra Jadeja", score: 68 },
        { name: "Rishabh Pant", score: 77 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 80 },
        { name: "Kuldeep Yadav", score: 60 },
        { name: "Mohammed Siraj", score: 75 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {lowScorePlayers.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListofPlayers;