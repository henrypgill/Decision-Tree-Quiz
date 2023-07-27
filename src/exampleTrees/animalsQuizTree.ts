import { Tree } from "../tree";

export default function createTree(): Tree {
    return {
        kind: "question",
        question: "Does the animal have fur?",
        yesSubtree: {
            kind: "question",
            question: "Does the animal live in water?",
            yesSubtree: {
                kind: "leaf",
                result: "Sea otter",
            },
            noSubtree: {
                kind: "leaf",
                result: "Grizzly bear",
            },
        },
        noSubtree: {
            kind: "question",
            question: "Does the animal have feathers?",
            yesSubtree: {
                kind: "question",
                question: "Does the animal fly?",
                yesSubtree: {
                    kind: "leaf",
                    result: "Bald eagle",
                },
                noSubtree: {
                    kind: "leaf",
                    result: "Penguin",
                },
            },
            noSubtree: {
                kind: "leaf",
                result: "Snake",
            },
        },
    };
}
