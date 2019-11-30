<template>
  <div>
    <div class="row">
      <div class="insert-image col s8 m4">
        <p>Insert Image Form here</p>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div class="file-path-wrapper">
              <input
                class="file-path validate"
                type="text"
                placeholder="Upload one or more files"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="input-field col s12 m6">
        <form>
          <div class="input-field col s12">
            <select>
              <option value="" disabled selected>Drugs</option>
              <option v-for="drug in drugs" :key="drug.id">{{
                drug.name
              }}</option>
            </select>
          </div>

          <div class="input-field col s12">
            <input type="text" class="datepicker" placeholder="Expiry Date" />
          </div>

          <div class="input-field col s6">
            <input id="shreet" type="number" class="validate" />
            <label for="shreet">Shreet</label>
          </div>

          <div class="input-field col s6">
            <input id="elba" type="number" class="validate" />
            <label for="elba">3elba</label>
          </div>

          <button
            class="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>

          <!-- <a class="waves-effect waves-light btn right">Preview</a> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
      $(".datepicker").datepicker();
    });
  },
  data() {
    return {
      drugs: [
        //should be seeded from api
        {
          name: "Drug1",
          id: 1
        }
      ]
    };
  }
};
</script>

<style scoped></style>
