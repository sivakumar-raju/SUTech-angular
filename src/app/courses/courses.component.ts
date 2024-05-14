import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  items = [
    { image: './assets/courses-images/java.jpg' ,title: 'Java', description: 'Our experienced teaching staff provides comprehensive online coaching in Java programming, preparing you for lucrative job opportunities in the software development industry.' },
    { image: './assets/courses-images/python.jpg' ,title: 'Python', description: 'Unlock the power of Python with our online coaching, guided by industry experts. Learn Python programming fundamentals and advanced concepts to excel in diverse career paths, including data science, web development, and automation.' },
    { image: './assets/courses-images/ml.jpg' ,title: 'Machine Learning', description: 'Delve into the world of Machine Learning with our online coaching sessions. Our seasoned instructors will equip you with the skills and knowledge needed to embark on a successful career in artificial intelligence and data analysis.' },
    { image: './assets/courses-images/linux.jpg' ,title: 'Linux Admin', description: 'Master the Linux operating system through our online coaching program. Led by experienced professionals, you will gain hands-on expertise in Linux administration, boosting your employability in the IT sector.' },
    { image: './assets/courses-images/mern.png' ,title: 'MEAN Stack', description: 'Embark on a journey into full-stack development with our online coaching in the MEAN stack. From MongoDB to Angular, our seasoned mentors will provide comprehensive guidance, empowering you to build dynamic web applications and secure rewarding job placements.' },
    { image: './assets/courses-images/sql.jpg' ,title: 'SQL', description: 'Harness the power of SQL with our online coaching sessions. Whether you are a beginner or an experienced professional, our instructors will help you master SQL queries and database management, opening doors to diverse career prospects in database administration and data analysis.' },
 ];
}
