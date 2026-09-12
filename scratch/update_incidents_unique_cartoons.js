import fs from 'fs';

const incidentsPath = 'c:/Users/goura/maharashtra/src/data/incidents.json';
const data = JSON.parse(fs.readFileSync(incidentsPath, 'utf8'));

const uniqueCartoonMap = {
  'upi_fraud': '/cartoons/scen_upi_fraud.jpg',
  'investment_scam': '/cartoons/scen_investment_scam.jpg',
  'financial_fraud': '/cartoons/scen_financial_fraud.jpg',
  'phishing': '/cartoons/scen_phishing.jpg',
  'account_takeover': '/cartoons/scen_account_takeover.jpg',
  'fake_social_profile': '/cartoons/scen_fake_social_profile.jpg',
  'identity_photo_misuse': '/cartoons/scen_identity_photo_misuse.jpg',
  'sextortion': '/cartoons/scen_sextortion.jpg',
  'online_harassment': '/cartoons/scen_online_harassment.jpg',
  'job_scam': '/cartoons/scen_job_scam.jpg',
  'shopping_fraud': '/cartoons/scen_shopping_fraud.jpg',
  'loan_app_fraud': '/cartoons/scen_loan_app_fraud.jpg',
  'malware_apk': '/cartoons/scen_malware_apk.jpg',
  'sim_mobile_fraud': '/cartoons/scen_sim_mobile_fraud.jpg',
  'crypto_fraud': '/cartoons/scen_crypto_fraud.jpg',
  'other': '/cartoons/scen_other.jpg'
};

const updatedData = data.map(item => {
  return {
    ...item,
    image: uniqueCartoonMap[item.id] || '/cartoons/scen_other.jpg'
  };
});

fs.writeFileSync(incidentsPath, JSON.stringify(updatedData, null, 2), 'utf8');
console.log('Successfully updated incidents.json with 16 unique cartoon panel images!');
