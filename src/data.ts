export interface WilayaData {
  id: string;
  name: string;
  zone: '0' | 'I' | 'IIa' | 'IIb' | 'III';
  tiv: number;           // Capital Assure
  primeNette: number;    // Net Premium
  expectedLoss: number;  // Expected Loss
  difference: number;    // Difference (Loss - Premium)
  pga: number;           // Peak Ground Acceleration
  iv: number;            // Vulnerability Index
  status: 'Hotspot' | 'High Risk' | 'Balanced' | 'Safe';
}

export const WILAYAS_REAL: WilayaData[] = [
  { id: '01', name: 'ADRAR', zone: '0', tiv: 336240000.00, primeNette: 184932.00, expectedLoss: 3362.40, difference: -181569.60, pga: 0.05, iv: 0.10, status: 'Safe' },
  { id: '02', name: 'CHLEF', zone: 'III', tiv: 614287620.00, primeNette: 520726.26, expectedLoss: 1191717.98, difference: 670991.73, pga: 0.30, iv: 0.75, status: 'High Risk' },
  { id: '11', name: 'TAMENRASSET', zone: '0', tiv: 14000620140.00, primeNette: 12729817.88, expectedLoss: 40006.20, difference: -12689811.68, pga: 0.05, iv: 0.10, status: 'Safe' },
  { id: '30', name: 'OURGLA', zone: 'IIb', tiv: 5100529760.00, primeNette: 3061454.37, expectedLoss: 103445.12, difference: -2958009.25, pga: 0.05, iv: 0.05, status: 'Safe' },
  { id: '03', name: 'LAGHOUAT', zone: 'IIa', tiv: 570350930.70, primeNette: 416606.87, expectedLoss: 222436.86, difference: -194170.01, pga: 0.10, iv: 0.25, status: 'Safe' },
  { id: '06', name: 'BEJAIA', zone: 'IIb', tiv: 4401731522.91, primeNette: 3404542.35, expectedLoss: 4529381.74, difference: 1124839.38, pga: 0.20, iv: 0.55, status: 'High Risk' },
  { id: '07', name: 'BISKRA', zone: 'I', tiv: 1014733410.00, primeNette: 520496.41, expectedLoss: 111620.68, difference: -408875.73, pga: 0.10, iv: 0.20, status: 'Safe' },
  { id: '08', name: 'BECHAR', zone: 'IIa', tiv: 12000000.00, primeNette: 8550.00, expectedLoss: 4680.00, difference: -3870.00, pga: 0.10, iv: 0.30, status: 'Safe' },
  { id: '09', name: 'BLIDA', zone: 'III', tiv: 10514700299.21, primeNette: 5125325.80, expectedLoss: 20398518.58, difference: 15273192.78, pga: 0.25, iv: 0.65, status: 'Hotspot' },
  { id: '10', name: 'BOUIRA', zone: 'IIa', tiv: 1337587110.00, primeNette: 895961.60, expectedLoss: 521658.97, difference: -374302.63, pga: 0.15, iv: 0.45, status: 'Balanced' },
  { id: '12', name: 'TEBESSA', zone: 'IIa', tiv: 4028030209.23, primeNette: 2055414.90, expectedLoss: 1570931.78, difference: -484483.12, pga: 0.10, iv: 0.25, status: 'Balanced' },
  { id: '13', name: 'TLEMCEN', zone: 'IIb', tiv: 2410394702.16, primeNette: 624186.25, expectedLoss: 2480296.15, difference: 1856109.90, pga: 0.10, iv: 0.35, status: 'High Risk' },
  { id: '14', name: 'TIARET', zone: 'IIa', tiv: 2812130770.60, primeNette: 1002574.07, expectedLoss: 1096731.00, difference: 94156.93, pga: 0.10, iv: 0.30, status: 'High Risk' },
  { id: '15', name: 'TIZI OUZOU', zone: 'IIb', tiv: 18822273530.86, primeNette: 11495456.54, expectedLoss: 19368119.46, difference: 7872662.93, pga: 0.15, iv: 0.50, status: 'Hotspot' },
  { id: '16', name: 'ALGER', zone: 'III', tiv: 100424548250.16, primeNette: 56670572.31, expectedLoss: 194823623.61, difference: 138153051.30, pga: 0.25, iv: 0.65, status: 'Hotspot' },
  { id: '17', name: 'DJELFA', zone: 'IIa', tiv: 151902000.00, primeNette: 60093.90, expectedLoss: 59241.78, difference: -852.12, pga: 0.10, iv: 0.20, status: 'Safe' },
  { id: '18', name: 'JIJEL', zone: 'IIb', tiv: 2793839540.00, primeNette: 2410171.18, expectedLoss: 2874860.89, difference: 464689.71, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '19', name: 'SETIF', zone: 'IIa', tiv: 36880710983.34, primeNette: 13795149.67, expectedLoss: 14383477.28, difference: 588327.61, pga: 0.15, iv: 0.40, status: 'High Risk' },
  { id: '20', name: 'SAIDA', zone: 'IIa', tiv: 7358000.00, primeNette: 9070.75, expectedLoss: 2869.62, difference: -6201.13, pga: 0.10, iv: 0.30, status: 'Safe' },
  { id: '21', name: 'SKIKDA', zone: 'IIb', tiv: 1605557984.46, primeNette: 1077814.07, expectedLoss: 1652119.17, difference: 574305.09, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '22', name: 'SIDI BEL ABBES', zone: 'IIb', tiv: 239769630.00, primeNette: 203872.65, expectedLoss: 246722.95, difference: 42850.30, pga: 0.10, iv: 0.30, status: 'High Risk' },
  { id: '23', name: 'ANNABA', zone: 'IIb', tiv: 3239888155.00, primeNette: 2224249.23, expectedLoss: 3333844.91, difference: 1109595.68, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '24', name: 'GUELMA', zone: 'IIb', tiv: 81918510.00, primeNette: 47787.68, expectedLoss: 84294.15, difference: 36506.47, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '25', name: 'CONSTANTINE', zone: 'IIa', tiv: 13843084107.90, primeNette: 6173460.90, expectedLoss: 5398802.80, difference: -774658.10, pga: 0.15, iv: 0.50, status: 'Balanced' },
  { id: '26', name: 'MEDEA', zone: 'III', tiv: 3574859548.20, primeNette: 2127904.74, expectedLoss: 6935227.52, difference: 4807322.78, pga: 0.20, iv: 0.55, status: 'High Risk' },
  { id: '27', name: 'MOSTAGANEM', zone: 'IIa', tiv: 2816714525.00, primeNette: 1502825.28, expectedLoss: 1098518.66, difference: -404306.61, pga: 0.15, iv: 0.40, status: 'Balanced' },
  { id: '28', name: 'M SILA', zone: 'IIb', tiv: 2078396130.00, primeNette: 1535516.80, expectedLoss: 2138669.62, difference: 603152.82, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '29', name: 'MASCARA', zone: 'IIa', tiv: 3365902403.63, primeNette: 2369678.15, expectedLoss: 1312701.94, difference: -1056976.21, pga: 0.15, iv: 0.45, status: 'Safe' },
  { id: '30', name: 'OURGLA', zone: 'IIb', tiv: 100529760.00, primeNette: 61454.37, expectedLoss: 103445.12, difference: 41990.76, pga: 0.05, iv: 0.05, status: 'High Risk' },
  { id: '31', name: 'ORAN', zone: 'IIa', tiv: 31414400043.22, primeNette: 12181053.54, expectedLoss: 1251616.02, difference: 70562.48, pga: 0.15, iv: 0.45, status: 'Balanced' },
  { id: '32', name: 'EL BAYADH', zone: 'I', tiv: 1000000.00, primeNette: 2500.00, expectedLoss: 110.00, difference: -2390.00, pga: 0.10, iv: 0.20, status: 'Safe' },
  { id: '34', name: 'B.B ARRERIDJ', zone: 'III', tiv: 3931773560.00, primeNette: 2903933.30, expectedLoss: 7627640.71, difference: 4723707.41, pga: 0.15, iv: 0.40, status: 'High Risk' },
  { id: '35', name: 'BOUMERDES', zone: 'IIb', tiv: 15746649379.50, primeNette: 7770587.37, expectedLoss: 16203302.21, difference: 8432714.84, pga: 0.25, iv: 0.70, status: 'Hotspot' },
  { id: '36', name: 'EL TAREF', zone: 'I', tiv: 6905131270.49, primeNette: 2000473.69, expectedLoss: 759564.44, difference: -1240909.25, pga: 0.15, iv: 0.45, status: 'Safe' },
  { id: '38', name: 'TISSEMSILT', zone: 'I', tiv: 364310849.20, primeNette: 109712.34, expectedLoss: 40074.19, difference: -69638.14, pga: 0.15, iv: 0.50, status: 'Safe' },
  { id: '39', name: 'El Oued', zone: 'IIb', tiv: 799076687.00, primeNette: 391929.82, expectedLoss: 822249.91, difference: 430320.09, pga: 0.05, iv: 0.10, status: 'High Risk' },
  { id: '40', name: 'KHENCHELA', zone: 'IIb', tiv: 503961200.00, primeNette: 363177.13, expectedLoss: 518576.07, difference: 155398.94, pga: 0.10, iv: 0.30, status: 'High Risk' },
  { id: '41', name: 'SOUK AHRAS', zone: 'III', tiv: 21090650.00, primeNette: 17490.82, expectedLoss: 40915.86, difference: 23425.04, pga: 0.10, iv: 0.35, status: 'High Risk' },
  { id: '42', name: 'TIPAZA', zone: 'IIa', tiv: 4477231990.00, primeNette: 3561386.01, expectedLoss: 1746120.48, difference: -1815265.53, pga: 0.25, iv: 0.65, status: 'Balanced' },
  { id: '43', name: 'MILA', zone: 'III', tiv: 4311404348.00, primeNette: 2695490.83, expectedLoss: 8364124.44, difference: 5668633.61, pga: 0.15, iv: 0.50, status: 'Hotspot' },
  { id: '44', name: 'AIN DEFLA', zone: 'IIa', tiv: 1933043903.05, primeNette: 1566270.49, expectedLoss: 753887.12, difference: -812383.37, pga: 0.15, iv: 0.50, status: 'Balanced' },
  { id: '45', name: 'NAAMA', zone: 'IIb', tiv: 2721950.00, primeNette: 1769.27, expectedLoss: 2800.89, difference: 1031.62, pga: 0.10, iv: 0.25, status: 'Safe' },
  { id: '46', name: 'AIN TIMOUCHENT', zone: 'I', tiv: 791507363.58, primeNette: 192721.00, expectedLoss: 87065.81, difference: -105655.19, pga: 0.10, iv: 0.30, status: 'Safe' },
  { id: '47', name: 'GHARDAIA', zone: 'IIb', tiv: 83020280.00, primeNette: 69221.80, expectedLoss: 85427.87, difference: 16206.07, pga: 0.05, iv: 0.15, status: 'High Risk' },
  { id: '48', name: 'RELIZANE', zone: 'IIb', tiv: 1355400973.55, primeNette: 213032.02, expectedLoss: 1394707.60, difference: 1181675.59, pga: 0.15, iv: 0.45, status: 'High Risk' },
  { id: '50', name: 'BORDJ BADJI MOKHTAR', zone: 'IIb', tiv: 6583660.00, primeNette: 6314.43, expectedLoss: 6774.59, difference: 460.16, pga: 0.05, iv: 0.05, status: 'Safe' },
  { id: '51', name: 'OULED DJELLAL', zone: '0', tiv: 3255000.00, primeNette: 1953.00, expectedLoss: 32.55, difference: -1920.45, pga: 0.10, iv: 0.20, status: 'Safe' },
  { id: '54', name: 'IN GUEZZAM', zone: 'I', tiv: 129812000.00, primeNette: 73926.60, expectedLoss: 14279.32, difference: -59647.28, pga: 0.10, iv: 0.10, status: 'Safe' },
  { id: '55', name: 'TOUGGOURT', zone: '0', tiv: 2000000.00, primeNette: 2500.00, expectedLoss: 20.00, difference: -2480.00, pga: 0.05, iv: 0.10, status: 'Safe' },
  { id: '57', name: 'EL MGHAIR', zone: '0', tiv: 3000000.00, primeNette: 2500.00, expectedLoss: 30.00, difference: -2470.00, pga: 0.05, iv: 0.10, status: 'Safe' }
];

export const WILAYAS = WILAYAS_REAL;

export const PORTFOLIO_STATS = [
  { category: 'Real Estate', capital: 145000, retention: 85200 },
  { category: 'Commercial', capital: 88000, retention: 42000 },
  { category: 'Industrial', capital: 66405, retention: 29184 },
];

export const TREND_DATA = [
  { magnitude: 4.0, ruinProb: 0.001 },
  { magnitude: 4.5, ruinProb: 0.005 },
  { magnitude: 5.0, ruinProb: 0.012 },
  { magnitude: 5.5, ruinProb: 0.045 },
  { magnitude: 6.0, ruinProb: 0.12 },
  { magnitude: 6.5, ruinProb: 0.28 },
  { magnitude: 7.0, ruinProb: 0.55 },
  { magnitude: 7.5, ruinProb: 0.82 },
];
