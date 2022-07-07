import axios from "axios";
import { API_URL } from "../config";
import { failedToLoadData, error } from '../utilities/toastMessages';

export function getAPIData(request, response){
    axios
    .get(API_URL + request)
    .then(response)
    .catch(() => {
      failedToLoadData();
    });
}

export function postAPIData(request, body, token, response){
    axios
    .post(API_URL + request, body, {
      headers: {
        'X-Firebase-AppCheck': token,
      }
    })
    .then(response)
    .catch(() => {
      error();
    });
}