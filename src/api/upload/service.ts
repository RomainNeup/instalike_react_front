import API from '../api';

class UploadApi {
  public static uploadMedia(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('media', file);
    return API.post<UploadResponse>('upload', formData).then((a) => a.data.media);
  }
}

export default UploadApi;
