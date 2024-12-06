import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmotionService {
  private readonly base_url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  startRecognition() {
    return this.http.get("http://127.0.0.1:5000/emociones");
  }
  
  enviarComentario(comentario: string) {
    const body = { comentario };
    return this.http.post('http://127.0.0.1:5000/guardar_comentario', body);
  }
}
