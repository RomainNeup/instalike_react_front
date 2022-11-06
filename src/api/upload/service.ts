import API from '../api';

class UploadApi {
  public uploadMedia(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('media', file);
    return API.post<UploadResponse>('upload/save', formData).then((a) => a.data.media);
  }
}

export default new UploadApi();
