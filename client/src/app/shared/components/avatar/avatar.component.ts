import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, AvatarModule, BadgeModule, TooltipModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl?: string;
  @Input() label?: string;
  @Input() icon?: string;
  @Input() size?: 'normal' | 'large' | 'xlarge' = 'normal';
  @Input() shape?: 'square' | 'circle' = 'circle';
  @Input() style?: any;
  @Input() styleClass?: string;
  @Input() containerClass?: string = '';
  @Input() responsive: boolean = false;
  @Input() tooltip?: string;
  @Input() tooltipPosition?: string = 'top';
  @Input() badgeValue?: string;
  @Input() badgeSeverity?: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() badgeSize?: 'normal' | 'large' | 'xlarge' = 'normal';
normal: "large"|"xlarge"|undefined;
  
  ngOnInit() {
    // Añadir clase responsive si está habilitado
    if (this.responsive) {
      this.containerClass += ' responsive-avatar';
    }
  }
}