<!-- Profile.svelte -->
<script lang="ts">
  import { handleChangeName as changeName } from './handlers/handleChangeName';
  import { handleChangePhoto as changePhoto } from './handlers/handleChangePhoto';

  export let user;

  const handleChangeName = (event) => changeName(event, user, $user);
  const handleChangePhoto = () => changePhoto(user, $user);
</script>

<main class="w-full px-3 py-32 flex flex-col items-center gap-5">
  <button
    class="border-4 outline-none rounded-full focus-visible:border-blue-400"
    on:click={handleChangePhoto}
  >
    <img class="w-36 bg-gray-900 rounded-full" src={$user.photo} alt="You" />
  </button>
  <div class="w-38">
    <input
      class="w-full px-2 py-1 text-sm bg-gray-900 border border-gray-800 rounded-md outline-none"
      type="text"
      placeholder={$user.name}
      value={$user.name}
      on:input={handleChangeName}
    />
  </div>
</main>
