import { ChangeDetectorRef, Component } from '@angular/core';
import { activity } from '../../interfaces/activity.interface';
import { UserService } from '../../services';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { EmotionService } from '../../services/emotion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ButtonModule,FormsModule,CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  activities: activity[] = [];
  imagenActual: number = 0;
  userComment: string = '';
  mensajeComentario: boolean = false;


  constructor(
    private userService: UserService,
    private emotionService: EmotionService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.getActivities().subscribe((resp) => {
      this.activities = resp;
    });
  }

  siguiente(): void {
    if (this.imagenActual < this.activities.length - 1) {
      this.imagenActual++;
    } else {
      this.imagenActual = 0;
    }
  }

  anterior(): void {
    if (this.imagenActual > 0) {
      this.imagenActual--;
    } else {
      this.imagenActual = this.activities.length - 1;
    }
  }
  submitComment(): void {
    if (this.userComment.trim() === '') {
      console.error('El comentario no puede estar vacío.');
      return;
    }
  
    this.emotionService.enviarComentario(this.userComment).subscribe({
      next: (resp) => {
        console.log('Comentario enviado con éxito:', resp);
        this.userComment = '';
        this.mensajeComentario = true;
        this.cd.detectChanges();
        setTimeout(() => {
          this.mensajeComentario = false;
          this.cd.detectChanges();
        }, 5000);
      },
      error: (err) => {
        console.error('Error al enviar el comentario:', err);
      },
    });
  }
}
