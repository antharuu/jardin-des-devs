<template>
    <div class="team">
        <div v-for="(member, id) in getTeamMembers()" v-bind:key="id" class="member">
            <div class="member__image-container">
                <img class="member__image" :src="`/membres/${member.frontmatter.image}`" alt="Image de profile" />
            </div>
            <p class="member__pseudo">{{ member.frontmatter.pseudo }}</p>
            <p class="member__role">{{ member.frontmatter.role }}</p>
            <p class="member__presentation">{{ member.frontmatter.presentation }}</p>
            <div class="member__technos">
                <p v-for="(techno, id) in member.frontmatter.technos" v-bind:key="id">
                <a :href="`/category/${techno}`">{{ techno }}</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {TeamType} from "../jdd/types/Team"
import moment from 'moment';
export default {
    props: ["team"],
    data() {
        return {
            roles: [
                "Roi slime",
                "Slime savant",
                "Slime",
            ]
        }
    },
    methods: {
        getTeamMembers() {
            return [
                ...this.team.filter((m: TeamType) => m.frontmatter.role === "Roi slime"),
                ...this.team.filter((m: TeamType) => m.frontmatter.role === "Slime savant"),
                ...this.team.filter((m: TeamType) => m.frontmatter.role === "Slime"),
            ];
        }
    }
}
</script>