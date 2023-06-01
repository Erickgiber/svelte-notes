import { setUserLocal } from "../../tools/setUserLocal";

export const handleChangePhoto = (user, $user) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.click();
  input.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result;
      if (typeof result !== 'string') return;
      const src = result;
      const userUpdated = { ...$user, photo: src };
      user.set(userUpdated);
      setUserLocal(userUpdated);
    });
  });
};