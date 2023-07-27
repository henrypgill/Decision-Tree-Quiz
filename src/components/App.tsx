import "./App.css";
import createTree from "../exampleTrees/animalsQuizTree";
import { useState } from "react";
import { buildAllPeopleInTreeWithStack as treeBuilding } from "../treeBuilding";

export default function App() {
    const [topNode, setTopNode] = useState(createTree());

    const handleYes = () => {
        if (topNode.kind === "question") {
            setTopNode(topNode.yesSubtree);
        }
    };

    const handleNo = () => {
        if (topNode.kind === "question") {
            setTopNode(topNode.noSubtree);
        }
    };

    const handleReset = () => {
        setTopNode(createTree());
    };

    let appString = "";

    if (topNode.kind === "question") {
        appString = topNode.question;
    } else {
        appString = `Did you choose a ${topNode.result}?`;
    }

    const remainingAnimals = () => {
        const fullTree = treeBuilding(createTree());
        const currentTree = treeBuilding(topNode);
        const filteredTree = fullTree.filter(
            (element) => !currentTree.includes(element)
        );
        return filteredTree;
    };

    const filteredTree = remainingAnimals();

    return (
        <main className="App">
            Think of an animal from this list and I will try to guess it!
            <ul>
                {filteredTree.map((animal, index) => (
                    <li key={index}>
                        <s>{animal}</s>
                    </li>
                ))}
                {treeBuilding(topNode).map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
            <p>{appString}</p>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
            <button onClick={handleReset}>Restart</button>
        </main>
    );
}
