import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        doctors: resolve(__dirname, 'doctors.html'),
        appointment: resolve(__dirname, 'appointment.html'),
        adminlogin: resolve(__dirname, 'adminlogin.html'),
      },
    },
  },
});
