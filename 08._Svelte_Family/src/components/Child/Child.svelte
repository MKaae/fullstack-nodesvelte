<script>
    export let child;
    export let onShowLove;
    export let onHandleTakeFromTreasureChest;
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-sheep"}
>
    <h2>{child.name}</h2>

    <button on:click={() => onShowLove(child.name)}>Show Love ❤️</button>
    <br>
    <button on:click={() => onHandleTakeFromTreasureChest(child.name)}>Take From Treasure Chest</button>
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