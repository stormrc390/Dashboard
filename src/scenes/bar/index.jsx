import ContestantsTable from "../../components/Scores";

const TestTable = () => {

    const contestants = [
        { name: 'Shooter 1', score: 95 },
        { name: 'Shooter 2', score: 88 },
        { name: 'Shooter 3', score: 86 },
        { name: 'Shooter 4', score: 82 },
        { name: 'Shooter 5', score: 78 },
        { name: 'Shooter 6', score: 64 },
      ];

    return (
        <div>
            <ContestantsTable contestants={contestants} />
        </div>
    )


}

export default TestTable;