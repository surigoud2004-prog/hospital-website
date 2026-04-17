import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: [
        'index.html',
        'services.html',
        'doctors.html',
        'appointment.html',
        'adminlogin.html'
        
      ]
    }
  }
});
