<template>
  <div>
    <div class="pageHeader grey lighten-2">
      <div class="container">
        <h3 class="bold">
          Edit profile settings
        </h3>
      </div>
    </div>
    <!-- <hr /> -->
    <!-- basic Information section  -->
    <div class="container">
      <div class="imgUploader">
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".jpg, .jpeg"
              ref="profilePicInput"
              @change="profilePicChanged($event)"
            />
            <label for="imageUpload"></label>
          </div>
          <div class="avatar-preview">
            <div
              id="imagePreview"
              style="background-image: url(https://img.freepik.com/free-vector/pig-smiling_24640-54623.jpg);"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h5 class="bold">Basic Information</h5>
      <hr />
      <div class="row">
        <!-- editing name -->
        <div class="input-field col s6">
          <input
            id="name"
            type="text"
            class="validate"
            v-model="userData.name"
          />
          <label for="name" class="active">Name</label>
        </div>

        <!-- editing email -->
        <div class="input-field col s6">
          <input
            id="email"
            type="email"
            class="validate"
            v-model="userData.email"
          />
          <label for="email" class="active">Email</label>
        </div>

        <!-- editing address -->
        <div class="input-field col s6">
          <input
            id="address"
            type="text"
            class="validate"
            v-model="userData.address"
          />
          <label for="address" class="active">Email</label>
        </div>

        <div
          v-if="
            this.userData.type == 'Normal' || this.userData.type == 'Courier'
          "
          class="input-field col s6"
        >
          <select id="area" v-model="this.userData.area">
            <option value="" disabled selected>Choose your option</option>
            <option value="giza">Giza</option>
            <option value="haram">Haram</option>
            <option value="shoubra">Shoubra</option>
            <option value="nasrCity">Nasr City</option>
            <option value="heliopolis">Heliopolis</option>
            <option value="ramsis">Ramsis</option>
            <option value="dokki">Dokki</option>
          </select>
          <label>Area</label>
        </div>
      </div>
    </div>

    <!-- security Information section  -->
    <div class="container">
      <h5 class="bold">Security Information</h5>
      <hr />
      <div class="row">
        <!-- editing password -->
        <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="userData.password"
          />
          <label for="password" class="active">Password</label>
        </div>
        <!-- confirmimg password -->
        <!-- <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="userData.confirmPassword"
          />
          <label for="password">Confirm Password</label>
        </div> -->
      </div>
    </div>

    <!-- additional Information section  -->
    <div class="container">
      <h5 class="bold">Additional Information</h5>
      <hr />
      <div
        class="row nomargin"
        v-for="(phoneNumber, phoneNumberIndex) in userData.phoneNumbers"
        :key="phoneNumber"
      >
        <!-- editing password -->
        <div class="input-field col s6">
          <input
            id="number"
            type="text"
            class="validate"
            :value="phoneNumber"
          />
          <label for="number" class="active">Phone Number</label>
        </div>

        <i
          class="material-icons red-text removePhoneNumber"
          @click.prevent="deletePhoneNumber(phoneNumber, phoneNumberIndex)"
          >close</i
        >
      </div>
      <!-- <p><i class="material-icons">add</i> Add another phone number</p> -->

      <!-- new phone numebr -->
      <div class="row nomargin">
        <div class="input-field col s6">
          <input
            id="newPhoneNumber"
            type="text"
            class="validate"
            @keydown.enter="addPhoneNumber"
            v-model="newPhoneNumber"
          />
          <label for="newPhoneNumber">Add new Phone Number</label>
        </div>
      </div>
    </div>
    <div class="container">
      <button class="btn" @click="updateSettings">Update settings</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {
    this.getUserData();
    $(document).ready(function() {
      $("select").formSelect();
    });
  },
  data() {
    return {
      userData: null,
      phoneNumbers: [],
      newPhoneNumber: ""
    };
  },
  updated() {
    EventBus.$emit("clearNotifications"); // to clear any existing notifications
    $("select").formSelect();
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    profilePicChanged(event) {
      //view the new profile pic front end
      let input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $("#imagePreview").css(
            "background-image",
            "url(" + e.target.result + ")"
          );
          $("#imagePreview").hide();
          $("#imagePreview").fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);

        let formData = new FormData();
        for (let file of input.files) {
          formData.append("1.jpg", file);
        }
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
      }
    },
    async getUserData() {
      this.isLoading = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}user/${this.loggedInUser.id}`
        );
        this.userData = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
      this.isLoading = false;
    },
    async addPhoneNumber() {
      try {
        await this.axios.post(
          `${this.$store.state.baseApiUrl}userPhoneNumber/${this.loggedInUser.id}/${this.newPhoneNumber}`
        );
        this.userData.phoneNumbers.push(this.newPhoneNumber);
        this.newPhoneNumber = "";
      } catch (err) {
        EventBus.$emit("errorNotification", err.response.data);
      }
    },
    async deletePhoneNumber(phoneNumber, phoneNumberIndex) {
      try {
        await this.axios.delete(
          `${this.$store.state.baseApiUrl}deletePhoneNumber/${this.loggedInUser.id}/${phoneNumber}`
        );
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.userData.phoneNumbers.splice(phoneNumberIndex, 1);
    },
    async updateSettings() {
      // const imgUrl = this.$refs.profilePicInput.files ? this.$refs.profilePicInput.files[0];
      const requestPayload = {
        User_Details: this.userData
      };

      console.log(requestPayload);
      try {
        await this.axios.put(
          `${this.$store.state.baseApiUrl}user`,
          requestPayload
        );
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }
    },

    //method that uploads the new profile pic and returns back the img url
    async uploadProfilePic(file) {
      let formData = new FormData();

      formData.append("profilePic", file, "1.jpg");

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      const response = await this.axios.post(
        `${this.$store.state.baseApiUrl}upload`,
        formData
      );
      return response.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  padding: 20px;
}
.removePhoneNumber {
  line-height: 80px;
  cursor: pointer;
}
hr {
  margin: 20px 0px;
  border: 1px solid #eee;
}

.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 0px;
}
.avatar-upload .avatar-edit {
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;
}
.avatar-upload .avatar-edit input {
  display: none;
}
.avatar-upload .avatar-edit input + label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
}
.avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}
.avatar-upload .avatar-edit input + label:after {
  content: "\e3c9";
  font-family: "Material Icons";
  color: #757575;
  position: absolute;
  font-weight: bold;
  font-size: 17px;
  top: 5px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
}
.avatar-upload .avatar-preview {
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
  border: 6px solid #f8f8f8;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
.avatar-upload .avatar-preview > div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
