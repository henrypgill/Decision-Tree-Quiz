import { LeafNode, QuestionNode, Tree } from "./tree";

export function buildAllPeopleInTreeWithStack(topNode: Tree): string[] {
    const stack: Tree[] = [topNode];
    const treeList: string[] = [];

    while (stack.length > 0) {
        const currentNode = stack.pop() as QuestionNode | LeafNode;

        console.log(stack);

        if (currentNode.kind === "question") {
            stack.push(currentNode.yesSubtree);
            stack.push(currentNode.noSubtree);
        }

        if (currentNode.kind === "leaf") {
            treeList.push(currentNode.result);
        }
    }
    console.log(treeList);
    return treeList;
}
