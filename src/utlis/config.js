export const consumerKey = 'ck_3de82379a488641a9ee6834be91005e2cb650312';
export const consumerSecret = 'cs_8c0c1275e14271a55ed440c2569ee2726f527350';
// vite.config.js
export default {
    server: {
      proxy: {
        '/wp-json': {
          target: 'https://goldenrod-clam-913898.hostingersite.com',
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
  