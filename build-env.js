// build-env.js
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'src/environments');
const devPath = path.join(dir, 'environment.ts');
const prodPath = path.join(dir, 'environment.prod.ts');

// 1. Crear carpeta si no existe
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log('📁 Carpeta src/environments creada');
}

// 2. Crear environment.ts (modo desarrollo)
const devContent = `
export const environment = {
  production: false,
  page_Id: '',
  facebook_token: '',
  facebook_url: 'https://www.facebook.com/SuarezDiscountFlooring',
  instagramUrl: 'https://instagram.com/discountflooring',
  tiktokUrl: 'https://tiktok.com/@discountflooring',
  contactPhone: '',
  contactEmail: '',
  contactAddress: ''
};
`;

fs.writeFileSync(devPath, devContent.trim());
console.log('✅ environment.ts creado');

// 3. Crear environment.prod.ts (modo producción con variables)
const prodContent = `
export const environment = {
  production: true,
  page_Id: '${process.env.FACEBOOK_PAGE_ID || ''}',
  facebook_token: '${process.env.FACEBOOK_TOKEN || ''}',
  facebook_url: 'https://www.facebook.com/SuarezDiscountFlooring',
  instagramUrl: 'https://instagram.com/discountflooring',
  tiktokUrl: 'https://tiktok.com/@discountflooring',
  contactPhone: '${process.env.CONTACT_PHONE || ''}',
  contactEmail: '${process.env.CONTACT_EMAIL || ''}',
  contactAddress: '${process.env.CONTACT_ADDRESS || ''}'
};
`;

fs.writeFileSync(prodPath, prodContent.trim());
console.log('✅ environment.prod.ts creado');
