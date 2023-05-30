<!-- Profile.svelte -->
<script lang="ts">
  export let user;

  const handleChangeName = (event) => {
    const name = event.target.value;
    user.set({ ...$user, name });
  };
</script>

<main class="w-full px-3 py-32 flex flex-col items-center gap-5">
  <div>
    <img class="w-36 bg-gray-900 rounded-full" src={$user.photo} alt="You" />
  </div>
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
