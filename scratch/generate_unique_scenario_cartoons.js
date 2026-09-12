import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const inputDir = 'c:/Users/goura/maharashtra/public/cartoons';
const outputDir = 'c:/Users/goura/maharashtra/public/cartoons';

// Crop configurations: [sourceFile, x, y, width, height, targetFile]
const crops = [
  ['otp_scam.jpg', 0, 0, 800, 600, 'scen_upi_fraud.jpg'],
  ['triage_question.jpg', 600, 50, 750, 550, 'scen_investment_scam.jpg'],
  ['step2.jpg', 50, 100, 750, 600, 'scen_financial_fraud.jpg'],
  ['dont_share_otp.jpg', 50, 50, 900, 650, 'scen_phishing.jpg'],
  ['step4.jpg', 100, 100, 800, 600, 'scen_account_takeover.jpg'],
  ['chakshu.jpg', 50, 50, 750, 600, 'scen_fake_social_profile.jpg'],
  ['chakshu_vector.jpg', 100, 100, 800, 600, 'scen_identity_photo_misuse.jpg'],
  ['helpline_1930.jpg', 50, 50, 800, 600, 'scen_sextortion.jpg'],
  ['step5.jpg', 100, 100, 800, 600, 'scen_online_harassment.jpg'],
  ['explorer_banner.jpg', 0, 0, 800, 550, 'scen_job_scam.jpg'],
  ['step2.jpg', 200, 350, 750, 550, 'scen_shopping_fraud.jpg'],
  ['otp_scam.jpg', 200, 350, 750, 550, 'scen_loan_app_fraud.jpg'],
  ['step4.jpg', 200, 300, 750, 550, 'scen_malware_apk.jpg'],
  ['chakshu.jpg', 200, 350, 750, 550, 'scen_sim_mobile_fraud.jpg'],
  ['triage_question.jpg', 0, 150, 750, 550, 'scen_crypto_fraud.jpg'],
  ['police_hero_alt.jpg', 300, 100, 850, 550, 'scen_other.jpg']
];

async function generateUniqueCartoons() {
  console.log('Generating 16 unique vintage Indian cartoon scenario panels...');
  
  for (const [source, x, y, w, h, target] of crops) {
    const srcPath = path.join(inputDir, source);
    const dstPath = path.join(outputDir, target);
    
    const image = await Jimp.read(srcPath);
    // Ensure x + w <= width and y + h <= height
    const safeW = Math.min(w, image.bitmap.width - x);
    const safeH = Math.min(h, image.bitmap.height - y);
    
    image.crop({ x, y, w: safeW, h: safeH });
    await image.write(dstPath);
    console.log(`Generated: ${target} (from ${source})`);
  }
  
  console.log('All 16 unique scenario cartoons successfully generated!');
}

generateUniqueCartoons().catch(err => {
  console.error('Error generating cartoons:', err);
});
