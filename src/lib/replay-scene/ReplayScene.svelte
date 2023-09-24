<script>
  import { backInOut } from "svelte/easing";
  import { fly } from "svelte/transition";

</script>

<div class="replay_box" transition:fly={{y: -100, easing: backInOut}}>
    <div class="dot"/>
    <span class="replay_text">REPLAY</span>
</div>

<style>
    .replay_box {
        position: absolute;
        margin: auto;
        left: 0px;
        right: 0px;
        z-index: 500;
        width: 449px;
        height: 101px;
        background-color: #1D1D21;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
    .replay_text {
        color: rgb(255, 79, 79);
        text-align: center;
        font-family: Lato;
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }

    .dot {
        width: 20px;
        height: 20px;
        background-color: rgb(255, 79, 79);
        border-radius: 50%;
        clip-path: circle(50% at 50% 50%);
    }
</style>