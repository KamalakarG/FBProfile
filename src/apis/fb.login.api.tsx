import axios from "axios";
import {
  FB_APP_ID,
  FB_PROFILE_DETAILS_URL,
  FB_PROFILE_FIELDS,
} from "../constants";
import * as Facebook from "expo-facebook";

export async function loginWIthFb() {
  try {
    await Facebook.initializeAsync(FB_APP_ID);
    const values: any = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (values.type === "success") {
      const token = values["token"];
      const response = await fetch(
        `${FB_PROFILE_DETAILS_URL}${token}&${FB_PROFILE_FIELDS}`
      );
      let results = await response.json();
      return results;
    } else {
      return Promise.reject("Not able to login");
    }
  } catch ({ message }) {
    return Promise.reject(message);
  }
}
