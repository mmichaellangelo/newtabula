{#each sites as site}
    <TopSiteLink title={site.title} url={site.url} />
{/each}

<script lang="ts">

    import TopSiteLink from "./TopSiteLink.svelte";

    interface site {
        title: string;
        url: string;
    }

    let sites: site[] = [
        {
            title: "Google",
            url: "google.com"
        }, 

        {
            title: "DuckDuckGo",
            url: "duckduckgo.com"
        }
    ];
</script>