// localStorage.setItem("user_id", 21)

const add_to_local_storage = () => {
      const storage_input = document.getElementById("storage-id");
      const storage_id = storage_input.value;

      const storage_value_input = document.getElementById("storage-value");
      const storage_value = storage_value_input.value;

      // set to local storage
      if (storage_id && storage_value) {
            localStorage.setItem(storage_id, storage_value);
      }

      // clear input field
      storage_input.value = "";
      storage_value_input.value = "";
};
