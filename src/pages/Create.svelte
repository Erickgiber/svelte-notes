<script lang="ts">
  import Icon from '@iconify/svelte';
  import { navigate } from 'svelte-routing';
  import { createNoteLocal } from '../tools/createNoteLocal';

  const onSubmit = (event) => {
    event.preventDefault();
    const { title, description } = event.target.elements;
    createNoteLocal({
      title: title.value,
      description: description.value,
    });
    navigate('/');
  };
</script>

<main
  class="w-full h-full min-h-screen px-3 py-32 flex flex-col items-center gap-5 text-sm"
>
  <h1 class="w-full max-w-2xl text-xl text-left flex items-center gap-1">
    <Icon class="text-lg" icon="carbon:new-tab" />
    <p>Create note</p>
  </h1>

  <form
    on:submit={onSubmit}
    class="h-full max-h-96 max-w-2xl flex flex-wrap justify-start gap-5 w-full rounded-md overflow-auto"
  >
    <input
      class="w-full bg-gray-900 px-2 py-3 outline-none rounded-lg"
      placeholder="Title"
      type="text"
      name="title"
    />
    <textarea
      class="w-full h-52 bg-gray-900 resize-none outline-none rounded-md p-3"
      placeholder="Description"
      name="description"
    />
    <button class="bg-blue-800 px-3 py-2 rounded-md" type="submit">
      Save note
    </button>
    <button class="bg-red-600 px-3 py-2 rounded-md" type="reset">
      Clean
    </button>
  </form>
</main>
