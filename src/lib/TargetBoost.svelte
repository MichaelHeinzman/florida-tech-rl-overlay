<script>
  import { fly } from "svelte/transition";
    import {targetPlayer} from "./processor";
  import { quartInOut } from "svelte/easing";
</script>

{#if $targetPlayer}
    <div
    transition:fly={{x: 400, easing: quartInOut, duration: 1000}}
    class="target_boost_box {$targetPlayer?.team === 0 ? "target_boost_box_left_team" : "target_boost_box_right_team"}"
    >
    <div
    class="target_boost_container {$targetPlayer?.team === 0 ? "target_boost_container_left_team" : "target_boost_container_right_team"}"
    >
    <div
        class="target_boost_meter_bar {$targetPlayer?.team === 0 ? "target_boost_meter_bar_left_team" : "target_boost_meter_bar_right_team"}"
        style="
        background: {$targetPlayer?.team === 0 ? `conic-gradient(
            #0091ff ${40 * ($targetPlayer?.boost / 100)}deg,
            #0091ff ${80 * ($targetPlayer?.boost / 100)}deg,
            #0091ff  ${30 * ($targetPlayer?.boost / 100)}deg,
            #94eaff ${270 * ($targetPlayer?.boost / 100)}deg,
            #0e1218 0deg
            )` : `conic-gradient(
        #e25201 ${40 * ($targetPlayer?.boost / 100)}deg,
        #ff7b2e ${80 * ($targetPlayer?.boost / 100)}deg,
        rgb(255, 125, 49)  ${30 * ($targetPlayer?.boost / 100)}deg,
        #ffc6ad ${270 * ($targetPlayer?.boost / 100)}deg,
        #12171f 0deg
        )`}
        "
    >
        <div
        class="target_boost_inner {$targetPlayer?.team === 0 ? "target_boost_inner_left_team" : "target_boost_inner_right_team"}"
        ></div>
    </div>

    <svg class="target_boost_meter_svg">
        <circle
        class="target_boost_meter_svg_circle {$targetPlayer?.team === 0 ? "target_boost_meter_svg_circle_left_team" : "target_boost_meter_svg_circle_right_team"}"
        cx={"50%"}
        cy={"50%"}
        r={"50%"}
        />
    </svg>
    </div>
    <div
    class="target_boost_value {$targetPlayer?.team === 0 ? "target_boost_value_left_team" : "target_boost_value_right_team"}"
    >
    {$targetPlayer?.boost}
    </div>
    </div>
{/if}

<style>
    .target_boost_box {
        font-size: 3rem;
        font-weight: bold;
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 200px;
        height: 200px;
        margin-bottom: 50px;
        margin-right: 50px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        overflow: hidden;
    }
    .target_boost_box_left_team {
        border: 5px solid #07132d;
        background: #07132d;
    }
    .target_boost_box_right_team {
        border: 5px solid #11151a;
        background: #11151a;
    }

    .target_boost_container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .target_boost_container_left_team {
        background: #07132d;
        mask: conic-gradient(#060f25 270deg, transparent 270deg);
        transform: rotate(180deg);
    }
    .target_boost_container_right_team {
        background: #11151a;
        mask: conic-gradient(#0e1218 270deg, transparent 270deg);
        transform: rotate(180deg);
    }
    .target_boost_inner {
        position: absolute;
        margin: auto;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        z-index: 50;
    }
    .target_boost_inner_left_team {
        background: #07132d;
    }

    .target_boost_inner_right_team {
        background: #11151a;
    }
    .target_boost_meter_bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .5s ease-in-out;
    }

    .target_boost_value {
        position: absolute;
        z-index: 500;
    }

    .target_boost_meter_svg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 500;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .target_boost_meter_svg_circle {
        stroke-dasharray: 4 25%;
        stroke-width: 41;
        stroke-dashoffset: 18;
        fill: transparent;
    }
    .target_boost_meter_svg_circle_left_team {
        stroke: #07132d;
    }

    .target_boost_meter_svg_circle_right_team {
        stroke: #11151a;
    }
</style>