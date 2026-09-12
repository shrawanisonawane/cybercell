import fs from 'fs';

const incidentsPath = 'c:/Users/goura/maharashtra/src/data/incidents.json';
const data = JSON.parse(fs.readFileSync(incidentsPath, 'utf8'));

const authenticCartoonMap = {
  'upi_fraud': '/cartoons/otp_scam.jpg',
  'investment_scam': '/cartoons/triage_question.jpg',
  'financial_fraud': '/cartoons/step2.jpg',
  'phishing': '/cartoons/dont_share_otp.jpg',
  'account_takeover': '/cartoons/step4.jpg',
  'fake_social_profile': '/cartoons/chakshu.jpg',
  'identity_photo_misuse': '/cartoons/chakshu_vector.jpg',
  'sextortion': '/cartoons/helpline_1930.jpg',
  'online_harassment': '/cartoons/step5.jpg',
  'job_scam': '/cartoons/explorer_banner.jpg',
  'shopping_fraud': '/cartoons/step2.jpg',
  'loan_app_fraud': '/cartoons/otp_scam.jpg',
  'malware_apk': '/cartoons/step4.jpg',
  'sim_mobile_fraud': '/cartoons/chakshu.jpg',
  'crypto_fraud': '/cartoons/triage_question.jpg',
  'other': '/cartoons/police_hero_alt.jpg'
};

const updatedData = data.map(item => {
  return {
    ...item,
    image: authenticCartoonMap[item.id] || '/cartoons/hero.jpg'
  };
});

fs.writeFileSync(incidentsPath, JSON.stringify(updatedData, null, 2), 'utf8');
console.log('Successfully updated incidents.json with authentic vintage Indian cartoon JPGs!');
