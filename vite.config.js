import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite resolves these extensions
},

})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         extensions: ['.js', '.jsx'], // Ensure Vite resolves these extensions
//     },
// });