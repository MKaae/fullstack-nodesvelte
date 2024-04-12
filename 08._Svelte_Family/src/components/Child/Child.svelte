<script>
    export let child;
    export let onShowLove;
    export let onHandleTakeFromTreasureChest;

    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

    let fridgeMessageInputValue = "";

    function submitFridgeMessage(){
        const newFridgeMessage = {
            creator: child.name,
            message: fridgeMessageInputValue
        }
        fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

        // fridgeMessages.update((fridgeMessagesStore) => {
        //     fridgeMessagesStore.push(newFridgeMessage);
        //     return fridgeMessagesStore;
        // })

        fridgeMessageInputValue = "";
    }
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-sheep"}
>
    <h2>{child.name}</h2>

    <label for="fridgeMessageInput">Write a Fridge Message</label>
    <input type="text" name="fridgeMessageInput" placeholder="Fridge Message"
        bind:value={fridgeMessageInputValue}
    >
    <br>
    <button on:click={submitFridgeMessage}>Write Fridge Message</button>
    <br>

    <button on:click={() => onShowLove(child.name)}>Show Love ❤️</button>
    <br>
    <button on:click={onHandleTakeFromTreasureChest}>Take From Treasure Chest</button>
</div>

<style>
    .is-girl {
        background-color: blue;
    }
    .is-boy {
        background-color: green;
    }
    .black-sheep {
        border: 0.5em solid black;
    }
    .grey-sheep {
        border: 0.5em solid grey;
    }
    .not-sheep {
        border: 0.5em solid white;
    }
</style>