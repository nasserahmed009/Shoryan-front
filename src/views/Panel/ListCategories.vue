<template>
  <div>
    <div class="row">
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large modal-trigger" href="#AddCategory">
          <i class="large material-icons">add</i>
        </a>
      </div>

      <!-- Add Category Modal -->
      <div id="AddCategory" class="modal">
        <div class="modal-content">
          <h4>Add new category</h4>
          <form @submit.prevent="addCategory">
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="newCategoryName"
                  type="text"
                  class="validate"
                  v-model="newCategoryName"
                />
                <label
                  for="newCategoryName"
                  :class="{ active: this.newCategoryName }"
                  >Category Name</label
                >
              </div>
            </div>
            <button type="submit" class="btn right">
              Add category
            </button>
          </form>
          <div class="clear"></div>
        </div>
      </div>

      <!-- search box -->
      <form class="col s3 right" @submit.prevent="search">
        <div class="input-field">
          <i class="material-icons prefix">search</i>
          <input type="text" placeholder="search" v-model.lazy="searchtext" />
          <label for="icon_prefix2"></label>
        </div>
      </form>
    </div>

    <Loading v-if="isLoading" />

    <DataTable
      :header-fields="headerFields"
      :data="tableData || []"
      :css="tableStyles"
      v-if="!isLoading"
    >
      <div class="" slot="actions" slot-scope="props">
        <button
          class="btn-floating waves-effect waves-light tooltipped red"
          data-position="top"
          data-tooltip="Delete drug"
          @click="deleteCategory(props.rowData.id, props.rowIndex)"
        >
          <i class="large material-icons">delete</i>
        </button>
      </div>
    </DataTable>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

import { DataTable } from "v-datatable-light";
import tableStyles from "@/assets/js/TableStyles";
export default {
  mounted() {
    $(".modal").modal();
    this.getAllCategories();
  },
  data() {
    return {
      searchtext: null,
      isLoading: false,
      newCategoryName: "",
      tableData: [],
      tableStyles: tableStyles,
      headerFields: [
        {
          label: "id",
          name: "id"
        },
        {
          label: "name",
          name: "name"
        },
        {
          label: "actions",
          name: "actions",
          customElement: "actions"
        }
      ]
    };
  },
  components: {
    DataTable,
    Loading: () => import("@/components/Loading")
  },
  methods: {
    search() {
      alert("search");
    },
    async getAllCategories() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}categories`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
      this.isLoading = false;
    },
    async getSearchedCategories() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}searchCategories/` + this.searchtext
      );
      this.tableData = response.data; //add the users in array in the table data to be viewed
    },
    async deleteCategory(categoryId, categoryIndex) {
      EventBus.$emit("clearNotifications");

      try {
        //request to delete the drug
        await this.axios.delete(
          `${this.$store.state.baseApiUrl}categories/${categoryId}`
        );

        //remove the drug from the component
        this.tableData.splice(categoryIndex, 1);
        //push notification on deleting successfully
        EventBus.$emit("successNotification", "Category deleted successfully");
      } catch (err) {
        //push notification with the error
        EventBus.$emit(
          "errorNotification",
          "Error occured, please try again later"
        );
      }
    },
    async addCategory() {
      EventBus.$emit("clearNotifications");

      try {
        const requestPayload = {
          Categories: {
            name: this.newCategoryName
          }
        };
        //send the request to the backend
        await this.axios.post(
          `${this.$store.state.baseApiUrl}categories`,
          requestPayload
        );
        this.getAllCategories(); //reload the categories
        this.newCategoryName = "";
        EventBus.$emit("successNotification", "Category added successfully"); //emit notification on success
      } catch (err) {
        EventBus.$emit("errorNotification", err); //emit notification on fail
      }

      $(".modal").modal("close");
    }
  },
  watch: {
    searchtext(newValue) {
      this.searchtext = newValue;
      if (newValue == "") {
        this.getAllCategories();
        console.log("ALL");
      } else {
        this.getSearchedCategories();
        console.log("search");
      }
    }
  }
};
</script>
