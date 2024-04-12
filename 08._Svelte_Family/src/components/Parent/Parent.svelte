<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";

    function handleShowLove(childName){
        console.log(`${parentName} is loved by ${childName} very much.`)
    }

    let treasureChest = ["🧌","🧟","🦠","🕸️","🪳","🐝","🦂","🧞‍♂️"]

    function handleTakeFromTreasureChest(){
        treasureChest.pop();
        treasureChest = treasureChest;
    }
    /* 
    assignment Create a treasure chest full of items (emoji)
    each parent has a treasure chest and the children can take one item at a time
    remember to follow conventions of handle and on
    display the treasures on the parents
    */

    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

    function wipeFridge(){
        fridgeMessages.set([{ message: "Svelte Family Fridge"}]);
    }
   // assignment give parents the power to clear the fridge
</script>

<h1>{parentName}</h1>

<button on:click={wipeFridge}>Wipe the fridge</button>

{#each treasureChest as treasure}
    {treasure + ""}
{/each}

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onHandleTakeFromTreasureChest={handleTakeFromTreasureChest}/>
{/each}