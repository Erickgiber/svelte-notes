<script lang="ts">
  import Icon from '@iconify/svelte';

  const notes = JSON.parse(window.localStorage.getItem('notes')) ?? [];
</script>

<main class="w-full px-3 py-2">
  <h1
    class="w-full flex flex-row items-center gap-1 py-2 border-b border-gray-800 mb-5"
  >
    <Icon class="w-5 h-5" icon="emojione-v1:spiral-notepad" />
    <p>My notes</p>
  </h1>
  {#each notes as note}
    <article
      class="bg-gray-900 flex flex-col shadow-xl w-xl h-24 w-60 px-0 py-2 rounded-lg"
    >
      <p
        class="w-full px-2 pb-1 border-b border-gray-700 flex items-center gap-1"
      >
        <b class="text-gray-600 text-xs select-none"> Title: </b>
        <span class="text-sm"> {note.title} </span>
      </p>
      <p class="w-full px-2 py-1 text-sm overflow-hidden text-ellipsis">
        <b class="text-gray-600 text-xs select-none"> Description: </b>
        <span class="text-sm"> {note.description} </span>
      </p>
    </article>
  {/each}
</main>
