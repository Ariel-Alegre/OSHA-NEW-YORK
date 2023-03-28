import axios from "axios";
import API from "./api";

class UploadService {
    getImages() {
        return axios.get(`${API.URL}/download`)

    }

    sendImages(name, file, idSST, eyeColor, height, issued, expires, test, certification, issuedBy, verifiedBy, issuedOn) {
        const form = new FormData()
        form.append('name', name)
        form.append('image', file, 'form-data')
        form.append('idSST', idSST)
        form.append('eyeColor', eyeColor)
        form.append('height', height)
        form.append('issued', issued)
        form.append('expires', expires)
        form.append('certification', certification)
        form.append('issuedBy', issuedBy)
        form.append('verifiedBy', verifiedBy)
        form.append('issuedOn', issuedOn)












        return axios.post(`${API.URL}/upload`, form)
    }
}

export default new UploadService();