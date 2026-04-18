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
  { id: '01', name: 'ADRAR', zone: '0', tiv: 336240000.00, primeNette: 184932.00, expectedLoss: 3362.40, difference: -181569.60, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '02', name: 'CHLEF', zone: 'III', tiv: 614287620.00, primeNette: 520726.26, expectedLoss: 270286.55, difference: -250439.70, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '03', name: 'LAGHOUAT', zone: 'IIa', tiv: 570350930.70, primeNette: 416606.87, expectedLoss: 222436.86, difference: -194170.01, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '04', name: 'OUM EL BOUAGHI', zone: 'IIa', tiv: 323341000.00, primeNette: 329009.93, expectedLoss: 126102.99, difference: -202906.94, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '05', name: 'BATNA', zone: 'IIa', tiv: 4215539071.12, primeNette: 2673171.58, expectedLoss: 1644060.24, difference: -1029111.34, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '06', name: 'BEJAIA', zone: 'IIb', tiv: 4401731522.91, primeNette: 3404542.35, expectedLoss: 4529381.74, difference: 1124839.38, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '07', name: 'BISKRA', zone: 'I', tiv: 1014733410.00, primeNette: 520496.41, expectedLoss: 111620.68, difference: -408875.73, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '08', name: 'BECHAR', zone: 'IIa', tiv: 12000000.00, primeNette: 8550.00, expectedLoss: 4680.00, difference: -3870.00, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '09', name: 'BLIDA', zone: 'III', tiv: 10514700299.21, primeNette: 5125325.80, expectedLoss: 4626468.13, difference: -498857.67, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '10', name: 'BOUIRA', zone: 'IIa', tiv: 1337587110.00, primeNette: 895961.60, expectedLoss: 521658.97, difference: -374302.63, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '11', name: 'TAMENRASSET', zone: '0', tiv: 4000620140.00, primeNette: 2729817.88, expectedLoss: 40006.20, difference: -2689811.68, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '12', name: 'TEBESSA', zone: 'IIa', tiv: 4028030209.23, primeNette: 2055414.90, expectedLoss: 1570931.78, difference: -484483.12, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '13', name: 'TLEMCEN', zone: 'IIb', tiv: 2410394702.16, primeNette: 624186.25, expectedLoss: 2480296.15, difference: 1856109.90, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '14', name: 'TIARET', zone: 'IIa', tiv: 2812130770.60, primeNette: 1002574.07, expectedLoss: 1096731.00, difference: 94156.93, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '15', name: 'TIZI OUZOU', zone: 'IIb', tiv: 18822273530.86, primeNette: 11495456.54, expectedLoss: 19368119.46, difference: 7872662.93, pga: 0.15, iv: 0.4, status: 'Hotspot' },
  { id: '16', name: 'ALGER', zone: 'III', tiv: 100424548250.16, primeNette: 56670572.31, expectedLoss: 44186801.23, difference: -12483771.08, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '17', name: 'DJELFA', zone: 'IIa', tiv: 151902000.00, primeNette: 60093.90, expectedLoss: 59241.78, difference: -852.12, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '18', name: 'JIJEL', zone: 'IIb', tiv: 2793839540.00, primeNette: 2410171.18, expectedLoss: 2874860.89, difference: 464689.71, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '19', name: 'SETIF', zone: 'IIa', tiv: 36880710983.34, primeNette: 13795149.67, expectedLoss: 14383477.28, difference: 588327.61, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '20', name: 'SAIDA', zone: 'IIa', tiv: 7358000.00, primeNette: 9070.75, expectedLoss: 2869.62, difference: -6201.13, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '21', name: 'SKIKDA', zone: 'IIb', tiv: 1605557984.46, primeNette: 1077814.07, expectedLoss: 1652119.17, difference: 574305.09, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '22', name: 'SIDI BEL ABBES', zone: 'IIb', tiv: 239769630.00, primeNette: 203872.65, expectedLoss: 246722.95, difference: 42850.30, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '23', name: 'ANNABA', zone: 'IIb', tiv: 3239888155.00, primeNette: 2224249.23, expectedLoss: 3333844.91, difference: 1109595.68, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '24', name: 'GUELMA', zone: 'IIb', tiv: 81918510.00, primeNette: 47787.68, expectedLoss: 84294.15, difference: 36506.47, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '25', name: 'CONSTANTINE', zone: 'IIa', tiv: 13843084107.90, primeNette: 6173460.90, expectedLoss: 5398802.80, difference: -774658.10, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '26', name: 'MEDEA', zone: 'III', tiv: 3574859548.20, primeNette: 2127904.74, expectedLoss: 1572938.20, difference: -554966.54, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '27', name: 'MOSTAGANEM', zone: 'IIa', tiv: 2816714525.00, primeNette: 1502825.28, expectedLoss: 1098518.66, difference: -404306.61, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '43', name: 'MILA', zone: 'III', tiv: 4311404348.00, primeNette: 2695490.83, expectedLoss: 1897017.91, difference: -798472.92, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '44', name: 'AIN DEFLA', zone: 'IIa', tiv: 1933043903.05, primeNette: 1566270.49, expectedLoss: 753887.12, difference: -812383.37, pga: 0.15, iv: 0.4, status: 'Safe' },
  { id: '45', name: 'NAAMA', zone: 'IIb', tiv: 2721950.00, primeNette: 1769.27, expectedLoss: 2800.89, difference: 1031.62, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '46', name: 'AIN TIMOUCHENT', zone: 'I', tiv: 791507363.58, primeNette: 192721.00, expectedLoss: 87065.81, difference: -105655.19, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '47', name: 'GHARDAIA', zone: 'IIb', tiv: 83020280.00, primeNette: 69221.80, expectedLoss: 85427.87, difference: 16206.07, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '48', name: 'RELIZANE', zone: 'IIb', tiv: 1355400973.55, primeNette: 213032.02, expectedLoss: 1394707.60, difference: 1181675.59, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '50', name: 'BORDJ BADJI MOKHTAR', zone: 'IIb', tiv: 6583660.00, primeNette: 6314.43, expectedLoss: 6774.59, difference: 460.16, pga: 0.15, iv: 0.4, status: 'High Risk' },
  { id: '51', name: 'OULED DJELLAL', zone: '0', tiv: 3255000.00, primeNette: 1953.00, expectedLoss: 32.55, difference: -1920.45, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '54', name: 'IN GUEZZAM', zone: 'I', tiv: 129812000.00, primeNette: 73926.60, expectedLoss: 14279.32, difference: -59647.28, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '55', name: 'TOUGGOURT', zone: '0', tiv: 2000000.00, primeNette: 2500.00, expectedLoss: 20.00, difference: -2480.00, pga: 0.15, iv: 0.4, status: 'Balanced' },
  { id: '57', name: 'EL MGHAIR', zone: '0', tiv: 3000000.00, primeNette: 2500.00, expectedLoss: 30.00, difference: -2470.00, pga: 0.15, iv: 0.4, status: 'Balanced' }
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
